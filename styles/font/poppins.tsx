import { Poppins } from '@next/font/google';

const extraBold = Poppins({
  weight: '800',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--poppins-extra-bold',
  fallback: ['system-ui'],
});

export { extraBold as poppinsExtraBold };
