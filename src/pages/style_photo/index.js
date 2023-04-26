import "../common/reset.css";
import "../common/header";
import "../common/nav";
import "../common/crumbs";
import "../common/banner";
import "../common/pagelist";
import "../common/footer";
import "@/assets/global.less";
import "./index.less";

$(".style-item").on("click", function () {
  const imgSrc = $(this).data("big-img");
  $(".alert-img").attr("src", imgSrc);
  $(".alert-container").fadeIn();
});

$(".alert-container .mask").on("click", function () {
  $(".alert-container").fadeOut();
});
$(".alert-container .close").on("click", function () {
  $(".alert-img").attr("src", "");
  $(".alert-container").fadeOut();
});
