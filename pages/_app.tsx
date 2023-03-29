import type { AppProps } from 'next/app';
import wrapper from '@/store';
import { store } from '@/store';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/globalStyle';
import { theme } from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/components/@common/header';
import FooterNav from '@/components/@common/footerNav';
import { Main } from '@/styles/@common/header';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export const persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
          <FooterNav />
        </ThemeProvider>
      </ChakraProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
