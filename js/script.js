// swiper galary.......
var swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});
// Clients Slick Sliders.......
$(".responsive").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: ".my-prev",
  nextArrow: ".my-next",
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
//-----------Menu Active---------
//-----------Menu View---------
//-----------Popup---------
lightBoxClose = function () {
  document.querySelector(".lightbox").classList.add("closed");
};
//-----------Animation---------
$(document).ready(function () {
  $(".wrapper_text").waypoint(
    function (direction) {
      $(".wrapper_text").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "400px",
    }
  );

  $(".member_slide_left").waypoint(
    function (direction) {
      $(".member_slide_left").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "400px",
    }
  );
  $(".member_slide_bottom").waypoint(
    function (direction) {
      $(".member_slide_bottom").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "400px",
    }
  );
  $(".member_slide_down").waypoint(
    function (direction) {
      $(".member_slide_down").addClass("animate__animated animate__fadeInDown");
    },
    {
      offset: "400px",
    }
  );
  $(".member_slide_right").waypoint(
    function (direction) {
      $(".member_slide_right").addClass(
        "animate__animated animate__fadeInRight"
      );
    },
    {
      offset: "400px",
    }
  );

  $(".member_slide_left1").waypoint(
    function (direction) {
      $(".member_slide_left1").addClass(
        "animate__animated animate__fadeInLeft"
      );
    },
    {
      offset: "400px",
    }
  );
  $(".member_slide_bottom1").waypoint(
    function (direction) {
      $(".member_slide_bottom1").addClass(
        "animate__animated animate__fadeInUp"
      );
    },
    {
      offset: "400px",
    }
  );
  $(".member_slide_down1").waypoint(
    function (direction) {
      $(".member_slide_down1").addClass(
        "animate__animated animate__fadeInDown"
      );
    },
    {
      offset: "400px",
    }
  );
  $(".member_slide_right1").waypoint(
    function (direction) {
      $(".member_slide_right1").addClass(
        "animate__animated animate__fadeInRight"
      );
    },
    {
      offset: "400px",
    }
  );



  $(".member_slide_left2").waypoint(
    function (direction) {
      $(".member_slide_left2").addClass(
        "animate__animated animate__fadeInLeft"
      );
    },
    {
      offset: "400px",
    }
  );
  $(".member_slide_bottom2").waypoint(
    function (direction) {
      $(".member_slide_bottom2").addClass(
        "animate__animated animate__fadeInUp"
      );
    },
    {
      offset: "400px",
    }
  );
  $(".member_slide_down2").waypoint(
    function (direction) {
      $(".member_slide_down2").addClass("animate__animated animate__fadeInDown");
    },
    {
      offset: "400px",
    }
  );
  $(".member_slide_right2").waypoint(
    function (direction) {
      $(".member_slide_right2").addClass(
        "animate__animated animate__fadeInRight"
      );
    },
    {
      offset: "400px",
    }
  );



  $(".member_slide_left3").waypoint(
    function (direction) {
      $(".member_slide_left3").addClass(
        "animate__animated animate__fadeInLeft"
      );
    },
    {
      offset: "400px",
    }
  );
  $(".member_slide_bottom3").waypoint(
    function (direction) {
      $(".member_slide_bottom3").addClass(
        "animate__animated animate__fadeInUp"
      );
    },
    {
      offset: "400px",
    }
  );
  $(".member_slide_down3").waypoint(
    function (direction) {
      $(".member_slide_down").addClass("animate__animated animate__fadeInDown");
    },
    {
      offset: "400px",
    }
  );
  $(".member_slide_right3").waypoint(
    function (direction) {
      $(".member_slide_right3").addClass(
        "animate__animated animate__fadeInRight"
      );
    },
    {
      offset: "400px",
    }
  );
});
