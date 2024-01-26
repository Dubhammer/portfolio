document.addEventListener("DOMContentLoaded", function () {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy.videomask"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (video) {
        if (video.isIntersecting) {
          var sources = video.target.getElementsByTagName("source");

          for (var i = 0; i < sources.length; i++) {
            var videoSource = sources[i];
            videoSource.src = videoSource.dataset.src;
          }

          video.target.load();
          video.target.play(); // Autoplay when in view
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function (lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});




// document.addEventListener("DOMContentLoaded", function () {
//   let lazyVideos = document.querySelectorAll(".lazy videomask");

//   if ("IntersectionObserver" in window) {
//     let lazyVideoObserver = new IntersectionObserver(function (entries) {
//       entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//           loadVideo(entry.target);
//           lazyVideoObserver.unobserve(entry.target);
//         }
//       });
//     });

//     lazyVideos.forEach(function (lazyVideo) {
//       lazyVideoObserver.observe(lazyVideo);
//     });
//   }
// });

// function loadVideo(video) {
//   let source = video.querySelector("source");
//   source.src = source.dataset.src;

//   video.load();
//   video.classList.remove("lazy");
//   video.play();
// }

// // Additional code for handling multiple videos
// let partylistSlides = document.querySelectorAll(".partylist-slide video");
// partylistSlides.forEach(function (video) {
//   playPauseVideo(video);
// });

// function playPauseVideo(video) {
//   video.muted = true;
//   let playPromise = video.play();

//   if (playPromise !== undefined) {
//     playPromise.then(() => {
//       let observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.intersectionRatio !== 1 && !video.paused) {
//               video.pause();
//             } else if (video.paused) {
//               video.play();
//             }
//           });
//         },
//         { threshold: 0.2 }
//       );
//       observer.observe(video);
//     });
//   }
// }
