import { message, Spin, Typography, Button, Form, Input, Radio } from "antd";
import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../constant";
import { setToken } from "../../helpers";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const initFormValue = {
  userName: "",
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

  const navigate = useNavigate();

  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        setUser(data.user);

        message.success(`Welcome to Social Cards ${data.user.username}!`);

        navigate("/profile", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError(error?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
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
                name="userName"
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
                <Input placeholder="Firstname" />
              </Form.Item>
              <Form.Item
                label="Lastname"
                name="lastame"
                value={formValue.lastName}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    lastName: e.target.value,
                  });
                }}
                rules={[
                  {
                    required: true,
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="Lastname" />
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
              <Form.Item
                label="Birthday"
                name="birthday"
                value={formValue.dateofBirth}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    dateofBirth: e.target.value,
                  });
                }}
                rules={[
                  {
                    required: true,
                    type: "date",
                  },
                ]}
              >
                <Input
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
              <Form.Item
                label="Gender"
                name="gender"
                value={formValue.gender}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    gender: e.target.value,
                  });
                }}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Radio value="Male"> Male </Radio>
                <Radio value="Female"> Female </Radio>
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    password: e.target.value,
                  });
                }}
                hasFeedback
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    confirmPassword: e.target.value,
                  });
                }}
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="mt-2"
                  onClick={() => console.log(formValue)}
                >
                  Submit {isLoading && <Spin size="small" />}
                </Button>
              </Form.Item>
            </Form>
            <Typography.Paragraph className="form_help_text">
              Already have an account? <Link to="/login">Login here</Link>
            </Typography.Paragraph>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
