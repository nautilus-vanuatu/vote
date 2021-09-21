import type { NextPage } from 'next';
import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';

import Navigation from '../Navigation';

type Props = {
  title: string;
};

const Layout: NextPage<Props> = ({ title, children }) => {
  return (
    <Flex p={4} w="full" minH="100vh" flexDirection="column">
      <Navigation />
      {/* <Box
        borderRadius="sm"
        bg={useColorModeValue('gray.100', 'gray.900')}
        p={2}
        mb={4}
      >
        <Heading size="md">{title}</Heading>
      </Box> */}
      {children}
    </Flex>
  );
};

export default Layout;
