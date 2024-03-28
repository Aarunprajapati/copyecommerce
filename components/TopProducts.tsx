import { FetchProduct } from "@/app/actions/getStripeProduct"
import Link from "next/link"
import ProductsCard from "./ProductsCard"

const TopProducts = async () => {
  const products = await FetchProduct();
  const TopProducts = products.filter((product)=> product.metaData?.topRated === 'true')
  return (
    <section className="py-10 border-t">
      <div className=" main-container">
        <div className="flex justify-between item-center">
          <h1 className="text-xl text-gray-900 uppercase border-b border-gray-900">Top Products</h1>
          <Link href={'/shop'} className="hover:underline">
            <span>View More &#8594;</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-2 lg:grid-cols-4 ">
          {TopProducts.map((product)=>(
            <ProductsCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopProducts
