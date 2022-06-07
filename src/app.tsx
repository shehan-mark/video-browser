import React from 'react';
import { Provider } from 'react-redux';

import Home from './components/home';

import store from './redux/store';

import './app.css';

const App = () => {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
