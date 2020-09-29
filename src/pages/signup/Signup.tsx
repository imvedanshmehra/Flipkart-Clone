import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import Jumbotron from "react-bootstrap/esm/Jumbotron";
import { auth } from "../../firebase";
import "../signup/Signup.css";

const Signup: React.FC = () => {
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      return;
    } else {
      setValidated(true);
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user: {}) => {
          if (user) {
            auth.currentUser
              ?.updateProfile({
                displayName: userName,
              })
              .then(() => {
                auth && history.push("./");
              });
          }
        })
        .catch((error) => alert(error.message));
    }
  };

  const Step1 = (): JSX.Element | null => {
    if (currentStep !== 1) {
      return null;
    } else {
      return (
        <EmailInput
          class="signup-input"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
      );
    }
  };
  const Step2 = (): JSX.Element | null => {
    if (currentStep !== 2) {
      return null;
    } else {
      return (
        <Fragment>
          <PasswordInput
            class="signup-input"
            placeHolder="Set Password"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <PasswordInput class="signup-input" placeHolder="Confirm password" />
        </Fragment>
      );
    }
  };
  const Step3 = (): JSX.Element | null => {
    if (currentStep !== 3) {
      return null;
    } else {
      return (
        <Form>
          <Form.Control
            className="signup-input mb-2"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form>
      );
    }
  };

  return (
    <Jumbotron className="bg-white w-25 mr-auto ml-auto mt-5 shadow-sm">
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <div>{Step1()}</div>
        <div>{Step2()}</div>
        <div>{Step3()}</div>

        {currentStep === 1 ? null : (
          <Button
            className="prev-btn p-2"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Prev
          </Button>
        )}

        {currentStep === 3 ? null : (
          <Button
            className="next-btn p-2"
            // onClick={() => setCurrentStep(currentStep + 1)}
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Continue
          </Button>
        )}
        {currentStep !== 3 ? null : (
          <Button className="next-btn p-2" type="submit">
            Sign up
          </Button>
        )}
      </Form>
    </Jumbotron>
  );
};

export default Signup;
