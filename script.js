//form functionality

const waitlistForm = document.querySelector('.waitlist-form');
const waitlistContainer = document.querySelector('.waitlist-container');
const joinWaitlistBtn = document.querySelector('.join-waitlist-btn, #join-waitlist-btn-1');
const closeFormBtn = document.querySelector('.close-form');
const form = document.querySelector('.form-1');
const waitlistAnim = document.querySelector('.waitlist-anim');


function activeForm() {
   waitlistForm.classList.add('active');
   waitlistContainer.classList.add('waitlist-container-active');
  //  waitlistContainer.classList.add('animate__animated', 'animate__bounceIn');
  //  waitlistContainer.classList.remove('animate__animated', 'animate__bounceOut');

   closeFormBtn.addEventListener('click', () => {

    //  waitlistContainer.classList.add('animate__animated', 'animate__bounceOut');
     setTimeout(function () {
       waitlistForm.classList.remove('active');
       waitlistContainer.classList.remove('waitlist-container-active');
     }, 50);

   });

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxLg_F_yz7wpNusIuUfmGuWlEfHaHds98zD_zZsG3I9htI9YmUkNpKLPyi0uUMhsgl5mg/exec'
const form1 = document.forms['form-1'];
const form2 = document.forms['footer-form'];
const success = document.querySelector('.success');
const none = document.querySelector('.none');
const none1 = document.querySelector('.none1');
const formSuccess = document.querySelector('.form-success');
const danger = document.querySelector('.danger');
const success1 = document.querySelector('.success1');
const danger1 = document.querySelector('.danger1');

function reload() {
  window.location.reload();
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

form1.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form1) })
    //    .then(response => alert("Thank you! your form is submitted successfully." ))

    .then(() => {
      // success.classList.add('success-active');
      none.classList.add('d-none');
      none1.classList.add('d-none');
      formSuccess.classList.add('form-success-active');
      // return delay(1000);
    })
    // .then(() => { waitlistForm.classList.remove('active'); })
    //.then(() => { window.location.reload(); })
    .catch(error => { console.log(error); danger.classList.add('danger-active'); })
})


form2.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form2) })
    //    .then(response => alert("Thank you! your form is submitted successfully." ))

    .then(() => {
      success1.classList.add('success1-active');
      return delay(1000);
    })
    // .then(() => { waitlistForm.classList.remove('active'); })
    .then(() => { window.location.reload(); })
    .catch(error => { console.log(error); danger1.classList.add('danger1-active'); })
})






//copy functionality
const successAlert = document.querySelector('.copy-success');
successAlert.classList.add('hidden');

function copyText() {
  const textToCopy = 'npm install --save-dev Deployo';
  const copyIcon = document.querySelector('.copy-icon');


  // Use the Clipboard API
  navigator.clipboard.writeText(textToCopy).then(() => {
    // Optionally, provide user feedback
    successAlert.classList.remove('hidden');
    copyIcon.classList.add('hidden');

    // alert('Copied to clipboard: ' + textToCopy);
  })
    .then(() => {
      setTimeout(function () {
        successAlert.classList.add('hidden');
        copyIcon.classList.remove('hidden');
      }, 1000);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
}


//video button

function togglePlay() {
  const video = document.getElementById('myVideo');
  const button = document.querySelector('.play-button');
  const pausebutton = document.querySelector('.pause-button');

  if (video.paused) {
    video.play();
    pausebutton.classList.add('pause-button-active'); // Update button text to 'Pause' when video is playing
    button.classList.add('play-button-passive');
  } else {
    video.pause();
    button.classList.remove('play-button-passive'); // Update button text to 'Play' when video is paused
    pausebutton.classList.remove('pause-button-active');
  }


}

function togglePlay2() {

  const video2 = document.getElementById('myVideo2');
  const button2 = document.querySelector('.play-button2');
  const pausebutton2 = document.querySelector('.pause-button2');

  if (video2.paused) {
    video2.play();
    pausebutton2.classList.add('pause-button-active'); // Update button text to 'Pause' when video is playing
    button2.classList.add('play-button-passive');
  } else {
    video2.pause();
    button2.classList.remove('play-button-passive'); // Update button text to 'Play' when video is paused
    pausebutton2.classList.remove('pause-button-active');
  }
}

function togglePlay3() {

  const video3 = document.getElementById('myVideo3');
  const button = document.querySelector('.play-button3');
  const pausebutton = document.querySelector('.pause-button3');

  if (video3.paused) {
    video3.play();
    pausebutton.classList.add('pause-button-active'); // Update button text to 'Pause' when video is playing
    button.classList.add('play-button-passive');
  } else {
    video3.pause();
    button.classList.remove('play-button-passive'); // Update button text to 'Play' when video is paused
    pausebutton.classList.remove('pause-button-active');
  }
}

function togglePlay4() {

  const video3 = document.getElementById('myVideo4');
  const button = document.querySelector('.play-button4');
  const pausebutton = document.querySelector('.pause-button4');

  if (video3.paused) {
    video3.play();
    pausebutton.classList.add('pause-button-active'); // Update button text to 'Pause' when video is playing
    button.classList.add('play-button-passive');
  } else {
    video3.pause();
    button.classList.remove('play-button-passive'); // Update button text to 'Play' when video is paused
    pausebutton.classList.remove('pause-button-active');
  }
}



//tab changing

function tabChange1() {
  const tabs = {
    tab1: document.querySelector('.tab-1'),
    tab2: document.querySelector('.tab-2'),
    tab3: document.querySelector('.tab-3')
  };

  const buttons = {
    tab1Btn: document.querySelector('.tab-1-btn'),
    tab2Btn: document.querySelector('.tab-2-btn'),
    tab3Btn: document.querySelector('.tab-3-btn')
  };

  // Function to update visibility and button active state
  function updateVisibility(visibleTab) {
    for (const [key, tab] of Object.entries(tabs)) {
      if (key === visibleTab) {
        tab.classList.add('visible');
        tab.classList.remove('hidden');
      } else {
        tab.classList.add('hidden');
        tab.classList.remove('visible');
      }
    }

    // Update button active state
    for (const [key, button] of Object.entries(buttons)) {
      if (key === `${visibleTab}Btn`) {
        button.classList.add('dashboard-button-active');
      } else {
        button.classList.remove('dashboard-button-active');
      }
    }
  }

  // Set default tab visibility and button active state
  updateVisibility('tab1');

  // Event listeners
  buttons.tab1Btn.addEventListener('click', () => {
    updateVisibility('tab1');
  });

  buttons.tab2Btn.addEventListener('click', () => {
    updateVisibility('tab2');
  });

  buttons.tab3Btn.addEventListener('click', () => {
    updateVisibility('tab3');
  });
}

// Call the function once when the page loads
document.addEventListener('DOMContentLoaded', tabChange1);


// Scroll Animation 


// document.addEventListener('DOMContentLoaded', () => {
//   const elements = document.querySelectorAll('.animate-on-scroll');

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {



      
//       if (entry.isIntersecting) {

//         if (entry.target.classList.contains('anim-1')) {
//           entry.target.classList.add('animate__animated', 'animate__fadeIn');
//           observer.unobserve(entry.target); // Optionally stop observing after animation
//         }

//         else if (entry.target.classList.contains('anim-2')) {
//           entry.target.classList.add('animate__animated', 'animate__fadeInUp');
//           observer.unobserve(entry.target); // Optionally stop observing after animation
//         }

//         else if (entry.target.classList.contains('anim-3')) {
//           entry.target.classList.add('animate__animated', 'animate__fadeInUp');
//           observer.unobserve(entry.target); // Optionally stop observing after animation
//         }

//         else if (entry.target.classList.contains('anim-4')) {
//           entry.target.classList.add('animate__animated', 'animate__fadeInUp');
//           observer.unobserve(entry.target); // Optionally stop observing after animation
//         }

//         else if (entry.target.classList.contains('anim-5')) {
//           entry.target.classList.add('animate__animated', 'animate__fadeInUp');
//           observer.unobserve(entry.target); // Optionally stop observing after animation
//         }

//         else if (entry.target.classList.contains('anim-6')) {
//           entry.target.classList.add('animate__animated', 'animate__fadeInUp');
//           observer.unobserve(entry.target); // Optionally stop observing after animation
//         }

//         else if (entry.target.classList.contains('anim-7')) {
//           entry.target.classList.add('animate__animated', 'animate__fadeInUp');
//           observer.unobserve(entry.target); // Optionally stop observing after animation
//         }

//         else if (entry.target.classList.contains('anim-8')) {
//           entry.target.classList.add('animate__animated', 'animate__fadeInUp');
//           observer.unobserve(entry.target); // Optionally stop observing after animation
//         }

//         else if (entry.target.classList.contains('anim-9') ||
//           entry.target.classList.contains('anim-10') ||
//           entry.target.classList.contains('anim-11') ||
//           entry.target.classList.contains('anim-12')) {
//           entry.target.classList.add('animate__animated', 'animate__fadeInUp');
//           observer.unobserve(entry.target); // Optionally stop observing after animation
//         }

//         else if (entry.target.classList.contains('tab-anim')) {
//           entry.target.classList.add('animate__animated', 'animate__fadeIn');
//           observer.unobserve(entry.target); // Optionally stop observing after animation
//         }


//       }
//     });
//   }, { threshold: 0.08 }); // Trigger when 10% of the element is visible

//   elements.forEach(element => {
//     observer.observe(element);
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  // Initially hide all elements
  elements.forEach(element => {
    element.classList.add('hidden1');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;

        // Remove the 'hidden' class to make the element visible
        target.classList.remove('hidden1');

        // Add the appropriate animation class
        if (target.classList.contains('anim-1')) {
          target.classList.add('animate__animated', 'animate__fadeIn');
        } else if (target.classList.contains('anim-2')) {
          target.classList.add('animate__animated', 'animate__fadeInUp');
        } else if (target.classList.contains('anim-3')) {
          target.classList.add('animate__animated', 'animate__fadeInUp');
        } else if (target.classList.contains('anim-4')) {
          target.classList.add('animate__animated', 'animate__fadeInUp');
        } else if (target.classList.contains('anim-5')) {
          target.classList.add('animate__animated', 'animate__fadeInUp');
        } else if (target.classList.contains('anim-6')) {
          target.classList.add('animate__animated', 'animate__fadeInUp');
        } else if (target.classList.contains('anim-7')) {
          target.classList.add('animate__animated', 'animate__fadeInUp');
        } else if (target.classList.contains('anim-8')) {
          target.classList.add('animate__animated', 'animate__fadeInUp');
        } else if (target.classList.contains('anim-9') ||
                   target.classList.contains('anim-10') ||
                   target.classList.contains('anim-11') ||
                   target.classList.contains('anim-12')) {
          target.classList.add('animate__animated', 'animate__fadeInUp');
        } else if (target.classList.contains('tab-anim')) {
          target.classList.add('animate__animated', 'animate__fadeIn');
        }
         else if (target.classList.contains('animTv')) {
          var tvImage = document.querySelector('.animTvImg');
          tvImage.classList.add('anim-tv');
          //  target.classList.add('anim-tv');
        }


        // Optionally stop observing after animation
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.08 }); // Trigger when 0.8% of the element is visible

  elements.forEach(element => {
    observer.observe(element);
  });
});



//Typewrite Effect 

document.addEventListener('DOMContentLoaded', function() {
  const element = document.getElementById('typewriter');
  const text = 'Seamless Integration. Unmatched Efficiency. Real Results.';
  let index = 0;
  const speed = 45; // Speed of typing in milliseconds

  function type() {
      if (index < text.length) {
          element.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, speed);
      }
      else {
        // Stop the blinking cursor after typing is complete
        element.classList.add('stop-blink');
    }
  }

  type();
});


//hover gradient border


document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the specified classes
  const elements = document.querySelectorAll(
      '.gradient-container-20, .gradient-container-21, .gradient-container-22, .gradient-container-23, .gradient-container-24, .gradient-container-25'
  );
  
  // Function to interpolate between two values
  const interpolate = (start, end, t) => start + (end - start) * t;
  
  // Animate gradient angle from startAngle to endAngle
  const animateGradient = (element, startAngle, endAngle, duration) => {
      let startTime;
      
      const animate = (time) => {
          if (!startTime) startTime = time;
          const progress = (time - startTime) / duration;
          const angle = interpolate(startAngle, endAngle, Math.min(progress, 1));
          element.style.background = `linear-gradient(${angle}deg, rgba(57, 89, 224, 0.5) 0%, rgba(147, 43, 228, 0.5) 18.5%, rgba(57, 89, 224, 0) 50%)`;
          
          if (progress < 1) {
              requestAnimationFrame(animate);
          }
      };
      
      requestAnimationFrame(animate);
  };

  // Check if the device width is less than 768px
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  if (isMobile) {
      // Automatically animate the gradient if on mobile
      elements.forEach(element => {
          // Start the gradient animation immediately
          animateGradient(element, 135, 250000, 4000000); // Adjust the duration as needed

          // Optional: Set up a continuous loop if desired
         // setInterval(() => {
          //    animateGradient(element, 135, 320, 20000);
          //}, 20000); // Adjust the interval as needed
      });
  } else {
      // Add event listeners for hover-based animation on larger devices
      elements.forEach(element => {
          // Handle mouseenter event to start the gradient animation
          element.addEventListener('mouseenter', () => {
              animateGradient(element, 135, 250000, 4000000); // Adjust the duration as needed
          });

          // Handle mouseleave event to revert the gradient
          element.addEventListener('mouseleave', () => {
              animateGradient(element, 135, 135, 5000); // Adjust the duration as needed
          });
      });
  }
});


//scroll to view 

let hasRun = false;


document.addEventListener('scroll', function() {
  const animatedDiv = document.querySelector('.animated-div');
  const scrollPosition = window.scrollY;
  const scale = Math.min(1, scrollPosition / 900); // Adjust the 500 to control the zoom effect
  // console.log(60 - scrollPosition / 10);
  
  // Update transform based on scroll position
  if (scrollPosition <= 310  && !hasRun){
    animatedDiv.style.transform = `perspective(1000px) rotateX(${30 - (scrollPosition / 200 * 20)}deg) scale(${1})`;
  }

  else {
    animatedDiv.style.transform = `none`;
  }

  if (scrollPosition >= 310){

    hasRun = true;
  }

});


