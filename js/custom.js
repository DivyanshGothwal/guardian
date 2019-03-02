/* Navbar transparent to solid and vice versa */
$(document).ready(() => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".navbar").addClass('solid');
    }
    else {
      $(".navbar").removeClass('solid');
    }
    $(".bounce").css("opacity", 0.7 - ($(window).scrollTop()) / 250);
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
    //console.log(!clickedElement.hasClass('navbar-toggler'));
    if (isNavBarOpened && !clickedElement.hasClass('navbar-toggler')) {

      $('.navbar-toggler').click();
    }
    //console.log(isNavBarOpened);
    //console.log(clickedElement);
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
  let str = '@';
  let comStr = '.com';
  let indexOfStr = 0;
  let indexOfComStr = 0;
  if (typeof e.value !== 'undefined') {
    indexOfStr = e.value.indexOf(str);
    indexOfComStr = e.value.indexOf(comStr);
  }
  return ((e.value !== '' &&
    e.value !== null) &&
    indexOfStr !== 0 &&
    indexOfStr < indexOfComStr &&
    indexOfComStr - indexOfStr > 1);
}

let validateValue = function (e) {
  return (e.value === '' || e.value == null);
}

let OnChange = function (e) {
  console.log(e);
  if (e.srcElement.name === 'name') {
    let errName = document.getElementById('errorMsgName');
    if (validateValue(e.srcElement)) {
      errName.innerHTML = 'Fullname is required.';
    }
    else {
      errName.innerHTML = '';
    }
  }
  else if (e.srcElement.name === 'email') {
    let errEmail = document.getElementById('errorMsgEmail');
    if (!validateEmail(e.srcElement)) {
      errEmail.innerHTML = 'Valid email is required.';
    }
    else {
      errEmail.innerHTML = '';
    }
  }
  else {
    let errorMsgBodyText = document.getElementById('errorMsgBodyText');
    if (validateValue(e.srcElement)) {
      errorMsgBodyText.innerHTML = 'Leave a message for me';
    }
    else {
      errorMsgBodyText.innerHTML = '';
    }
  }
  showError(e);
}

function showError(e) {
  if (e.srcElement.name === 'name') {
    if (validateValue(e.srcElement)) {
      e.srcElement.classList.add('error');

    }
    else {
      e.srcElement.classList.remove('error');

    }
  }
  else if (e.srcElement.name === 'email') {
    if (!validateEmail(e.srcElement)) {
      e.srcElement.classList.add('error');

    }
    else {
      e.srcElement.classList.remove('error');

    }
  }
  else if (e.srcElement.name === 'bodyMsg') {
    if (validateValue(e.srcElement)) {
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
  eachEle.addEventListener('change', OnChange);
  eachEle.addEventListener('focus', showError);
  eachEle.addEventListener('paste', OnChange);
  eachEle.addEventListener('select', OnChange);
  eachEle.addEventListener('keyup', OnChange);
  eachEle.addEventListener('focusout', OnChange);
})



jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});

function sendMessangeToRecipient(msgName, emailSentFrom, emailBody) {
  Email.send({
    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To: 'shotsdivyansh@gmail.com',
    From: emailSentFrom,
    Subject: msgName + " Wants to contact you",
    Body: emailBody
  }).then(
    message => {
      document.getElementById('success').style.display = "block";
      // if (message === 'ok') {
        //successEle.style.display = "block";
      // }
      // else {
      //   dangerEle.style.display = "block";
      // }
    }
  );
}
var sendMsgButton = document.getElementById('sendMsgButton');

sendMsgButton.addEventListener('click', sendMessange);


function sendMessange(e) {
  let inputsEle = document.getElementsByClassName('input');
  let inputEleArray = Array.of(...inputsEle);
  let sendTrue = 1;
  inputEleArray.forEach(eachEle => {
    console.log(eachEle);
    if ((eachEle.name === 'email' && !validateEmail(eachEle)) || (validateValue(eachEle))) {
      $(eachEle).select();
      sendTrue = 0;
    }
  });
  if (sendTrue) {
    let msgName = null;
    let emailSentFrom = null;
    let emailBody = null;
    inputEleArray.forEach(eachEle => {
      if (eachEle.name === 'email') {
        emailSentFrom = eachEle.value;
      }
      else if (eachEle.name === 'name') {
        msgName = eachEle.value;
      }
      else {
        emailBody = eachEle.value;
      }
    });
    sendMessangeToRecipient(msgName, emailSentFrom, emailBody)
  }
}







var closeMsgEle = document.getElementsByClassName('closeMsg');

let closeMsgEleArray = Array.of(...closeMsgEle);
closeMsgEleArray.forEach(eachEle => {
  eachEle.addEventListener('click',onClickClose);
});

function onClickClose(e){
  e.srcElement.parentElement.style.display = "none"
}






document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
         document.getElementById('loadingIcon').style.display="none";
  }
}


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