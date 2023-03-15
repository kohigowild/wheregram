import { Noto_Sans_KR } from '@next/font/google';

const bold = Noto_Sans_KR({
  weight: '700',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--noto-sans_KR-bold',
  fallback: ['system-ui'],
});

const medium = Noto_Sans_KR({
  weight: '500',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--noto-sans_KR-medium',
  fallback: ['system-ui'],
});

const light = Noto_Sans_KR({
  weight: '300',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--noto-sans_KR-light',
  fallback: ['system-ui'],
});

export { bold as notoSansKrBold, medium as notoSansKrMedium, light as notoSansKrLight };
