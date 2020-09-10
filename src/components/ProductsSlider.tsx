import React from "react";
import Slider from "react-slick";
import "../components/ProductSlider.css";

const ProductSlider: React.FC = (props) => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    className: "slides",
  };
  return <Slider {...settings}>{props.children}</Slider>;
};

export default ProductSlider;
