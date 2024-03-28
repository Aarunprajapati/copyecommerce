import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

import { AiOutlineShoppingCart } from "react-icons/ai";

export const CartIcon = ()=>{
    const {cartDetails} = useShoppingCart();
    const cartItems = Object.values(cartDetails ?? {})
    return(
        <Link href={'/cart'} className="relative">
            <AiOutlineShoppingCart/>
            {cartItems.length > 0 && (
                  <span className="absolute flex items-center justify-center w-4 h-4 pb-1 text-sm font-bold text-white bg-gray-900 rounded-full left-3 bottom-3">
                  {cartItems.length}
                </span>
            )}
        </Link>
    )
}