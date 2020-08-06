import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import {firebaseConfig} from './config/firebaseConfig';

class App extends Component {
  //Your web app's Firebase configuration
  UNSAFE_componentWillMount() {
    if (!firebase.apps.length) {
      console.log(firebaseConfig);
      const config = firebaseConfig;

      firebase.initializeApp(config);
      // firebase.analytics();
    }
  }



  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}


export default App;


