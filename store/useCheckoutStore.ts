import {create} from "zustand"
import {persist} from "zustand/middleware"

type CheckOutState ={
    paymentIntent: string,
    onCheckOut:string,
    setPaymentIntent:(val:string) => void,
    setCheckOut:(val:string) => void

}

export const useCheckoutStore = create<CheckOutState>()(
    persist(
        (set)=>({
            // Initial state
            paymentIntent:"",
            onCheckOut:"cart",

            // Set State
            setPaymentIntent:(val)=>set((set)=>({paymentIntent:val})),
            setCheckOut:(val)=>set((set)=>({onCheckOut:val}))

        }),
        {name: "checkout-store"}
    )
)