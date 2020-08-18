import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import {firebaseConfig} from './config/firebaseConfig';
import Router from './Router';

class App extends Component {
  //Your web app's Firebase configuration
  UNSAFE_componentWillMount() {
    if (!firebase.apps.length) {
      const config = firebaseConfig;
      firebase.initializeApp(config);
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


export default App;

