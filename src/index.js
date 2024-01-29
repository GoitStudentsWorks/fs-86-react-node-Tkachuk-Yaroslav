import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import GlobalStyle from 'components/styles/GlobalStyles/GlobalStyles';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/fs-86-react-node-Tkachuk-Yaroslav">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <App />
          {/* <Error /> */}
          <Toaster />
          {/* <Loader /> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
