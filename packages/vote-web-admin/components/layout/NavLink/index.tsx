import { Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  url: string;
};

const NavLink: React.FC<Props> = ({ children, url }) => {
  return (
    <NextLink passHref href={url}>
      <ChakraLink
        px={2}
        py={1}
        rounded="md"
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export default NavLink;
