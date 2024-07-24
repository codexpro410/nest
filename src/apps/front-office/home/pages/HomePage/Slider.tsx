import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { slider1, slider2 } from "./images/images"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';
let sliderArray = [
  {id:1, image:slider1, text1:"Don't miss amazing", text2:"grocery deals", text3:"Sign up for the daily newsletter"},
  {id:2, image:slider2, text1:"Fresh Vegetables", text2:"Big discount", text3:"Sign up for the daily newsletter"},
]

export default function Slider() {
  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
          navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="rounded-3xl"
      >
        {sliderArray.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative flex items-center justify-center p-6 rounded-3xl">
              <img src={slide.image} className="bg-cover bg-center bg-no-repeat object-cover rounded-3xl w-full h-[500px]"/>
              <section className="absolute top-10 left-8 sm:left-20 flex flex-col justify-center gap-2 items-start">
                <p className="pt-[20px] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[72px]">{slide.text1}</p>
                <p className="pt-[20px] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[72px]">{slide.text2}</p>
                <p className="pt-[50px]  lg:text-[30px]">{slide.text3}</p>

                <div className="bg-white mt-[20px] h-12 bottom-32 text-[10px] sm:text-[16px] left-20 rounded-3xl flex gap-2 justify-between items-center">
                  <div className="transition-transform -rotate-45 p-3 flex items-center">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  </div>
                  <input type="text" placeholder="Your email address" className="h-10 outline-none" />
                  <button className="bg-[#3bb77e] h-12 rounded-3xl p-4 flex items-center text-white">Subscribe</button>
                </div>
              </section>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom pagination */}
        <div className="swiper-pagination absolute !bottom-5 left-1/2  transform -translate-x-1/2 z-10"></div>
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="swiper-button-prev absolute top-1/2 !left-7 z-10 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-green-500"></div>
      <div className="swiper-button-next absolute top-1/2 !right-7 z-10 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-green-500"></div>

    </div>
  )
}