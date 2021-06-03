import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css'
import "./Partners.css"

export default function Partners() {
  SwiperCore.use([Autoplay])
  const partners =[1, 2, 3, 4, 5, 6];
    return (
        <div className="partners">
              <Swiper
                spaceBetween={80}
                slidesPerView={9}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000 }}
              >
              {
                partners.map((item)=>(
                  <SwiperSlide key={item.id}> <div className="swiper_partners"><img src="http://mir-mtk.ru/img/friend.webp" alt=""/></div></SwiperSlide>
                ))
              }
            
              
            </Swiper>

        </div>
    )
}
