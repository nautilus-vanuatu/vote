import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import {
  authUser,
  authSelector,
} from '@monorepo-condo/redux-store/src/slices/auth.slice';

import {
  Login as LoginCompo,
  LoginFormFields,
} from '@monorepo-condo/components';

export default function Login(): JSX.Element {
  const router = useRouter();

  const { hasErrors } = useSelector(authSelector);

  const dispatch = useDispatch();

  async function handleClick(data: LoginFormFields): Promise<void> {
    dispatch(authUser(data));

    if (!hasErrors) router.push('/');
  }

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <LoginCompo
        title="GeCon - Administrativo"
        subtitle="Módulo Administrativo do Gerenciador de Condomínios"
        onLogin={handleClick}
      />
    </Flex>
  );
}
