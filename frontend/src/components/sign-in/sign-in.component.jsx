import React, { useState, useEffect } from "react";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign-in.styles.jsx";

function signIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <SignInContainer>
        <SignInTitle className="title">I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <ButtonsBarContainer>
            <CustomButton type="submit" value="Submit Form">
              Sign in
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    </div>
  );
}

export default signIn;
