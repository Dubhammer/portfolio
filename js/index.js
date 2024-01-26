var animation = bodymovin.loadAnimation({
  container: document.getElementById('bglottie'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  rendererSettings: {
    progressiveLoad: false,
    preserveAspectRatio: "xMidYMax slice"
  },
  path: '/js/data.json'
})

// setTimeout(function () { animation.play(); }, 250);