import { CombinedState, createSlice } from '@reduxjs/toolkit';
import Cookie from 'js-cookie';
import { toast } from 'react-toastify';

import api from '@monorepo-vote/axios-config';

import { RootState, AppDispatch } from '../../index';

type AuthType = {
  username: string;
  password: string;
};

type UserType = {
  id: string;
  email: string;
  username: string;
  name: string;
};

type StateType = {
  loading: boolean;
  hasErrors: boolean;
  user?: UserType;
  token?: string;
  flagOperation: boolean;
};

const initialState: StateType = {
  loading: false,
  hasErrors: false,
  user: {} as UserType,
  flagOperation: false,
  token: Cookie.get('votE-token') ? Cookie.get('votE-token') : undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getAuth: state => {
      state.loading = true;
    },
    getAuthSuccess: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.loading = false;
      state.hasErrors = false;
    },
    getAuthFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
    getLogout: state => {
      state.loading = true;
    },
    getLogoutSuccess: state => {
      state.user = undefined;
      state.token = undefined;
      state.loading = false;
      state.hasErrors = false;
    },
    getLogoutFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

const {
  getAuth,
  getAuthSuccess,
  getAuthFailure,
  getLogout,
  getLogoutFailure,
  getLogoutSuccess,
} = authSlice.actions;

export const authSelector = (state: RootState): CombinedState<StateType> =>
  state.auth;

export default authSlice.reducer;

export const authUser =
  (auth: AuthType) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(getAuth());

    try {
      // const response = await api.post('/auth', auth);
      const response = {
        data: {
          user: {
            id: '1',
            username: 'alexandre.odoni',
            email: 'aleodoni@gmail.com',
            name: 'Alexandre',
          },
          token: 'GHGHJD&665RRT8hjsdsd(*(ggsaf#@',
        },
      };

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      Cookie.set('votE-token', response.data.token);

      dispatch(getAuthSuccess(response.data));

      toast.dark(`Bem vindo ${response.data.user.name}`);
    } catch (error) {
      dispatch(getAuthFailure());

      toast.error('Erro ao autenticar usuário');
    }
  };

export const logout =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(getLogout());

    try {
      api.defaults.headers.Authorization = `Bearer`;

      Cookie.remove('votE-token');

      dispatch(getLogoutSuccess());

      toast.dark('Usuário desconectado com sucesso');
    } catch (error) {
      dispatch(getLogoutFailure());

      toast.error('Erro ao desconectar usuário');
    }
  };
