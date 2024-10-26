"use client";

import React, { useState } from "react";
import ProductCard from "../ProductCard/productCard";
import Link from "next/link";

const data = [
  { id: 1, content: "Все товары" },
  { id: 2, content: "Шины/колеса" },
  { id: 3, content: "Масла" },
  { id: 4, content: "Ароматизаторы" },
];

const product = [
  {
    id: 1,
    content: 'Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"',
    price: "335 ₽",
    image: "/images/autoparfum.png",
  },
  {
    id: 2,
    content: 'Ароматизатор для автомобиля Diamond candle c ароматом "Апельсин и древесина"',
    price: "535 ₽",
    image: "/images/autoparfum.png",
  },
  {
    id: 3,
    content: 'Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и апельсин"',
    price: "835 ₽",
    image: "/images/autoparfum.png",
  },
];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = product.filter((item) =>
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-y-10 max-w-[1300px] w-full mx-auto mt-14">
      <h3 className="text-4xl">Каталог товаров</h3>

      <input
        type="text"
        placeholder="Поиск по названию товара"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded"
      />

      <div className="flex gap-x-10 items-center">
        <span className="text-lg">Категории:</span>
        <div className="flex gap-x-5 items-center">
          {data.map((item) => (
            <div key={item.id} className="py-2 px-4 bg-[#0009EA] text-white rounded">
              <span>{item.content}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5 gap-y-10 flex-wrap max-w-[1300px] mx-auto">
        {filteredProducts.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`}>
            <ProductCard
              content={item.content}
              price={item.price}
              image={item.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
