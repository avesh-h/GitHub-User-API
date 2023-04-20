import React, { useState } from "react";
import "../Login/loginForm.css";

function LoginForm(props) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const LoginData = {
      loginEmail,
      loginPassword,
    };
    props.onLogin(LoginData);
  };

  return (
    <form className="form">
      <h1>Enter Login Details</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-light" onClick={SubmitHandler}>
        Log in
      </button>
    </form>
  );
}

export default LoginForm;
