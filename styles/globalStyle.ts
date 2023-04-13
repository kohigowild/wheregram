import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { notoSansKrLight } from './@common/font/notoSansKr';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html,
  body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  
  #root {
    margin: 0 auto;
  }
  
  * {
    box-sizing: border-box;
  }

  body, button {
    font-family: ${notoSansKrLight.style.fontFamily};
  }
  
  a, a:visited {
    text-decoration: none;
    color: black;
  }

`;

export default GlobalStyle;
