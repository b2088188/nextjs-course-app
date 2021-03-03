import React from 'react';
import Nav from '../src/components/Nav';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App = ({ Component, pageProps }) => {
   return (
      <>
         <GlobalStyle />
         <Nav />
         <Component {...pageProps} />
      </>
   );
};

export default App;
