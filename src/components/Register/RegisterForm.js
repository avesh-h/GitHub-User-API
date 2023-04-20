import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Login/loginForm";

function RegisterForm(props) {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const RegisterData = {
      registerEmail,
      registerPassword,
    };
    props.onRegister(RegisterData);
  };

  return (
    <form className="form">
      <h1>Create Account</h1>
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
            setRegisterEmail(e.target.value);
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
            setRegisterPassword(e.target.value);
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
      {/* <ul>
            <li className='btn btn-light'>
                <Link to='/login'>Create Account</Link>
            </li>
        </ul> */}
      <button type="submit" className="btn btn-light" onClick={SubmitHandler}>
        Create Account
      </button>
    </form>
  );
}

export default RegisterForm;
