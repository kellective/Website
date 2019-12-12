import React, { Component } from 'react'
import { navigate } from 'gatsby';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Link from 'reusecore/src/elements/Link';
import Input from 'reusecore/src/elements/Input';
import SignupForm, { ErrorMessage, FormActions } from './signup.style';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  handleFieldChange = (field) => (value) => {
    this.setState({
      [field]: value,
    });
  }

  handleSignUp = (e) => {
    const { authService } = this.props;
    const { email, password } = this.state;
    authService.register(email, password)
      .then(data => {
        // TODO: Shoud navigate back to last state
        // Eg: Shoping cart
        navigate('/');

      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      })
  }

  render() {
    const { authService } = this.props;
    const { error, email, password } = this.state;

    const currentUser = authService.currentUser();
    if (currentUser) {
      return (
        <p>Hello {currentUser.displayName}</p>
      )
    }

    return (
      <SignupForm>
        <Heading as="h3" content="Sign Up" />
        <Input
          type="text"
          name="email"
          label="Email"
          placeholder="Your email"
          value={email}
          onChange={this.handleFieldChange('email')}
        />
        <br />
        <Input
          inputType="password"
          passwordShowHide
          label="Password"
          placeholder="Password"
          value={password}
          onChange={this.handleFieldChange('password')}
        />
        <br />

        {error && <ErrorMessage>
          {error}
        </ErrorMessage>}
        <FormActions>
          <Button type="submit" onClick={this.handleSignUp} title="Sign up" />
          <Link href="#">Already have an account? Login</Link>
        </FormActions>
      </SignupForm>
    )
  }
}