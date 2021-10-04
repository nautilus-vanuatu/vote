import { Stack, useColorModeValue } from '@chakra-ui/react';

import MobileNavItem from '../MobileNavItem';
import NAV_ITEMS from '../items';

const MobileNav = (): JSX.Element => {
  return (
    <Stack
      bg={useColorModeValue('white', 'app.blue.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
