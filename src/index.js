import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './utils/firebase.config'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // {/* Using provider giving the access store globally to available for all the components */}

<Provider store={store}>
  <App />
 </Provider>
);


