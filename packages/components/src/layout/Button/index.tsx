import React, { ReactNode } from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

type Props = ButtonProps & {
  buttonstyle?: 'primary' | 'secondary' | 'alert';
};
const Button: React.FC<Props> = props => {
  const { buttonstyle, children } = props;
  let colorScheme = 'teal';

  switch (buttonstyle) {
    case 'primary':
      colorScheme = 'teal';
      break;
    case 'secondary':
      colorScheme = 'cyan';
      break;
    case 'alert':
      colorScheme = 'red';
      break;
    default:
      colorScheme = 'teal';
      break;
  }

  return (
    <ChakraButton {...props} colorScheme={colorScheme}>
      {children}
    </ChakraButton>
  );
};

export default Button;
