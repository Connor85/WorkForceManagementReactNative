import React from "react";
import { View } from "react-native";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";

const RouterComponent = () => {
  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#F5FCFF"
      }}
    >
      <Router>
        <Scene key="root">
          <Scene key="login" component={LoginForm} hideNavBar={true} initial />
          <Scene
            key="employeeList"
            component={EmployeeList}
            hideNavBar={true}
          />
        </Scene>
      </Router>
    </View>
  );
};

export default RouterComponent;
