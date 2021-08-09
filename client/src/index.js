import React from 'react';
import ReactDOM from 'react-dom';//virtual dom 
import { Provider } from 'react-redux';//hook que trae estados del global store
import { createStore, applyMiddleware, compose } from 'redux'; //para crear la store
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));//aqui se crea la store o estado global de la cual toda la app se comunica para pedir estados

ReactDOM.render(
  //toda la app debe estar en el provider que es la global store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
