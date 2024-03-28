"use client"
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";


export const AddToCart = ({
    id,
    name,
    currency,
    price,
    image,
    size,
    selectSize,
    onClick
}: Product)=>{
    const {addItem} = useShoppingCart();
    const productId = `${id}-${size}`;
    const product ={
    id: productId,
    name,
    currency,
    price,
    image,
    size,
    }

    return (
        <button
        onClick={()=>{
            if(!selectSize && onClick){
                onClick()
            }else{
                addItem(product as any);
                toast.success(`${name} has been added to cart`)
            }
        }}
        >
            Add To Cart
        </button>
    )
}