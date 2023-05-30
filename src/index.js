import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './assets/index.css'
import { Bio } from './layout/web/bio';
import BackgroundContainer from './components/BackgroundContainer';
import { ThemeProvider } from '@emotion/react';

import { theme } from './mui-theme'
import { BrowserView, MobileView } from 'react-device-detect';
import { BioMobile } from './layout/mobile/bio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <BrowserView>
          <BackgroundContainer device={'browser'}>
              <Bio />
          </BackgroundContainer>
        </BrowserView>
        <MobileView>
          <BackgroundContainer device={'mobile'}>
            <BioMobile />
          </BackgroundContainer>
        </MobileView>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
