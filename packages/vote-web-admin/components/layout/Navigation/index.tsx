import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useDispatch } from 'react-redux';
import { logout } from '@monorepo-vote/redux-store/src/slices/auth.slice';
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Collapse,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useTextColor } from '@monorepo-vote/util';
import Logo from '@monorepo-vote/components/src/layout/Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import theme from '../../../styles/theme';

const Navigation: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const { colorMode, toggleColorMode } = useColorMode();

  const dispatch = useDispatch();

  const textColor = useTextColor();

  function handleLogout(): void {
    dispatch(logout());
    router.replace('/');
  }

  return (
    <>
      <Box
        borderRadius="sm"
        bg={useColorModeValue('gray.100', theme.colors.app.blue[800])}
        p={4}
        // mb={4}
        textColor={textColor}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <NextLink href="/">
              <Flex
                flexDirection="column"
                _hover={{ cursor: 'pointer' }}
                justifyContent="center"
              >
                <Flex>
                  <Flex p={1} alignItems="center">
                    <Logo width={40} />
                  </Flex>
                  <Flex p={1} alignItems="center">
                    <Heading>vot-E</Heading>
                  </Flex>
                </Flex>
                <Box align="center">
                  <Text fontSize="xs">Módulo administrativo</Text>
                </Box>
              </Flex>
            </NextLink>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </HStack>
          <Flex alignItems="center">
            <Menu>
              <IconButton
                bg={useColorModeValue('gray.200', 'gray.800')}
                onClick={toggleColorMode}
                m={2}
                aria-label="toggle"
                isRound
                size="md"
                fontSize="20px"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              />
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <Avatar
                  size="sm"
                  src="https://avatars.githubusercontent.com/u/12944198?v=4"
                />
              </MenuButton>

              <MenuList>
                <MenuItem>Perfil</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Sair</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
};

export default Navigation;
