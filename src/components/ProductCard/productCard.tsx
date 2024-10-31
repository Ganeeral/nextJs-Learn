import React from "react";
import Image from "next/image";

interface ProductCardProps {
  content: string;
  price: string;
  image: string;
  stock: number;
  onOrderClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  content,
  price,
  image,
  stock,
  onOrderClick
}) => {
  return (
    <div className="flex flex-col gap-y-5 max-w-[420px] w-full">
      <Image
        src={image}
        alt={content}
        width={420}
        height={344}
        objectFit="cover"
        priority
        className="rounded-md"
      />
      <span className="text-sm">{content}</span>
      <div className="flex justify-between w-full">
        <span className="text-3xl text-[#0009EA]">{price}</span>
        {stock > 0 ? (
          <button
            onClick={onOrderClick}
            className="px-7 py-2 bg-[#0009EA] text-white text-xl rounded-md"
          >
            Добавить в корзину
          </button>
        ) : (
          <span className="text-red-500">Нет в наличии</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
