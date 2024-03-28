"use client"

import { CartProvider as Cart } from "use-shopping-cart"


export const CartProvider = (
    {children}:{children: React.ReactNode}
)=>{
    return (
        <Cart
        mode="payment"
        cartMode="client-only"
        successUrl="/"
        cancelUrl="/"
        currency="INR"
        stripe={
            process.env.STRIPE_PUBLISABLE_KEY as string
        }
        shouldPersist={true}
        language="es-US"
        
        >
            {children}
        </Cart>
    )

}