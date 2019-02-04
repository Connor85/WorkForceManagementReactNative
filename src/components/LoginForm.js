import React, { Component } from "react";
import { Card, Input, Button, CardSection } from "./common";

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <Card>
          <CardSection>
            <Input label="Email" placeholder="email@gmail.com" />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="YourDogsName"
            />
          </CardSection>
          <CardSection>
            <Button>Login</Button>
          </CardSection>
        </Card>
      </Card>
    );
  }
}

export default LoginForm;
