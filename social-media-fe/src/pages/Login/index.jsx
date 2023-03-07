import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
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
  const [formValue, setFormValue] = useState(initFormValue);
  const [fromError, setFormError] = useState();

  const validateForm = (event) => {
    const error = {};

    if (isEmptyValue(formValue.email)) {
      error["email"] = "Email is required";
    } else {
      if (isEmailValue(formValue.email)) {
        error["email"] = "Email is invalid";
      }
    }
    if (isEmptyValue(formValue.password)) {
      error["password"] = "Password is required";
    }

    setFormError(error);
    return Object.keys(error).length === 0;
  };

  const hanldeChange = (event) => {
    const { value, name } = event.target.value;
    setFormValue({
      ...formValue,
      name: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("form value", formValue);
    } else {
      console.log("form invalid");
    }
  };
  console.log(fromError);

  return (
    <div className={cx("form-login")}>
      {/* <div className={cx("brand-logo")}> */}
      <div className={cx("login")}>
        <div className={cx("brand-logo")}>
          <img src="/static/media/logo10.a0884fc24a774b4867ee.png" alt="" />
        </div>
        <div className={cx("brand-title")}> SIGN IN </div>
        <div className={cx("login-container")}>
          <form onSubmit={handleSubmit}>
            <lable>EMAIL</lable>
            <input
              type="text"
              className={cx("input-login-username")}
              placeholder="example@test.com"
              value={formValue.email}
              onChange={(e) => {
                setFormValue({
                  ...formValue,
                  email: e.target.value,
                });
              }}
            />
            <lable>PASSWORD</lable>
            <input
              type="password"
              className={cx("input-login-password")}
              placeholder="password"
              value={formValue.password}
              onChange={(e) => {
                setFormValue({ ...formValue, password: e.target.value });
              }}
            />

            <button type="submit" className={cx("login-Button")}>
              LOGIN
            </button>
          </form>
          <p className="text-center">
            <Link to="/register">
              <b>Register Here</b>
            </Link>
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Login;
