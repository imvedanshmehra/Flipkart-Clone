import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import "../login/Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    }
    setValidated(true);
  };
  return (
    <React.Fragment>
      <Form
        className="w-25 ml-auto mr-auto mt-5 login__form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email/Mobile number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please provide a email or mobile number
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <div className="password-container">
          <Form.Group>
            <Form.Control
              required
              type={hidePassword ? "password" : "text"}
              placeholder="Enter Password"
              className="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="hide-show-btn"
              onClick={() => setHidePassword(!hidePassword)}
            >
              {hidePassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </span>
            <Form.Control.Feedback type="invalid">
              Please provide a password
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </div>
        <Button type="submit" block className="login-btn p-2">
          Login
        </Button>
        <div className="signup">
          <p className="text-center">New to Flipkart? Create an account</p>
        </div>
      </Form>
    </React.Fragment>
  );
};
export default Login;
