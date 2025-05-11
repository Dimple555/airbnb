import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '@/App';
import "normalize.css"
import "antd/dist/antd"
import '@/assets/css/index.css';
import store from './store';
import { ThemeProvider } from "styled-components";
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
    </Suspense>
  </Provider>
);

 