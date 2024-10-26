import React from "react";
import Image from "next/image";

interface ProductPageProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const ProductPage: React.FC<ProductPageProps> = ({ image, title, description, price }) => {
  return (
    <div className="max-w-[1300px] mx-auto mt-52 p-6 flex gap-10">
      <div className="w-[500px] h-[500px]">
        <Image src={image} alt={title} width={500} height={500} objectFit="cover" className="rounded-md" />
      </div>
      <div className="flex flex-col justify-between">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-lg mb-6">{description}</p>
        <span className="text-4xl text-[#0009EA] mb-6">{price}</span>
        <button className="px-7 py-3 bg-[#0009EA] text-white text-xl rounded-md">Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductPage;
