import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import Jumbotron from "react-bootstrap/esm/Jumbotron";
import Alert from "react-bootstrap/Alert";
import { auth } from "../../firebase";
import "../login/Login.css";

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return;
    } else {
      setValidated(true);
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth: any) => {
          console.log(auth);
          auth && history.push("./");
        })
        // @ts-ignore
        .catch((error) => setErrorMessage(error.message));
    }
  };

  return (
    <>
      {errorMessage && (
        <Alert variant="danger" className="w-50 mt-1 mr-auto ml-auto">
          {errorMessage}
        </Alert>
      )}
      <Jumbotron className="bg-white w-25 ml-auto mr-auto mt-5 shadow-sm">
        <Form
          className=" ml-auto  login__form"
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
      </Jumbotron>
    </>
  );
};
export default Login;
