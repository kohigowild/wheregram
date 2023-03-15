import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      primaryDark: string;
      primaryLight: string;
      textColor: string;
      bgColor: string;
    };
  }
}
