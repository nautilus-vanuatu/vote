import { useEffect, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';

function useGradient(): string {
  const { colorMode } = useColorMode();
  const [gradient, setGradient] = useState('');

  useEffect(() => {
    setGradient(
      colorMode === 'light'
        ? 'linear(to-b, , gray.50, gray.100)'
        : 'linear(to-b, #081D2D, #040F17)'
    );
  }, [colorMode]);

  return gradient;
}

function useTextColor(): string {
  const { colorMode } = useColorMode();
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    setTextColor(colorMode === 'light' ? 'gray.800' : 'app.ice');
  }, [colorMode]);

  return textColor;
}

export { useGradient, useTextColor };
