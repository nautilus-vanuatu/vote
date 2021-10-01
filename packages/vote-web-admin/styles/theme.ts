import { extendTheme, ThemeConfig, theme as baseTheme } from '@chakra-ui/react';
import { Dict } from '@chakra-ui/utils';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const AppColors = {
  red: '#E51C44',
  ice: '#DDE3F0',
};

const Input = {
  variants: {
    outline: (props: Dict) => ({
      field: {
        bg: mode('gray.100', '#142938')(props),
        borderColor: '#355267',
      },
    }),
  },
  defaultProps: {
    focusBorderColor: '#355267',
  },
};

const theme = extendTheme({
  components: {
    Input,
  },
  colors: {
    app: AppColors,
  },
});

export default theme;
