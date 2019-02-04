import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import { Header } from "./components/common";

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
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View>
          <Header headerText="Login" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
