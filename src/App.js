import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import Router from "./Router";

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
