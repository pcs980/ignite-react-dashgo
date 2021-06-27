import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { DrawerProvider } from '../contexts/DrawerContext';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DrawerProvider>
        <Component {...pageProps} />
      </DrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp
