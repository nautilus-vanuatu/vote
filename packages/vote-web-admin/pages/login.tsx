import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Flex } from '@chakra-ui/react';
import {
  authUser,
  authSelector,
} from '@monorepo-vote/redux-store/src/slices/auth.slice';

import {
  Login as LoginCompo,
  LoginFormFields,
} from '@monorepo-vote/components';

import { useGradient } from '@monorepo-vote/util';

export default function Login(): JSX.Element {
  const router = useRouter();

  const { hasErrors } = useSelector(authSelector);

  const dispatch = useDispatch();

  async function handleClick(data: LoginFormFields): Promise<void> {
    dispatch(authUser(data));

    if (!hasErrors) router.push('/');
  }

  const gradient = useGradient();

  return (
    <Flex minH="100vh" align="center" justify="center" bgGradient={gradient}>
      <LoginCompo title="vot-E" onLogin={handleClick} />
    </Flex>
  );
}
