import React, { useState, Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import Jumbotron from "react-bootstrap/esm/Jumbotron";
import "../signup/Signup.css";

const Signup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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

  const Step3 = (): null | JSX.Element => {
    if (currentStep !== 3) {
      return null;
    } else {
      return <p>This is step 3</p>;
    }
  };
  return (
    <Jumbotron className="bg-white w-25 mr-auto ml-auto mt-5 shadow-sm">
      <Form>
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
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Continue
          </Button>
        )}
        {currentStep !== 3 ? null : <Button>Sign up</Button>}
      </Form>
    </Jumbotron>
  );
};

export default Signup;
