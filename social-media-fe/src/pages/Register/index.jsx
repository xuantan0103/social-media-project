import { useState } from "react";

const initFormValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  dateofBirth: "",
  gender: "",
};
function Register() {
  
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

    if (isEmptyValue(fromValue.firstName)) {
      error["firstName"] = "FirstName is required";
    }
    if (isEmptyValue(fromValue.lastName)) {
      error["LastName"] = "LastName is required";
    }
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
    if (isEmptyValue(fromValue.confirmPassword)) {
      error["confirmPassword"] = "ConfirmPassword is required";
    } else {
      if (fromValue.confirmPassword !== fromValue.password) {
        error["confirmPassword"] = "ConfirmPassword not match";
      }
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
    
    <div class="login">
      <div class="brand-logo"></div>
  <div class="brand-title"> REGISTER </div>
    <div class="register-container">
        <form onSubmit={handleSubmit}>

        <form>
        <lable>EMAIL</lable>
          <input
            type="text"
            name="firstname"
            class="register-name"
            value={fromValue.firstName}
            onchange={hanldeChange}
          />
          <lable>LASTNAME</lable>
          <input
            type="text"
            name="lastname"
            class="register-name"
            value={fromValue.lastName}
            onchange={hanldeChange}
          />
          <lable>EMAIL</lable>
          <input
            type="text"
            name="email"
            class="input-register-email"
            value={fromValue.email}
            onchange={hanldeChange}
          />
          <lable>DATE OF BIRTH</lable>
        <input
            type="text" 
            placeholder="DD"
            class="input-register-date"
            value={fromValue.dateofBirth}
            onchange={hanldeChange}
            />
            <input
            type="text" 
            placeholder="MM"
            class="input-register-date"
            value={fromValue.dateofBirth}
            onchange={hanldeChange}
            />
            <input type="text" 
            placeholder="YYYY"
            class="input-register-date"
            value={fromValue.dateofBirth}
            onchange={hanldeChange}
            />
          <lable>GENDER</lable>
          <lable> Male </lable>
          <input
          input="gender-female" type="radio" name="gender" value="female"
          label for="gender-female" Female
          class="input-register-gender"
          onchange={hanldeChange}
          />
          <lable> Female </lable>
          <input
          input="gender-male" type="radio" name="gender" value="male"
          class="gender-male" for="gender-male" 
          onchange={hanldeChange}
          />
          <lable>PASSWORD</lable>
          <input
            type="password"
            name="password"
            class="input-register-password"
            value={fromValue.password}
            onchange={hanldeChange}
          />
          <lable>CONFIRM PASSWORD</lable>
          <input
            type="password"
            name="confirmPassword"
            class="input-confirm-password"
            value={fromValue.password}
            onchange={hanldeChange}
          />
          <button type="submit" class="register-Button">
            REGISTER
          </button>
          </form>
          <lable> Terms and Conditions</lable>
      <input
        input="terms" type="checkbox"
        class="input-condition" for="terms" 
        />
        <h5>I accept the terms and conditions signing up to this service hereby confirm I have read the privacy policy </h5>
        </form>
        <a href="./login" class="register-registerButton">
        BACK TO LOGIN PAGE
        </a>        
      </div>
    </div>
  );
}
export default Register;