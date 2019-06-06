import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeScreen from './main/HomeScreen';
import * as serviceWorker from './serviceWorker';
import { reset, themes } from "react95";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const ResetStyles = createGlobalStyle`
  ${reset}
`
//HACK TO WORK PROPERLY ON CHROME
// window.addEventListener( 'wheel', event => { event.preventDefault(); }, { passive: false } );

ReactDOM.render(
  <>
    <ResetStyles />
    <ThemeProvider theme={themes.default}>
      <HomeScreen />
    </ThemeProvider>
  </>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
