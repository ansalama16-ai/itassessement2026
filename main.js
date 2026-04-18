let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');

function showSlide(index) {
  if (!slides.length) return;

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

function goToSlide(index) {
  showSlide(index);
}

if (slides.length) {
  setInterval(() => changeSlide(1), 5000);
}

const contactForm = document.getElementById('contactForm');

if (contactForm){
  window.submitContactForm = function(){
    let valid = true;
    function setError(fieldId, msgId, message){
      const field = document.getElementById(fieldId);
      const msg = document.getElementById(msgId);

      if (!message){
        field.classList.remove('error');
        msg.style.display = 'none';
        msg.textContent = '';
      } else {
        field.classList.add('error');
        msg.style.display = 'block';
        msg.textContent = message;
        valid = false;
      }
    }

    const allFields = ['fname', 'lname', 'email', 'platform', 'adventureRank','message'];
    allFields.forEach(id=> {
      const f = document.getElementById(id);
      const m = document.getElementById(id + 'Error');
      if (f) f.classList.remove('error');
      if (m) {m.style.display = 'none'; m.textContent = '';}
    });

    const fname = document.getElementById('fname').value.trim();
    if (!fname) setError('fname', 'fnameError', 'Please enter your first name.');
    else if (fname.length < 2) setError('fname', 'fnameError', 'Name must be at least 2 characters.');

    const lname = document.getElementById('lname').value.trim();
    if (!lname) setError('lname', 'lnameError', 'Please enter your last name.');

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) setError('email', 'emailError', 'Please enter your email address.');
    else if (!emailPattern.test(email)) setError('email', 'emailError', 'Please enter a valid email.');

    const platform = document.getElementById('platform').value;
    if (!platform) setError('platform', 'platformError', 'Please select your platform.');

    const rank = document.getElementById('adventureRank').value;
    if (rank !== '' && (isNaN(rank) || rank < 1 || rank > 60)){
      setError('adventureRank', 'adventureRankError', 'Adventure Rank must be between 1 and 60.');
    }

    const message = document.getElementById('message').value.trim();
    if (!message) setError('message', 'messageError', 'Please write a message.');
    else if (message.length < 10) setError('message', 'messageError', 'Message must be at least 10 characters.');

    if (valid) {
      document.getElementById('contactForm').style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
    }
  };
}