import React from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { Container, Grid } from "semantic-ui-react";

const AuthPage = () => {
  return (
    <div className="AuthPage">
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Login />
            <Register />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default AuthPage;
