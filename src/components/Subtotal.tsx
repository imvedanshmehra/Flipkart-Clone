import React, { Fragment } from "react";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useStateValue } from "./MyContext";
import { getBasketTotal } from "../reducer";
import NumberFormat from "react-number-format";

const Subtotal: React.FC = () => {
  // @ts-ignore
  const [{ basket }] = useStateValue();
  console.log(getBasketTotal(basket));
  return (
    <Fragment>
      <Jumbotron className="bg-white mt-4 mb-4 p-2">
        <h6 className="text-secondary ">PRICE DETAILS</h6>
        <hr />
        <Row>
          <Col sm={6}>
            <h6>Price ({basket.length} items) </h6>
          </Col>
          <Col className="text-right">
            <NumberFormat
              prefix="₹"
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={6}>
            <h6>Delivery Charges </h6>
          </Col>
          <Col className="text-right text-success">FREE</Col>
        </Row>
      </Jumbotron>
    </Fragment>
  );
};

export default Subtotal;
