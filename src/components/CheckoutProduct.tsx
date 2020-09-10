import React, { useState, Fragment } from "react";
import { useStateValue } from "./MyContext";
import Col from "react-bootstrap/col";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import "./CheckoutProduct.css";
import { constants } from "crypto";

interface IProps {
  id: number;
  image: string;
  title: any;
  price: number;
  discountedPrice: number;
  discount: number;
}

const CheckoutProduct: React.FC<IProps> = (props) => {
  const [itemNumber, setItemNumber] = useState<number>(1);
  // @ts-ignore
  const [{ basket }, dispatch] = useStateValue();
  const removeProduct = (): void => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  let deliveryDate: string;
  const m_names: string[] = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );

  const d = new Date();
  const fiveDaysLater: number = d.getDate() + 5;
  const curr_month: number = d.getMonth();
  const curr_year: number = d.getFullYear();
  deliveryDate = fiveDaysLater + " " + m_names[curr_month] + " " + curr_year;
  return (
    <Fragment>
      <hr />
      <Container>
        <Row>
          <Col sm={2} className="checkout__product">
            <img src={props.image} className="checkout__product__img" />
            <div>
              <button>-</button>
              <input
                type="text"
                value={itemNumber}
                className="w-25 text-center ml-1 mr-1"
              />
              <button>+</button>
            </div>
          </Col>
          <Col sm={5} className="text-start mt-3">
            <h6 className="font-weight-light">{props.title}</h6>
            <br />
            <div>
              <span>
                <h5 className="d-inline mr-2">{props.price}</h5>
              </span>
              <span className="checkout__product__discounted__price">
                <del>₹{props.discountedPrice}</del>
              </span>
              <small>
                <span className="checkout__product__discount">
                  {" "}
                  {props.discount}% off
                </span>
              </small>
            </div>
            <br />
            <h6 className="checkout__product__remove" onClick={removeProduct}>
              REMOVE
            </h6>
          </Col>
          <Col sm={5} className="mt-2 inline-start">
            <p>
              <small>
                {" "}
                Delivery by {deliveryDate} |{" "}
                <span className="checkout__product__discount font-weight-light">
                  FREE <del>₹80</del>
                </span>
              </small>
            </p>
            <p className="text-secondary">
              <small>7 Days Replacement Policy</small>
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CheckoutProduct;
