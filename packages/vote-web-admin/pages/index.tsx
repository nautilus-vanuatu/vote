import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';

import { authSelector } from '@monorepo-vote/redux-store/src/slices/auth.slice';
import withAuth from '../utils/withAuth';
import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  const { user } = useSelector(authSelector);

  return (
    <Layout>
      <Flex h="100%">{user && <span>{user.name}</span>}</Flex>
    </Layout>
  );
};

export default withAuth(Home);
