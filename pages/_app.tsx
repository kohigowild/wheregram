import { useState } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/globalStyle';
import { theme } from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/components/@common/@Header';
import FooterNav from '@/components/@common/FooterNav';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const Main = styled.div`
    margin-top: 60px;
    margin-bottom: 80px;
  `;

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
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
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
