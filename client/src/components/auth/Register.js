import React, { useContext, useState } from "react";
import { Form, Input, Button, Message } from "semantic-ui-react";
import { AuthContext } from "../../contexts/AuthContext";
import { handleChange } from "../../utils/handleChange";
import { authSuccess } from "../../utils/utils";

const Register = () => {
  const {
    state: { registerError, token },
    registerUser,
  } = useContext(AuthContext);

  const [value, setValue] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    position: "",
    address: "",
    company: "",
    abn: "",
    suburb: "",
    postcode: "",
    state: "",
    active: true,
  });

  function handleSubmit(e) {
    e.preventDefault();
    registerUser(value);
    console.log(registerError);
    // if (!registerError) {
    // }
    authSuccess(token);
  }
  return (
    <div className="Regsiter">
      {registerError && (
        <Message
          success
          header="Please fill in the correct details"
          content={registerError.message}
        />
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="First name"
            name="first_name"
            onChange={(e) => handleChange(e, setValue, value)}
          />
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Last name"
            name="last_name"
            onChange={(e) => handleChange(e, setValue, value)}
          />
        </Form.Group>
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
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e, setValue, value)}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Company Entity"
            name="company"
            onChange={(e) => handleChange(e, setValue, value)}
          />
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="ABN"
            name="abn"
            onChange={(e) => handleChange(e, setValue, value)}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Position"
            name="position"
            onChange={(e) => handleChange(e, setValue, value)}
          />
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Address"
            name="address"
            onChange={(e) => handleChange(e, setValue, value)}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Suburb"
            name="suburb"
            onChange={(e) => handleChange(e, setValue, value)}
          />
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="State"
            name="state"
            onChange={(e) => handleChange(e, setValue, value)}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Postcode"
            name="postcode"
            onChange={(e) => handleChange(e, setValue, value)}
          />
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="phone"
            name="phone"
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

export default Register;
