import axios from "axios";
import { toast } from "react-toastify";
import { Spin, Typography, Button, Form, Input, Radio } from "antd";
import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../constant";

const cx = classNames.bind(styles);

const initFormValue = {
  username: "a",
  email: "",
  password: "",
  confirmPassword: "",
  birthday: new Date(),
  gender: "male",
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

    if (isEmptyValue(formValue.username)) {
      error["username"] = "UserName is required";
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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("form value", formValue);
    } else {
      console.log("form invalid");
    }
  };
  console.log("fromError", fromError);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    axios
      .post(
        API + "/auth/local/register",
        {
          username: formValue.username,
          email: formValue.email,
          password: formValue.password,
          gender: formValue.gender,
          birthday: formValue.birthday,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        navigate("/login");
        console.log("data", res.data.user);
      })
      .catch((err) => {
        toast.error(err);
        setError(err.message, {
          hideProgressBar: true,
        });
      });
  };
  console.log("error", error);
  const onRadioChange = (e) => {
    console.log("radio checked", e.target.value);
    setFormValue({
      ...formValue,
      gender: e.target.value,
    });
  };
  return (
    <div className={cx("form-register")}>
      <div className={cx("register")}>
        <div className={cx("brand-logo")}>
          <img src="/static/media/logo10.a0884fc24a774b4867ee.png" alt="" />
        </div>
        <div className={cx("brand-title")}> REGISTER </div>
        <div className={cx("register-container")}>
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Form.Item
              label="Username"
              name="username"
              value={formValue.username}
              onChange={(e) => {
                setFormValue({
                  ...formValue,
                  username: e.target.value,
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
            <Form.Item
              label="Birthday"
              name="birthday"
              value={formValue.birthday}
              onChange={(e) => {
                setFormValue({
                  ...formValue,
                  birthday: e.target.value,
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
              />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Radio.Group onChange={onRadioChange} value={formValue.gender}>
                <Radio value="male" checked>
                  Male
                </Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
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
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              onChange={(e) => {
                setFormValue({
                  ...formValue,
                  confirmPassword: e.target.value,
                });
              }}
              rules={[
                {
                  required: true,
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
              <Button type="primary" htmlType="submit" className="mt-2">
                {isLoading ? <Spin size="small" /> : "Submit"}
              </Button>
            </Form.Item>
          </Form>
          <Typography.Paragraph className="form_help_text">
            Already have an account? <Link to="/login">Login here</Link>
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
}
export default Register;
