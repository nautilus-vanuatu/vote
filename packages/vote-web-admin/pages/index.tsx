import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';

import { authSelector } from '@monorepo-vote/redux-store/src/slices/auth.slice';
import withAuth from '../utils/withAuth';
import Navigation from '../components/layout/Navigation';

const Home: NextPage = () => {
  const { user } = useSelector(authSelector);

  return (
    <Flex p={4} w="full" flexDirection="column">
      <Navigation />
      {user && <span>{user.name}</span>}
    </Flex>
  );
};

export default withAuth(Home);
