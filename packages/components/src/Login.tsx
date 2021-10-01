import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { IsString, IsNotEmpty } from 'class-validator';
import { useTextColor } from '@monorepo-vote/util';
import Logo from './layout/Logo';

class User {
  @IsString()
  @IsNotEmpty({ message: 'Usuário obrigatório' })
  username: string | undefined;

  @IsString()
  @IsNotEmpty({ message: 'Senha obrigatória' })
  password: string | undefined;
}

type Props = {
  title: string;
  onLogin(data: LoginFormFields): Promise<void>;
};

export type LoginFormFields = {
  username: string;
  password: string;
};

export default function Login({ title, onLogin }: Props): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({
    resolver: classValidatorResolver(User),
    mode: 'onChange',
  });

  function onSubmit(data: LoginFormFields): void {
    onLogin(data);
  }

  const textColor = useTextColor();

  return (
    <Stack
      spacing={4}
      width="100%"
      maxW="xl"
      py={12}
      px={6}
      align="center"
      color={textColor}
    >
      <Stack align="center">
        <Logo width={120} />
      </Stack>
      <Stack align="center">
        <Heading fontSize="4xl">{title}</Heading>
      </Stack>
      <Box
        rounded="lg"
        boxShadow="lg"
        p={4}
        w={{ base: '100%', xl: '60%' }}
        align="center"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl id="username" isInvalid={!!errors?.username?.message}>
              <FormLabel>Usuário</FormLabel>
              <Input
                type="text"
                {...register('username')}
                isInvalid={!!errors?.username?.message}
              />
              <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
            </FormControl>

            <FormControl id="password" isInvalid={!!errors?.password?.message}>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                {...register('password')}
                isInvalid={!!errors?.password?.message}
              />
              <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align="start"
                justify="space-between"
              />
              <Button
                type="submit"
                bg="app.red"
                color="app.ice"
                opacity="0.8"
                _hover={{
                  opacity: 1,
                }}
                isLoading={isSubmitting}
                disabled={!!errors.username || !!errors.password}
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
