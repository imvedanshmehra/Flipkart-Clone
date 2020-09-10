import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import cover1 from "../../assets/cover1.jpg";
import cover2 from "../../assets/cover2.jpg";
import cover3 from "../../assets/cover3.jpg";
import Products from "../../components/Products";
import ProductsSlider from "../../components/ProductsSlider";
import NumberFormat from "react-number-format";
import "../homepage/Homepage.css";

const Homepage: React.FC = () => {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <img
            src={cover1}
            alt="cover1"
            className="w-100 d-block carousel-img img-fluid"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={cover2}
            alt="cover2"
            className="w-100 d-block carousel-img img-fluid"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={cover3}
            alt="cover2"
            className="w-100 d-block carousel-img img-fluid"
          />
        </Carousel.Item>
      </Carousel>
      <ProductsSlider>
        <div>
          <Products
            id={1}
            rating={4.8}
            title={"Realme 5i (Aqua Blue, 64 GB)"}
            price={
              <NumberFormat
                prefix="₹"
                value={11999}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
            image={
              "https://rukminim1.flixcart.com/image/312/312/k65d18w0pkrrdj/mobile/r/x/z/realme-5i-rmx2030-original-imafnsx5pakdfdpb.jpeg?q=70"
            }
            discountedPrice="17,999"
            discount={11}
          />
        </div>
        <div>
          <Products
            id={2}
            rating={4.5}
            title={"Apple iPhone SE (Black, 64 GB)"}
            price={
              <NumberFormat
                prefix="₹"
                value={8000}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
            image={
              "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/p/z/q/apple-iphone-se-mxd02hn-a-original-imafrcpjfehbbqgb.jpeg?q=70"
            }
            discountedPrice="42,500"
            discount={12}
          />
        </div>
        <div>
          <Products
            id={3}
            rating={4.7}
            title={"OPPO Reno2 F (Lake Green, 256 GB)  (6 GB RAM)"}
            price={
              <NumberFormat
                prefix="₹"
                value={17990}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
            image={
              "https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/9/r/reno2-f-128-a-cph1989-oppo-8-original-imafh2ctdbn9rbgk.jpeg?q=70"
            }
            discountedPrice="19,990"
            discount={10}
          />
        </div>
        <div>
          <Products
            id={4}
            rating={4.1}
            title={"I Kall K300 NEW (Blue, 64 GB)"}
            price={
              <NumberFormat
                prefix="₹"
                value={7999}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
            image={
              "https://rukminim1.flixcart.com/image/312/312/kbzergw0/mobile/e/v/n/i-kall-k300-new-k300-new-original-imaft7hn9etwxd5y.jpeg?q=70"
            }
            discountedPrice="9,999"
            discount={11}
          />
        </div>
        <div>
          <Products
            id={4}
            rating={4.8}
            title={"Realme 5i (Aqua Blue, 64 GB)"}
            price={
              <NumberFormat
                prefix="₹"
                value={15999}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
            image={
              "https://rukminim1.flixcart.com/image/312/312/k65d18w0pkrrdj/mobile/r/x/z/realme-5i-rmx2030-original-imafnsx5pakdfdpb.jpeg?q=70"
            }
            discountedPrice="17,999"
            discount={11}
          />
        </div>
        <div>
          <Products
            id={4}
            rating={4.8}
            title={"Realme 5i (Aqua Blue, 64 GB)"}
            price={
              <NumberFormat
                prefix="₹"
                value={15999}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
            image={
              "https://rukminim1.flixcart.com/image/312/312/k65d18w0pkrrdj/mobile/r/x/z/realme-5i-rmx2030-original-imafnsx5pakdfdpb.jpeg?q=70"
            }
            discountedPrice="17,999"
            discount={11}
          />
        </div>
        <div>
          <Products
            id={4}
            rating={4.8}
            title={"Realme 5i (Aqua Blue, 64 GB)"}
            price={
              <NumberFormat
                prefix="₹"
                value={12999}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
            image={
              "https://rukminim1.flixcart.com/image/312/312/k65d18w0pkrrdj/mobile/r/x/z/realme-5i-rmx2030-original-imafnsx5pakdfdpb.jpeg?q=70"
            }
            discountedPrice="17,999"
            discount={11}
          />
        </div>
      </ProductsSlider>
    </Fragment>
  );
};

export default Homepage;
