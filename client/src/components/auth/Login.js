import React, { useContext, useState } from "react";
import { Form, Input, Button, Message } from "semantic-ui-react";
import { AuthContext } from "../../contexts/AuthContext";
import { handleChange } from "../../utils/handleChange";
import { authSuccess } from "../../utils/utils";

const Login = () => {
  const {
    state: { loginError, token },
    loginUser,
  } = useContext(AuthContext);

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await loginUser(value);
    console.log(token);
    // if (!loginError) {
    // }
    authSuccess(token);
  }

  return (
    <div className="Login">
      {loginError && (
        <Message
          success
          header="Please fill in the correct details"
          content={loginError.message}
        />
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e, setValue, value)}
          />
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            name="password"
            placeholder="password"
            onChange={(e) => handleChange(e, setValue, value)}
          />
        </Form.Group>
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Submit"
        />
      </Form>
    </div>
  );
};

export default Login;
