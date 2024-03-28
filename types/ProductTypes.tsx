import Stripe from "stripe";
export interface ProductTypes{
    id: string
    name: string
    unit_amount: any
    image: string
    price_id?: string
    currency?: any
    decription? : string | null
    metadata? : Stripe.Metadata
    quantity? : number
}