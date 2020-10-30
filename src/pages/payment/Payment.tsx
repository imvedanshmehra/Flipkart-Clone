import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Accordion from "react-bootstrap/esm/Accordion";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faStar, faBell } from "@fortawesome/free-solid-svg-icons";
import Subtotal from "../../components/Subtotal";
import CheckoutProduct from "../../components/CheckoutProduct";
import { useStateValue } from "../../components/MyContext";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../../reducer";
import NumberFormat from "react-number-format";
import axios from "../../axios";
import "./Payment.css";

const Payment: React.FC = () => {
  const [activeId, setActiveId] = useState<any>("0");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [cardError, setCardError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [processing, setProcessing] = useState<any>("");
  const [clientSecret, setClientSecret] = useState<any>(true);
  // @ts-ignore
  let [{ basket, user }, dispatch] = useStateValue();

  
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  useEffect(() => {
    const getClientSecret = async (): Promise<any> => {
      const response = await axios({
        method: "post",
        url: `payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("The secret key is>>> ", clientSecret)

  const handleAuthentication = (): void => {
    if (user) {
      auth.signOut().then(() => history.push("./"));
    }
  };
  const toggleActiveId = (id: string) => {
    id === activeId ? setActiveId(null) : setActiveId(id);
  };
  const quantityIncrease = (id: number, qty: number): void => {
    qty < 2
      ? dispatch({ type: "QTYUP", id: id })
      : setErrorMessage("Oops! One customer can buy maximum of two quantity");
  };
  const quantityDecrease = (id: number, qty: number): void => {
    if (qty === 1) {
      dispatch({ type: "REMOVE_FROM_BASKET", id: id });
    } else if (qty <= 2) {
      setErrorMessage("");
      dispatch({ type: "QTYDOWN", id: id });
    }
  };
  const handleSubmit = async (
    e: React.FormEvent<HTMLElement>
  ): Promise<any> => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      ?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements?.getElement(CardElement)!,
        },
      })
      .then(({ paymentIntent }) => {
        setSuccess(true);
        setCardError(null);
        setProcessing(false);

        dispatch({type: "EMPTY_BASKET"})

        history.replace("/orders");
      });
  };
  const handleChange = (e: any): void => {
    setDisabled(e.empty);
    setCardError(e.error ? e.error.message : "");
  };
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Accordion defaultActiveKey={activeId} className="mt-4">
            <Card className="mb-3 shadow-sm" bg="light">
              <Accordion.Toggle
                eventKey="0"
                className="p-0 border-0 payment__panel_header"
              >
                <Card.Header
                  className={
                    activeId === "0"
                      ? "payment__active_header_panel"
                      : "payment__header_panel"
                  }
                  onClick={() => toggleActiveId("0")}
                >
                  <span className="payment__steps mr-3">1</span>
                  LOGIN
                </Card.Header>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Row>
                    <Col md={6} className="payment__login_info">
                      <div className="text-muted mb-2">
                        Name{" "}
                        <span className="text-dark ml-3 font-weight-bold">
                          {user?.displayName}
                        </span>
                      </div>
                      <div className="text-muted mb-2">
                        Email{" "}
                        <span className="text-dark ml-3 font-weight-bold">
                          {user?.email}
                        </span>
                      </div>
                      <p
                        className="payment__logout"
                        onClick={handleAuthentication}
                      >
                        Logout & Sign in into new account
                      </p>
                      {/* <Button
                        className="payment__checkout_btn"
                        onClick={() => setActiveId("1")}
                      >
                        CONTINUE CHECKOUT
                      </Button> */}
                    </Col>
                    <Col md={6} className="payment__login_info">
                      <div className="text-muted mb-2">
                        Advantages of secure login
                      </div>
                      <div className="mb-2">
                        <FontAwesomeIcon
                          icon={faTruck}
                          className="payment__icons mr-2"
                        />{" "}
                        <span>Easily Track Orders, Hassle Free Return</span>
                      </div>
                      <div className="mb-2">
                        <FontAwesomeIcon
                          icon={faBell}
                          className="payment__icons mr-2"
                        />{" "}
                        <span>Get Relevant Alerts and Recommendations</span>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="payment__icons mr-2"
                        />{" "}
                        <span>Wishlist, Reviews, Ratings and more.</span>
                      </div>
                    </Col>
                    <p className=" payment__login_info text-muted mt-4 ml-2 mr-2">
                      Please note that on clicking on the "Logout" button you
                      will be logged out and redirected to Flipkarrt's home
                      page.
                    </p>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="mb-3 shadow-sm" bg="light">
              <Accordion.Toggle
                eventKey="1"
                className="p-0 border-0 payment__panel_header"
              >
                <Card.Header
                  className={
                    activeId === "1"
                      ? "payment__active_header_panel"
                      : "payment__header_panel"
                  }
                  onClick={() => toggleActiveId("1")}
                >
                  <span className="payment__steps mr-3">2</span>
                  DELIVERY ADDRESS
                </Card.Header>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="mb-3 shadow-sm" bg="light">
              <Accordion.Toggle
                eventKey="2"
                className="p-0 border-0 payment__panel_header"
              >
                <Card.Header
                  className={
                    activeId === "2"
                      ? "payment__active_header_panel"
                      : "payment__header_panel"
                  }
                  onClick={() => toggleActiveId("2")}
                >
                  <span className="payment__steps mr-3">3</span>
                  ORDER SUMMARY
                </Card.Header>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  {errorMessage && (
                    <Alert variant="danger">{errorMessage}</Alert>
                  )}
                  {basket &&
                    basket.map(
                      (item: any): JSX.Element => {
                        return (
                          <CheckoutProduct
                            quantity={item.quantity}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            discountedPrice={item.discountedPrice}
                            discount={item.discount}
                            quantityIncrease={() =>
                              quantityIncrease(item.id, item.quantity)
                            }
                            quantityDecrease={() =>
                              quantityDecrease(item.id, item.quantity)
                            }
                          />
                        );
                      }
                    )}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="mb-3 shadow-sm" bg="light">
              <Accordion.Toggle
                eventKey="3"
                className="p-0 border-0 payment__panel_header"
              >
                <Card.Header
                  className={
                    activeId === "3"
                      ? "payment__active_header_panel"
                      : "payment__header_panel"
                  }
                  onClick={() => toggleActiveId("3")}
                >
                  <span
                    className="payment__steps mr-3"
                    onClick={() => toggleActiveId("3")}
                  >
                    4
                  </span>
                  PAYMENT OPTION
                </Card.Header>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange} />
                    <div className="payment__priceContainer mt-3 ">
                      <span>Order Total: </span>
                      <NumberFormat
                        prefix="₹"
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </div>
                    <Button disabled={processing || disabled || success} onClick={handleSubmit}>
                      {processing ? "Processing..." : "Pay Now"}
                    </Button>
                    {cardError && (
                      <Alert variant="danger" className="mt-2">
                        {cardError}
                      </Alert>
                    )}
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col sm={4}>
          <Subtotal />
        </Col>
      </Row>
    </Container>
  );
};
export default Payment;
