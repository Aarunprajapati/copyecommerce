"use client"
import { AddToCart } from "@/app/(shoppingCart)/components/ui/AddtoCart"
import { ProductTypes } from "@/types/ProductTypes"
import Image from "next/image"
import { useState } from "react"
import toast from "react-hot-toast"
import { FaEye, FaHeartCircleCheck } from "react-icons/fa6"


const ProductsCard = ({ product }: { product: ProductTypes }) => {
  const [selectedSize, setselectedSize] = useState("");
  const isSelectedSize = selectedSize !== "";

  const showToast = () => {
    toast.error("please choose first size");
  };

  return (
    <div className="relative flex flex-col item-center">
      <div className="relative group">
        <Image
          src={product.image}
          alt={`image of ${product.name}`}
          width={300}
          height={300}
          className="rounded-md cursor-pointer img-fluid"
        />
        <div className="absolute flex-col items-center justify-center hidden gap-3 top-5 group-hover:flex">
          <button className="p-2 mx-2 text-white bg-gray-900 border rounded-md hover:bg-gray-900/75">
            <FaHeartCircleCheck />
          </button>
          <button className="p-2 mx-2 text-white bg-gray-900 border rounded-md hover:bg-gray-900/75">
            <FaEye />
          </button>
        </div>
      </div>
      <h3 className="mt-2 font-bold tracking-wide ">{product.name}</h3>
      <select
        value={selectedSize}
        onChange={(e) => setselectedSize(e.target.value)}
        className="p-2 my-2 border rounded-md"
      >
        <option value="">select size</option>
        <option value="small">S</option>
        <option value="medium">M</option>
        <option value="large">L</option>
        <option value="extralarge">XL</option>
      </select>

      <AddToCart
        id={product.price_id}
        name={product.name}
        currency="INR"
        price={product.unit_amount}
        image={product.image}
        size={selectedSize}
        selectSize={isSelectedSize}
        onClick={!isSelectedSize ? showToast : undefined}
      />
    </div>
  );
};

export default ProductsCard
