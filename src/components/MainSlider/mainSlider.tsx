import React from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard/productCard";
import productData from "../ProductData/productData";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleOrderClick = () => {

    console.log("Order button clicked");
  };

  return (
    <div className="slider-container">
    <h2 className="text-2xl text-center mb-4">Слайдер</h2>
      <Slider {...settings}>
        {productData.map((item) => (
          <div key={item.id}>
            <ProductCard
              content={item.content}
              price={item.price}
              image={item.image}
              stock={item.stock}
              onOrderClick={handleOrderClick}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlider;
