import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBUk30itwi3GvH42Db-vhY7waesI1xS_cY",
      authDomain: "manager-79c39.firebaseapp.com",
      databaseURL: "https://manager-79c39.firebaseio.com",
      projectId: "manager-79c39",
      storageBucket: "manager-79c39.appspot.com",
      messagingSenderId: "353441503128"
    };

    firebase.initializeApp(config);
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
