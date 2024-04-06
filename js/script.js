// toggle menu button
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');

}

// change the background video when click on the gallery images
function changeVideo(name) {
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');

    // JavaScript higher order array function forEach
    // This is easier to do data mapping
    bgVideoList.forEach(video => {
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
        }
    })

    // mapping model name change 
    models.forEach(model => {
        model.classList.remove('active');
        if (model.classList.contains(name)) {
            model.classList.add('active')
        }
    })
    trailers.forEach(video => {
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
        }
    });
}


// Magnetic button

function initMagneticButtons() {
    
  // Magnetic Buttons
  // Found via: https://codepen.io/tdesero/pen/RmoxQg
  var magnets = document.querySelectorAll('.magnetic');
  var strength = 100;
  
  // START : If screen is bigger as 540 px do magnetic
  if(window.innerWidth > 540){
  // Mouse Reset
  magnets.forEach( (magnet) => {
    magnet.addEventListener('mousemove', moveMagnet );
    $(this.parentNode).removeClass('not-active');
    magnet.addEventListener('mouseleave', function(event) {
        gsap.to( event.currentTarget, 1.5, {
          x: 0, 
          y: 0, 
          ease: Elastic.easeOut
        });
        gsap.to( $(this).find(".btn-text"), 1.5, {
          x: 0, 
          y: 0, 
          ease: Elastic.easeOut
        });
    });
  });

  // Mouse move
  function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();
    var magnetsStrength = magnetButton.getAttribute("data-strength");
    var magnetsStrengthText = magnetButton.getAttribute("data-strength-text");
      
    var centerX = bounding.left + bounding.width / 2; // Center X of the button
    var centerY = bounding.top + bounding.height / 2; // Center Y of the button
    var distanceX = event.clientX - centerX; // Distance from center X to mouse X
    var distanceY = event.clientY - centerY; // Distance from center Y to mouse Y

    // Normalize the distance so that the effect is within the strength limit
    var normalizedDistanceX = (distanceX / bounding.width) * 2 * magnetsStrength;
    var normalizedDistanceY = (distanceY / bounding.height) * 2 * magnetsStrength;

    gsap.to(magnetButton, 1.5, {
        x: normalizedDistanceX,
        y: normalizedDistanceY,
        rotate: "0.001deg",
        ease: Power4.easeOut
    });

    // If you have elements inside your magnetButton that should also move,
    // adjust their movements similarly
}

  }; // END : If screen is bigger as 540 px do magnetic

  // Mouse Enter
  $('.btn-click.magnetic').on('mouseenter', function() {
    if($(this).find(".btn-fill").length) {
    gsap.to($(this).find(".btn-fill"), .6, {
        startAt: {y: "76%"},
        y: "0%",
        ease: Power2.easeInOut
    });
    }
    if($(this).find(".btn-text-inner.change").length) {
    gsap.to($(this).find(".btn-text-inner.change"), .3, {
        startAt: {color: "#1C1D20"},
        color: "#FFFFFF",
        ease: Power3.easeIn,
    });
    }
    $(this.parentNode).removeClass('not-active');
  });

  // Mouse Leave
  $('.btn-click.magnetic').on('mouseleave', function() {
    if($(this).find(".btn-fill").length) {
    gsap.to($(this).find(".btn-fill"), .6, {
        y: "-76%",
        ease: Power2.easeInOut
    });
    }
    if($(this).find(".btn-text-inner.change").length) {
    gsap.to($(this).find(".btn-text-inner.change"), .3, {
        color: "#1C1D20",
        ease: Power3.easeOut,
        delay: .3
    });
    }
    $(this.parentNode).removeClass('not-active');
  });
}

initMagneticButtons();
