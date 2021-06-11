/*et ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function() {
   let desplazamientoActual = window.pageYOffset;
   if (ubicacionPrincipal >= desplazamientoActual) {
      document.getElementsByTagName("nav")[0].style.top = "0px"
   } else {
      document.getElementsByTagName("nav")[0].style.top = "-100px"
   }
   ubicacionPrincipal = desplazamientoActual;
})

let ubicacionPrincipal2 = window.pageYOffset;

window.addEventListener("scroll", function() {
   let desplazamientoActual = window.pageYOffset;
   if (ubicacionPrincipal2 >= desplazamientoActual) {
      document.getElementsByClassName("txt-header")[0].style.top = "75px"
   } else {
      document.getElementsByClassName("txt-header")[0].style.top = "-100px"
   }
   ubicacionPrincipal2 = desplazamientoActual;
})
*/

let enlacesHeader = document.querySelectorAll(".menu")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click",function(){
   enlacesHeader.classList.toggle("menu2")
})


jQuery(function ($) {

   var $window = $(window); // 1. Window Object.
   var $featuredMedia = $("#featured-media"); // 1. The Video Container.
   var $featuredVideo = $("#featured-video"); // 2. The Youtube Video.

   var player; // 3. Youtube player object.
   var top = $featuredMedia.offset().top; // 4. The video position from the top of the document;
   var offset = Math.floor(top + ($featuredMedia.outerHeight() / 2)); //5. offset.



   window.onYouTubeIframeAPIReady = function () {
      player = new YT.Player("featured-video", {
         events: {
            "onStateChange": onPlayerStateChange
         }
      });
   };


   /**
* Run when the Youtube video state (play, pause, etc.) is changed.
*
* @param {Object} event The Youtube Object Event.
* @return {Void}
*/
   function onPlayerStateChange(event) {

      var isPlay = 1 === event.data;
      var isPause = 2 === event.data;
      var isEnd = 0 === event.data;

      if (isPlay) {
         $featuredVideo.removeClass("is-paused");
         $featuredVideo.toggleClass("is-playing");
      }

      if (isPause) {
         $featuredVideo.removeClass("is-playing");
         $featuredVideo.toggleClass("is-paused");
      }

      if (isEnd) {
         $featuredVideo.removeClass("is-playing", "is-paused");
      }
   }




   $window
      .on("resize", function () {
         top = $featuredMedia.offset().top;
         offset = Math.floor(top + ($featuredMedia.outerHeight() / 2));
      })

      .on("scroll", function () {
         $featuredVideo.toggleClass("is-sticky",
            $window.scrollTop() > offset && $featuredVideo.hasClass("is-playing")
         );
      }
      );




});
