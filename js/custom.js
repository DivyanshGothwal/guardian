/* Navbar transparent to solid and vice versa */
$(document).ready(() => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".navbar").addClass('solid');
    }
    else {
      $(".navbar").removeClass('solid');
    }
    $(".bounce").css("opacity", 1 - ($(window).scrollTop()) / 250);
  });
});
/** add only for mobile version */
// $(document).ready(()=>{
//     var collapsed = $('.navbar-toggler').hasClass('collapsed');
//     if(collapsed){
//         if($(this).scrollTop()>200){
//             $('.navbar-brand').addClass('shortName');
//         }
//         else{
//             $('.navbar-brand').removeClass('shortName');
//         }
//     }
// });
/** close mobile version */
$(document).ready(() => {
  $(document).click((e) => {
    let clickedElement = $(e.target);
    let isNavBarOpened = $('.navbar-collapse').hasClass('show');
    console.log(!clickedElement.hasClass('navbar-toggler'));
    if (isNavBarOpened && !clickedElement.hasClass('navbar-toggler')) {

      $('.navbar-toggler').click();
    }
    console.log(isNavBarOpened);
    console.log(clickedElement);
  });
})

/**smooth scrolling to links */
$(document).ready(() => {
  $('a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      var hash = this.hash;
      $('html,body').animate(
        {
          scrollTop: $(hash).offset().top - 67
        },
        1000
      )

    }

  });
});

let validateEmail = function (e) {
  let errEmail = document.getElementById('errorMsgEmail');
  let str = '@';
  let comStr = '.com';
  let indexOfStr = e.target.value.indexOf(str);
  let indexOfComStr = e.target.value.indexOf(comStr);
  return ((e.target.value === '' ||
    e.target.value == null) ||
    indexOfStr == 0 ||
    indexOfStr > indexOfComStr ||
    indexOfComStr - indexOfStr <= 1);
}

let validateValue = function (e) {
  return (e.target.value === '' || e.target.value == null);
}

let OnChange = function (e) {
  console.log(e);
  if (e.srcElement.name === 'name') {
    let errName = document.getElementById('errorMsgName');
    if (validateValue(e)) {
      errName.innerHTML = 'Fullname is required.';
    }
    else {
      errName.innerHTML = '';
    }
  }
  else if(e.srcElement.name === 'email'){
    let errEmail = document.getElementById('errorMsgEmail');
    if (validateEmail(e)) {
      errEmail.innerHTML = 'Valid email is required.';
    }
    else {
      errEmail.innerHTML = '';
    }
  }
  else {
    let errorMsgBodyText = document.getElementById('errorMsgBodyText');
    if (validateValue(e)) {
      errorMsgBodyText.innerHTML = 'Leave a message for me';
    }
    else {
      errorMsgBodyText.innerHTML = '';
    }
  }
}

function showError(e) {
  if (e.srcElement.name === 'name') {
    if (validateValue(e)) {
      e.srcElement.classList.add('error');

    }
    else {
      e.srcElement.classList.remove('error');

    }
  }
  else if(e.srcElement.name === 'email'){
    if (validateEmail(e)) {
      e.srcElement.classList.add('error');

    }
    else {
      e.srcElement.classList.remove('error');

    }
  }
  else if(e.srcElement.name === 'bodyMsg'){
    if(validateValue(e)){
      e.srcElement.classList.add('error');
    }
    else {
      e.srcElement.classList.remove('error');

    }
  }
}

function hideError(e) {
  e.srcElement.classList.remove('error');
  e.srcElement.classList.add('input');
}

let inputsEle = document.getElementsByClassName('input');
let inputEleArray = Array.of(...inputsEle);
inputEleArray.forEach(eachEle => {
  eachEle.addEventListener('keyup', OnChange);
  eachEle.addEventListener('paste', OnChange);
  eachEle.addEventListener('select', OnChange);
  eachEle.addEventListener('change', OnChange);
  eachEle.addEventListener('focusout', OnChange);
  eachEle.addEventListener('focus', showError);
  eachEle.addEventListener('paste', showError);
  eachEle.addEventListener('select', showError);
  eachEle.addEventListener('change', showError);
  eachEle.addEventListener('keyup', showError);
  eachEle.addEventListener('focusout', hideError);
})



jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});



















particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 40,
  smartBackspace: true,
  backSpeed: 40,
  loopCount: Infinity,
  loop: true,
  cursorChar: '|'
});