import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeModeProvider } from './contexts/themeMode.context';
import GlobalStyles from './assets/styles/global';
import theme from './assets/styles/theme';
import Home from './pages/Home';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './assets/fonts/Inter/style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeModeProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </ThemeProvider>
      </ThemeModeProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
