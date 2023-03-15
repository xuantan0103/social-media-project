import axios from "axios";
import {toast} from "react-toastify"
import {
      message,
      Spin,
      Typography,
      Button,
      Form,
      Input,
    } from "antd";
import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
// import { API } from "../../constant";
// import { setToken } from "../../helpers";
import classNames from "classnames/bind";
import {useState } from "react";
import { Link } from 'react-router-dom';;

const cx = classNames.bind(styles);

const initFormValue = {
  userName:"",
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

    if (isEmptyValue(formValue.userName)) {
      error["firstName"] = "UserName is required";
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
  
    const navigate = useNavigate();
  
    const { setUser } = useAuthContext();
  
    const [isLoading, setIsLoading] = useState(false);
  
    const [error, setError] = useState("");
  
    const onFinish = async (values) => {
      setIsLoading(true);

      const signUp =async () => {
          try {
            const url = 'http://localhost:1337/api/auth/local/register';
            if (values.userName && values.email && values.gender && values.dateofBirth && values.password ) {
        const response = await axios.post(url, );
          if (response) {
            setUser(initFormValue);
            navigate("/login");
          }
          console.log (response);
        }
      } catch (error) {
        toast.error(error);
        setError(error.message, {
          hideProgressBar: true,
        }); 
    }
  }
  };

    return (
    <div className={cx("form-register")}>
      <div className={cx("register")}>
        <div className={cx("brand-logo")}>
          <img src="/static/media/logo10.a0884fc24a774b4867ee.png" alt="" />
        </div>
        <div className={cx("brand-title")}> REGISTER </div>
        <div className={cx("register-container")}>
          <form onSubmit={handleSubmit}>
          <Form
              name="basic"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                value={formValue.userName}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    firstName: e.target.value,
                  });
                }}
                rules={[
                  {
                    required: true,
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                value={formValue.email}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    email: e.target.value,
                  });
                }}
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Example@test.com" />
              </Form.Item>
              <Form.Item>
                <lable> Birthday</lable>
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
              </Form.Item>
                <lable> Gender</lable>
                 <div className="d-flex justify-content-start">
                <div className="form-check d-flex justify-content-start me-5">
              <input
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
                  </div>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true }]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="password"
                rules={[{ required: true }]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login_submit_btn"
                >
                <Link to="/login"></Link> Submit {isLoading && <Spin size="small" />}
                </Button>
              </Form.Item>
            </Form>
            <Typography.Paragraph className="form_help_text">
              Already have an account? <Link to="/login">Login</Link>
            </Typography.Paragraph>
            </form>
        </div>
      </div>
    </div>
  );
}
export default Register;