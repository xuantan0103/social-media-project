import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from 'react-router-dom';;

const cx = classNames.bind(styles);

const initFormValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  dateofBirth: new Date(),
  gender: "Male",
};
function Register() {
  const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
  };
  const isEmailValue = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };
  const [formValue, setFormValue] = useState(initFormValue);
  const [fromError, setFormError] = useState();
  console.log(formValue.gender);

  const validateForm = (event) => {
    const error = {};

    if (isEmptyValue(formValue.firstName)) {
      error["firstName"] = "FirstName is required";
    }
    if (isEmptyValue(formValue.lastName)) {
      error["LastName"] = "LastName is required";
    }
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
    if (isEmptyValue(formValue.confirmPassword)) {
      error["confirmPassword"] = "ConfirmPassword is required";
    } else {
      if (formValue.confirmPassword !== formValue.password) {
        error["confirmPassword"] = "ConfirmPassword not match";
      }
    }

    setFormError(error);
    return Object.keys(error).length === 0;
  };

  const hanldeChange = (event) => {
    const { value, name } = event.target;
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
    <div className={cx("form-register")}>
      <div className={cx("register")}>
        <div className={cx("brand-logo")}>
          <img src="/static/media/logo10.a0884fc24a774b4867ee.png" alt="" />
        </div>
        <div className={cx("brand-title")}> REGISTER </div>
        <div className={cx("register-container")}>
          <form onSubmit={handleSubmit}>
            <form>
              <lable>FIRSTNAME</lable>
              <input
                type="text"
                name="firstname"
                className={cx("register-name")}
                placeholder="firstname"
                value={formValue.firstName}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    firstName: e.target.value,
                  });
                }}
              />
              <lable>LASTNAME</lable>
              <input
                type="text"
                name="lastname"
                className={cx("register-name")}
                placeholder="lastname"
                value={formValue.lastName}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    lastName: e.target.value,
                  });
                }}
              />
              <lable>EMAIL</lable>
              <input
                type="text"
                name="email"
                className={cx("input-register-email")}
                placeholder="example@test.com"
                value={formValue.email}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    email: e.target.value,
                  });
                }}
              />
              <lable>BIRTHDAY</lable>
              <input
                type="date"
                placeholder="Date Of Birth"
                className={cx("input-register-date")}
                value={formValue.dateofBirth}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    dateofBirth: e.target.value,
                  });
                }}
              />
              <lable>GENDER</lable>
              <div className="d-flex justify-content-start">
                <div className="form-check d-flex justify-content-start me-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="male"
                    id="male"
                    value="Male"
                    checked={formValue.gender === "Male"}
                    onChange={(e) => {
                      setFormValue({
                        ...formValue,
                        gender: e.target.value,
                      });
                    }}
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div className="form-check d-flex justify-content-start">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="female"
                    value="Female"
                    id="female"
                    checked={formValue.gender === "Female"}
                    onChange={(e) => {
                      setFormValue({
                        ...formValue,
                        gender: e.target.value,
                      });
                    }}
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Female
                  </label>
                </div>
              </div>

              <lable>PASSWORD</lable>
              <input
                type="password"
                name="password"
                className={cx("input-register-password")}
                placeholder="password"
                value={formValue.password}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    password: e.target.value,
                  });
                }}
              />
              <lable>CONFIRM PASSWORD</lable>
              <input
                type="password"
                name="confirmPassword"
                className={cx("input-confirm-password")}
                placeholder="confirm password"
                value={formValue.confirmPassword}                                                     
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    confirmPassword: e.target.value,
                  });
                }}
              />
            </form>
            <lable> Terms and Conditions</lable>
            <div className="comment-form-cookies-consent">
              <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" />
              <label htmlFor="wp-comment-cookies-consent">
                I accept the terms and conditions signing up to this service
                hereby confirm I have read the privacy policy.
              </label>
            </div>
          </form>
          <button type="submit" className={cx("register-Button")}>
            REGISTER
          </button>
          <p className="text-center">
            <Link to="/REGISTER">
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register;
