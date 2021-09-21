import React from 'react';

import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

const Input: React.FC<InputProps> = props => {
  return <ChakraInput focusBorderColor="teal.400" {...props} />;
};

export default Input;
