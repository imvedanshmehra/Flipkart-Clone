import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import "../components/PasswordInput.css";

interface IProps {
  class: string;
  value?: string;
  placeHolder: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

const PasswordInput: React.FC<IProps> = (props) => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  return (
    <div className="password-container">
      <Form.Group>
        <Form.Control
          required
          type={hidePassword ? "password" : "text"}
          placeholder={props.placeHolder}
          className={props.class}
          value={props.value}
          onChange={props.handleChange}
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
      </Form.Group>
    </div>
  );
};

export default PasswordInput;
