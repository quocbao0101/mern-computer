import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";
import { List, ListItem, ListItemText } from '@material-ui/core';
import b3 from '../../assets/images/b3.webp';
import b2 from '../../assets/images/b2.webp';

// import required modules
import { Pagination } from "swiper";


export default function Slider() {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img alt='slider' src={b3}/></SwiperSlide>
        <SwiperSlide><img alt='slider' src={b2}/></SwiperSlide>
    </Swiper>
  )
}
