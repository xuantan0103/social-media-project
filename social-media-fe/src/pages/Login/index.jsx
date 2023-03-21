import { Button, message, Spin, Input, Form } from "antd";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { API } from "../../api/constant";
import { setIdUser, setToken } from "../../api/helpers";
const cx = classNames.bind(styles);
const initFormValue = {
  email: "suongphan@gmail.com",
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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("form value", formValue);
    } else {
      console.log("form invalid");
    }
  };

  console.log(formValue);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const value = {
        identifier: values.email,
        password: values.password,
      };
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);
        console.log(data.user.id);
        // set the user
        setIdUser(data.user.id);

        message.success(`Welcome back ${data.user.username}!`);
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError(error?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);
  return (
    <div className={cx("form-login")}>
      <div className={cx("login")}>
        <div className={cx("brand-logo")}>
          <img src="/static/media/logo10.a0884fc24a774b4867ee.png" alt="" />
        </div>
        <div className={cx("brand-title")}> SIGN IN </div>
        <div className={cx("login-container")}>
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Form.Item
              label="EMAIL"
              name="email"
              type="email"
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
              <Input
                placeholder="example@test.com"
                defaultValue="suongphan@gmail.com"
              />
            </Form.Item>
            <Form.Item
              label="PASSWORD"
              name="password"
              rules={[{ required: true, type: "password" }]}
            >
              <Input.Password placeholder="Password" defaultValue="123456" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login_submit_btn"
              >
                {isLoading ? <Spin size="small" /> : "LOGIN"}
              </Button>
            </Form.Item>
            <p className="text-center">
              <Link to="/register">
                <b>Register Here</b>
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
