gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
  })

  gsap.fromTo('.hero-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'center',
      end: '550', // Уменьшено с '820'
      scrub: 0.5 // Уменьшено с true
    }
  })

  function animateItems(items, xValue) {
    items.forEach(item => {
      gsap.fromTo(item, { opacity: 0, x: xValue }, {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-600', // Уменьшено с '-850'
          end: '-100', // Уменьшено с '-100'
          scrub: 0.5 // Уменьшено с true
        }
      })
    })
  }

  let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')
  animateItems(itemsL, -50)

  let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')
  animateItems(itemsR, 50)
}


gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
  var galleryItems = document.querySelectorAll('.gallery__item');

  galleryItems.forEach(function(item) {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 80%',
      onEnter: function() {
        item.classList.add('active');
      },
      onLeaveBack: function() {
        item.classList.remove('active');
      }
    });
  });
});

