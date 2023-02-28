import { useState } from "react";
import './Login.module.scss';

const initFormValue = {
  email: "",
  password: "",
};

function Login() {

  const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
  };

  const isEmailValue = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };
  const [fromValue, setFormValue] = useState(initFormValue);
  const [fromError, setFormError] = useState();

  const validateForm = (event) => {
    const error = {};

    if (isEmptyValue(fromValue.email)) {
      error["email"] = "Email is required";
    } else {
      if (isEmailValue(fromValue.email)) {
        error["email"] = "Email is invalid";
      }
    }
    if (isEmptyValue(fromValue.password)) {
      error["password"] = "Password is required";
    }

    setFormError(error);
     return Object.keys(error).length === 0;
  };

  const hanldeChange = (event) => {
    const { value, name } = event.target;
    setFormValue({
      ...fromValue,
      name: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("form value", fromValue);
    } else {
      console.log("form invalid");
    }
  };
  console.log(fromError);

  return (

  <div class="brand-logo">
    <div class="brand-title"> NETWORK SOCIAL </div>
    
    <div class="login">
      <div class="brand-logo"></div>
  <div class="brand-title"> NETWORK SOCIAL </div>
    <div class="login-container">
    <form onSubmit={handleSubmit}>
      <form>
        <lable>EMAIL</lable>
        <input 
        type="text" 
        class="input-login-username" 
        placeholder="example@test.com"
        value={fromValue.email}
        onchange={hanldeChange}
        />
        <lable>PASSWORD</lable>
        <input 
        type="Password" 
        class="input-login-password" 
        placeholder="password"
        value={fromValue.password}
        onchange={hanldeChange}/>
        <button type="submit" class="login-Button">LOGIN</button>
      </form>
    </form>
      <a href="./register" class="login-registerButton"
        >CREATE NEW ACCOUNT</a>
    </div>
  </div>
  </div>
  )
}

export default Login;
