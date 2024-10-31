"use client";

import React from "react";
import { useParams } from "next/navigation";
import ProductPage from "@/components/ProductPage/productPage";

const products = [
  {
    id: "1",
    image: "/images/autoparfum.png",
    title: "Держатель для телефона автомобильный телескопический раздвижной",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: "444 ₽",
    stock: 5
  },
  {
    id: "2",
    image: "/images/another-product.png",
    title: "Другой продукт",
    description: "Описание другого продукта.",
    price: "555 ₽",
    stock: 0
  },
];

const Product = () => {
  const params = useParams();
  const { id } = params;

  const product = products.find((item) => item.id === id);
  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <ProductPage
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
    />
  );
};

export default Product;
