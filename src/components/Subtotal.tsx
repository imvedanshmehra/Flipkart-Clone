import React, { Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useStateValue } from "./MyContext";
import { getBasketTotal, totalDiscount } from "../reducer";
import NumberFormat from "react-number-format";

const Subtotal: React.FC = () => {
  // @ts-ignore
  const [{ basket }] = useStateValue();

  return (
    <Fragment>
      <Jumbotron className="bg-white mt-4 mb-4 p-2 ">
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
          <Col className="text-right text-success ">FREE</Col>
        </Row>
        <hr />
        <Row>
          <Col sm={6}>
            <h5>Total Amount</h5>
          </Col>
          <Col sm={6} className="text-right">
            <b>
              <NumberFormat
                className="text-lead"
                prefix="₹"
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
              />
            </b>
          </Col>
        </Row>
        <hr />
        <h6 className="text-success">
          You will save{" "}
          {
            <NumberFormat
              className="text-lead"
              prefix="₹"
              value={totalDiscount(basket) - getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
            />
          }{" "}
          on this order
        </h6>
      </Jumbotron>
      <p className="text-secondary text-small ">
        Safe and Secure Payments.Easy returns.100% Authentic products.
      </p>
    </Fragment>
  );
};

export default Subtotal;
