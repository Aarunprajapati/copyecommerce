import { BiWorld } from "react-icons/bi";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { GiTrophy } from "react-icons/gi";

const Info = () => {
  return (
    <section className='py-5 mt-2'>
        <div className='flex justify-between gap-2 mt-5 main-container max-md:grid max-md:grid-cols-2 max-md:gap-x-20 max-md:gap-y-10'>
            <div className="flex items-center gap-2 text-sm uppercase">
            <BiWorld className="text-3xl" />
            <span>Free Shipping Worldwide</span>
            </div>
            <div className="flex items-center gap-2 text-sm uppercase">
                <FaArrowRotateLeft className="text-3xl" />
                <span>Money Back Guarenteed</span>
            </div>
            <div className="flex items-center gap-2 text-sm uppercase">
                <IoIosLock className="text-3xl" />
                <span>Secure Online Payments</span>
            </div>
            <div className="flex items-center gap-2 text-sm uppercase">
                <GiTrophy className="text-3xl" />
                <span>Best Premium Quality</span>
            </div>
        </div>
    </section>
  )
}

export default Info
