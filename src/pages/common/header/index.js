import "swiper/css/swiper.min.css";
// 头部的js代码
import "./index.less";
$(".menu").on("click", function () {
  $(".menu-container").slideToggle();
});

$(".m-header .nav-item").on("click", function () {
  $(".menu-container").slideUp();
});
