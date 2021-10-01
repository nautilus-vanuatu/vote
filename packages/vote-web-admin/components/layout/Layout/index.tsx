import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';

import { useGradient } from '@monorepo-vote/util';
import Navigation from '../Navigation';

const Layout: NextPage = ({ children }) => {
  const gradient = useGradient();

  return (
    <Flex w="100%" h="100vh" flexDirection="column">
      <Navigation />
      <Flex
        w="100%"
        h="100%"
        flexDirection="column"
        p={4}
        bgGradient={gradient}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
