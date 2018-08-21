import React from "react";
import { connect } from 'react-redux';
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/common/form/Textinput";
import { login, socialLogin } from '../authActions';
import SocialLogin from '../SocialLogin/SocialLogin';

const action = {
  login, 
  socialLogin
}

const LoginForm = ({login, handleSubmit, error, socialLogin}) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(login)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && error ? <Segment><Label basic color='red'>{error}</Label></Segment> : null}
        <Button fluid size="large" color="teal">
          Login
        </Button>
        <Divider horizontal>
          Or
        </Divider>
        <SocialLogin socialLogin={socialLogin} />
      </Segment>
    </Form>
  );
};

export default connect(null, action)(reduxForm({ form: "loginForm" })(LoginForm));
