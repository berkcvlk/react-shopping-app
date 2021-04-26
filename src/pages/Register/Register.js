import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

const Register = (props) => {
  const usersContext = useContext(ProductContext);

  let email, password1, password2;

  const emailHandler = (e) => {
    email = e.target.value;
  };

  const passwordHandler = (e) => {
    password1 = e.target.value;
  };

  const passwordConfirm = (e) => {
    password2 = e.target.value;
  };

  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          usersContext.onRegister(e, email, password1, password2);
        }}
      >
        <div className>
          <input
            onChange={emailHandler}
            placeholder="Email"
            type="email"
            required
          />
          <input
            onChange={passwordHandler}
            placeholder="Password"
            type="password"
          />
          <input
            onChange={passwordConfirm}
            placeholder="Password Confirm"
            type="password"
          />
          <button className="submit">Register</button>
        </div>
        {usersContext.error && <div>Error</div>}
      </form>
    </React.Fragment>
  );
};

export default Register;
