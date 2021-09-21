import type { NextPage } from 'next';
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
} from '@chakra-ui/react';

import { authSelector } from '@monorepo-condo/redux-store/src/slices/auth.slice';
import Input from '@monorepo-condo/components/src/layout/Input';
import Button from '@monorepo-condo/components/src/layout/Button';
import withAuth from '../../utils/withAuth';
import Layout from '../../components/layout/Layout';

const Condominio: NextPage = () => {
  return (
    <Layout title="Condomínios">
      <Box borderWidth="1px" rounded="md" p={4}>
        <Heading size="md" pb={4}>
          Pesquisar Condomínios
        </Heading>
        <FormControl id="email">
          <FormLabel>Nome do Condomínio</FormLabel>
          <Input type="text" />
          <FormErrorMessage />
        </FormControl>
        <Button buttonstyle="primary" mt={4} type="submit">
          Pesquisar
        </Button>
      </Box>
    </Layout>
  );
};

export default withAuth(Condominio);
