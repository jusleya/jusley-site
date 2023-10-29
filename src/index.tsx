import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyles from './assets/styles/global';
import theme from './assets/styles/theme';
import Home from './pages/Home';
import './assets/fonts/Inter/style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>,
);
