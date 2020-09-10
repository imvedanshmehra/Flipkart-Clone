import React, { useState, Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import "../login/Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    }
    setValidated(true);
  };

  return (
    <Fragment>
      <Form
        className="w-25 ml-auto mr-auto mt-5 login__form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <EmailInput
          class="login-inputs"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          class="login-inputs"
          placeHolder="Enter your password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" block className="login-btn p-2">
          Login
        </Button>
        <div className="signup">
          <Link to="/signup" className="signup-link">
            New to Flipkart? Create an account
          </Link>
        </div>
      </Form>
    </Fragment>
  );
};
export default Login;
