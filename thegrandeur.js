const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('fa-bars');
            hamburger.classList.add('fa-times');
        } else {
            hamburger.classList.remove('fa-times');
            hamburger.classList.add('fa-bars');
        }
    });

    const navLinks = document.querySelectorAll('.home-contact a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('fa-times');
            hamburger.classList.add('fa-bars');
        });
    });




    document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const statusDiv = document.getElementById("formStatus");
  const button = this.querySelector("button");
  
  statusDiv.innerHTML = '<p style="color: orange;">Sending...</p>';
  button.disabled = true;

  fetch("https://formspree.io/f/mbdypwky", {
    method: "POST",
    body: new FormData(this),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      statusDiv.innerHTML = '<p style="color: green;">Thanks for your message! Akintunde will get back to you shortly.</p>';
      this.reset();
      

      setTimeout(() => {
        statusDiv.innerHTML = '';
      }, 5000);
    } else {
      statusDiv.innerHTML = '<p style="color: red;">Something went wrong. Please try again.</p>';
    }
    button.disabled = false;
  })
  .catch(error => {
    statusDiv.innerHTML = '<p style="color: red;">Something went wrong. Please try again.</p>';
    button.disabled = false;
  });
});





let currentSlide = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}


setInterval(() => {
    changeSlide(1);
}, 3000);
