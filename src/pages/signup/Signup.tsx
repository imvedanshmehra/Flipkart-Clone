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
        .then((auth: any) => {
          console.log(auth);
          auth && history.push("./");
        })
        // @ts-ignore
        .catch((error) => alert(error.message));
    }
  };

  const Step1 = (): JSX.Element | null => {
    if (currentStep !== 1) {
      return null;
    } else {
      return (
        <EmailInput
          class="signup-email"
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
            class="signup-password"
            placeHolder="Set Password"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <PasswordInput
            class="signup-password"
            placeHolder="Confirm password"
          />
        </Fragment>
      );
    }
  };

  return (
    <Jumbotron className="bg-white w-25 mr-auto ml-auto mt-5 shadow-sm">
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <div>{Step1()}</div>
        <div>{Step2()}</div>

        {currentStep === 1 ? null : (
          <Button
            className="prev-btn p-2"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Prev
          </Button>
        )}

        {currentStep === 2 ? null : (
          <Button
            className="next-btn p-2"
            // onClick={() => setCurrentStep(currentStep + 1)}
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Continue
          </Button>
        )}
        {currentStep !== 2 ? null : (
          <Button className="next-btn p-2" type="submit">
            Sign up
          </Button>
        )}
      </Form>
    </Jumbotron>
  );
};

export default Signup;
