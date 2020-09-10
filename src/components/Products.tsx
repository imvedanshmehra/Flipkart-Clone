import React, { useState } from "react";
import "../components/Products.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "./MyContext";

type IProps = {
  id: number;
  rating: number;
  title: string;
  image: string;
  price: JSX.Element;
  discountedPrice?: string | number;
  discount?: number;
};

const Products: React.FC<IProps> = ({
  id,
  title,
  rating,
  image,
  price,
  discountedPrice,
  discount,
}) => {
  const [wishlisted, setWishlisted] = useState<boolean>(false);

  // @ts-ignore
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (): void => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        discountedPrice,
        discount,
      },
    });
  };

  return (
    <div className="product__contianer">
      <Card
        border="white"
        style={{ width: "18rem", height: "18rem" }}
        className="text-center mt-2 mb-2 mr-2"
      >
        <FontAwesomeIcon
          icon={faHeart}
          className={
            wishlisted ? "products__wishlist__active" : "products__wishlist"
          }
          onClick={() => setWishlisted(!wishlisted)}
        />
        <Card.Img
          src={image}
          variant="top"
          className="products__image img-fluid d-block m-auto "
        />
        <Card.Title className="text-center p-2">
          <small>{title}</small>
        </Card.Title>
        <div className="products__rating">
          <p>
            {rating}
            <span>
              <small>
                <FontAwesomeIcon
                  icon={faStar}
                  className="ml-1 product__rating__icon"
                />
              </small>
            </span>
          </p>
        </div>
        <div className="products__price__container">
          <span className="products__price">{price}</span>
          <span className="products__discounted__price">
            <del> ₹{discountedPrice}</del>
          </span>
          <small>
            <span className="products__discount"> {discount}% off</span>
          </small>
        </div>
        <Button className="add-btn" onClick={addToBasket}>
          ADD TO CART
        </Button>
      </Card>
    </div>
  );
};

export default Products;
