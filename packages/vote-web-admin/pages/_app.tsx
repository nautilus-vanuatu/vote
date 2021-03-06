import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import store from '@monorepo-vote/redux-store/index';
import 'react-toastify/dist/ReactToastify.css';

import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const persistor = persistStore(store);

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
      <ToastContainer autoClose={3000} />
    </ChakraProvider>
  );
}
export default MyApp;
