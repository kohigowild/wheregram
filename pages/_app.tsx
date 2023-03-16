import { useState } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/globalStyle';
import { theme } from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/components/@common/header';
import FooterNav from '@/components/@common/footerNav';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ChakraProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
            <FooterNav />
          </ThemeProvider>
        </ChakraProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
