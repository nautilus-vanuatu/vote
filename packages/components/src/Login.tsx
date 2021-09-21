import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  // Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from './layout/Input';

type Props = {
  title: string;
  subtitle: string;
  onLogin(data: LoginFormFields): Promise<void>;
};

export type LoginFormFields = {
  email: string;
  password: string;
};

export default function Login({
  title,
  subtitle,
  onLogin,
}: Props): JSX.Element {
  const loginSchema = yup.object().shape({
    email: yup.string().email('e-mail inválido').required('e-mail obrigatório'),
    password: yup.string().required('senha obrigatória'),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(loginSchema), mode: 'onChange' });

  function onSubmit(data: LoginFormFields): void {
    onLogin(data);
  }

  return (
    <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
      <Stack align="center">
        <Heading fontSize="4xl">{title}</Heading>
        <Text fontSize="lg" color="gray.600">
          {subtitle}
        </Text>
      </Stack>
      <Box
        rounded="lg"
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow="lg"
        p={8}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={!!errors?.email?.message}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                {...register('email')}
                isInvalid={errors.email}
              />
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl id="password" isInvalid={!!errors?.password?.message}>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                {...register('password')}
                isInvalid={errors.password}
              />
              <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align="start"
                justify="space-between"
              >
                <Checkbox>Remember me</Checkbox>
                <Link color="blue.400">Esqueci minha senha</Link>
              </Stack>
              <Button
                type="submit"
                bg="teal.500"
                color="white"
                _hover={{
                  bg: 'teal.400',
                }}
                isLoading={isSubmitting}
                disabled={!!errors.email || !!errors.password}
              >
                Entrar
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
}
