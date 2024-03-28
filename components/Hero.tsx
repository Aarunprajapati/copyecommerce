"use client"
import {Swiper, SwiperSlide} from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Pagination, Autoplay } from 'swiper/modules';

const Hero = () => {
  return (
    <section className="mt-2">
        <div
        className="main-container"
        >
            <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{delay:5000}}
            spaceBetween={10}
            slidesPerView={1}
            speed={500}
            pagination={{clickable:true}}
            className="w-full h-full "
            >
                <SwiperSlide>
                    <img src={'/slider-image-1.png'} 
                    className="object-cover w-full h-full "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'/slider-image-2.png'} 
                    className="object-cover w-full h-full "
                    />
                </SwiperSlide>
            </Swiper>
        </div>

    </section>
  )
}

export default Hero
