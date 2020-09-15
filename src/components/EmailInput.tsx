import React from "react";
import Form from "react-bootstrap/Form";
import { ExecFileSyncOptionsWithStringEncoding } from "child_process";

interface IProps {
  class: string;
  value: string;
  handleChange: (e: any) => any;
}

const EmailInput: React.FC<IProps> = (props) => {
  return (
    <Form.Group>
      <Form.Control
        required
        type="email"
        placeholder="Enter Email/Mobile number"
        className={props.class}
        value={props.value}
        onChange={props.handleChange}
      />
      
    </Form.Group>
  );
};

export default EmailInput;
