import React from "react";
import CheckoutProduct from "../../components/CheckoutProduct";
import Subtotal from "../../components/Subtotal";
import { useStateValue } from "../../components/MyContext";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import emptyCart from "../../assets/emptyCart.png";
import "./Checkout.css";

const Checkout: React.FC = () => {
  // @ts-ignore
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout__contianer">
      <Container>
        <Row>
          <Col sm={basket.length === 0 ? 12 : 0}>
            <Jumbotron className="bg-white mt-4 mb-4 p-2">
              <Container>
                <h6>My Cart({basket.length})</h6>
                {basket.length === 0 ? (
                  <div className="empty__cart">
                    <img src={emptyCart} className="emptycart__img" />
                    <p className="lead">Your cart is empty!</p>
                    <p>
                      <small>
                        It's a good day to buy the items you saved for later!
                      </small>
                    </p>
                  </div>
                ) : (
                  <div>
                    {basket.map(
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
                          />
                        );
                      }
                    )}
                    <div className="order__btn__container p-4">
                      <Button variant="custom" className="pl-5 pr-5 pt-2 pb-2">
                        PLACE ORDER
                      </Button>
                    </div>
                  </div>
                )}
              </Container>
            </Jumbotron>
          </Col>
          {basket.length === 0 ? null : (
            <Col sm={4}>
              <Subtotal />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};
export default Checkout;
