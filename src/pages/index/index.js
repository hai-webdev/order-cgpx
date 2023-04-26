import "../common/reset.css";
import "../common/header";
import "../common/footer";
import "@/assets/global.less";
import "./index.less";
import "./scroll";
import Swiper from "swiper";

$(".story-tab-item").on("mouseenter", function () {
  const index = $(this).index();
  $(".story-tab-item").removeClass("on");
  $(this).addClass("on");
  $(".story-item").removeClass("on");
  $(".story-item").eq(index).addClass("on");
});
// const newsAutoplay = $(".news-swiper").data("autoplay");
// const newSwiper = new Swiper(".news-swiper", {
//   direction: "horizontal",
//   slidesPerView: 1,
//   spaceBetween: 0,
//   loop:true,
//   breakpoints: {
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//       direction: "vertical",
//     },
//   },
//   autoplay: {
//     delay: newsAutoplay,
//     stopOnLastSlide: false,
//     disableOnInteraction: true,
//   },
//   speed:2500
// });
const speed = $(".news-swiper").data("speed");
$(".news-swiper").scroll({
  speed, //数值越大，速度越快
});

const videoSwiper = new Swiper(".video-swiper", {
  navigation: {
    nextEl: ".swiper-button-video-next",
    prevEl: ".swiper-button-video-prev",
  },
});
const historySwiper = new Swiper(".history-swiper", {
  navigation: {
    nextEl: ".swiper-button-history-next",
    prevEl: ".swiper-button-history-prev",
  },
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 0,
    },
    1080: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 5,
      slidesPerGroup: 3,
      spaceBetween: 0,
    },
  },
});

$(".video-box .play").on("click", function () {
  const videoSrc = $(this).data("video");
  $(".alert-video").attr("src", videoSrc);
  $(".alert-video").get(0).play();
  $(".alert-container").fadeIn();
});

$(".alert-container .mask").on("click", function () {
  $(".alert-video").attr("src", "");
  $(".alert-video").get(0).pause();
  $(".alert-container").fadeOut();
});
$(".alert-container .close").on("click", function () {
  $(".alert-video").attr("src", "");
  $(".alert-video").get(0).pause();
  $(".alert-container").fadeOut();
});

$(".music-container").on("click", function () {
  const audio = $("#audio").get(0);
  console.log();
  if (audio.paused) {
    audio.play();
    $(".music-box .icon").addClass("play");
  } else {
    audio.pause();
    $(".music-box .icon").removeClass("play");
  }
});

// window.addEventListener("hashchange", handleHashchange);

// function handleHashchange(){
//   const hash = location.hash;
//   if(!hash || hash === "#"){
//     return;
//   }else{
//     const top = $(hash).offset().top;
//     console.log(hash, top);
//     $("html,body").animate({ scrollTop: top}, 500);
//   }

// }

function setDecoration() {
  var rowLine = Number($(".tab-content").css("line-height").replace("px", ""));
  var rowNum = Math.round($(".tab-content").height() / rowLine);
  for (let i = 0; i < rowNum; i++) {
    $(".tab-content .line").append(
      `<span style="top:${i * rowLine}px"></span>`
    );
  }
}

function absolute3D(){
  const vWidth = $(window).width();
  const boxWidth = $(".box-achievement-cont .text-box").width();
  $(".p-3d").css("width", (vWidth - boxWidth) / 2 - 15)
  console.log(vWidth - boxWidth);
}

setDecoration();
absolute3D();
$(window).resize(function(){
  setDecoration();
  absolute3D();
})
//高度/行高=文本行数
