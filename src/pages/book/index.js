import "../common/reset.css";
import "../common/header";
import "../common/nav";
import "../common/crumbs";
import "../common/banner";
import "../common/footer";
import "@/assets/global.less";
import "./index.less";

import Swiper from "swiper";

const bookSwiper = new Swiper(".book-swiper", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 0,
    },
  },
});
