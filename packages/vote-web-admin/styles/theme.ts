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
  blue: {
    800: '#081D2D',
    600: '#142938',
    500: '#355267',
  },
};

const Input = {
  variants: {
    outline: (props: Dict) => ({
      field: {
        bg: mode('gray.100', AppColors.blue[600])(props),
        borderColor: AppColors.blue[500],
      },
    }),
  },
  defaultProps: {
    focusBorderColor: AppColors.blue[500],
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
