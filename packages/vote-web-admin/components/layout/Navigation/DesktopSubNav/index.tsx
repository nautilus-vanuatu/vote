import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';

import { NavItem } from '../items';

const DesktopSubNav = ({ label, href, subLabel }: NavItem): JSX.Element => {
  return (
    <Link
      href={href}
      role="group"
      display="block"
      p={2}
      rounded="md"
      _hover={{ bg: useColorModeValue('pink.50', 'app.blue.600') }}
    >
      <Stack direction="row" align="center">
        <Box>
          <Text
            transition="all .3s ease"
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize="sm">{subLabel}</Text>
        </Box>
        <Flex
          transition="all .3s ease"
          transform="translateX(-10px)"
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify="flex-end"
          align="center"
          flex={1}
        >
          <Icon color="pink.400" w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

export default DesktopSubNav;
