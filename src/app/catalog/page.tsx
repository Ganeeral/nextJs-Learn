"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ProductCard/productCard";
import OrderModal from "@/components/OrderModal/orderModal";
import productData from "@/components/ProductData/productData";

const categories = [
  { id: 1, name: "Все товары" },
  { id: 2, name: "Шины/колеса" },
  { id: 3, name: "Масла" },
  { id: 4, name: "Ароматизаторы" },
];

interface ProductType {
  id: number;
  content: string;
  category?: string; 
  price: string;
  image: string;
  stock: number;
}


const Catalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [sortOption, setSortOption] = useState<string>("default");
  const [selectedCategory, setSelectedCategory] = useState<string>("Все товары");

  const filteredProducts = productData.filter((item) => {
    const matchesCategory =
      selectedCategory === "Все товары" || item.category === selectedCategory;
    const matchesSearch = item.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortOption) {
      case "priceAsc":
        return parseFloat(a.price) - parseFloat(b.price);
      case "priceDesc":
        return parseFloat(b.price) - parseFloat(a.price);
      case "stockAsc":
        return a.stock - b.stock;
      case "stockDesc":
        return b.stock - a.stock;
      default:
        return 0; 
    }
  });

  const openModal = (product: ProductType) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-col gap-y-10 max-w-[1300px] w-full mx-auto mt-32">
      <h3 className="text-4xl">Каталог товаров</h3>

      <input
        type="text"
        placeholder="Поиск по названию товара"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded"
      />

      <div className="flex gap-x-5 items-center mt-4">
        <span className="text-lg">Категории:</span>
        <div className="flex gap-x-5">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`py-2 px-4 rounded ${
                selectedCategory === category.name ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5 mt-4">
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded"
          onClick={() => setSortOption("priceAsc")}
        >
          По возрастанию цены
        </button>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded"
          onClick={() => setSortOption("priceDesc")}
        >
          По убыванию цены
        </button>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded"
          onClick={() => setSortOption("stockAsc")}
        >
          По возрастанию остатка
        </button>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded"
          onClick={() => setSortOption("stockDesc")}
        >
          По убыванию остатка
        </button>
      </div>

      <div className="flex gap-x-5 gap-y-10 flex-wrap max-w-[1300px] mx-auto">
        {sortedProducts.map((item) => (
          <div key={item.id}>
            <ProductCard
              content={item.content}
              price={item.price}
              image={item.image}
              stock={item.stock}
              onOrderClick={() => openModal(item)}
            />
            <div className="mt-2 text-gray-600">Остаток: {item.stock}</div>
          </div>
        ))}
      </div>


      {selectedProduct && (
        <OrderModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default Catalog;
