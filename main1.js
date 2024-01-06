
var typed = new Typed("#portfolioText", {
  strings: ["Web Designer", "Web Developer", "Graphic Designer", "YouTuber"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  preStringTyped: function () {
    // Change text color dynamically before typing each string
    document.documentElement.style.setProperty('--text-color', getRandomColor());
  }
});
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// ==================== form validator ===========================================  //
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

// Adding event listeners to each input element
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// =======================================//


document.getElementById('writeMeBtn').addEventListener('click', function () {
  var emailAddress = 'yksaini0192@gmail.com'; // Replace with your actual email address
  var subject = 'Hello!'; // Replace with your desired subject

  var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject);

  // Open the default email client
  window.location.href = mailtoLink;
});

function openWhatsApp() {
  var phoneNumber = '918209068126'; // Replace with the actual phone number
  var whatsappLink = 'https://wa.me/' + phoneNumber;

  // Open WhatsApp in a new tab/window
  window.open(whatsappLink, '_blank');
}

function openMessenger() {
  var messengerLink = 'https://www.messenger.com/t/bhaiyogeshsaini'; // Replace with the actual Messenger link
  window.open(messengerLink, '_blank');
}

function openLinkedIn() {
  var linkedInProfileLink = 'https://www.linkedin.com/in/yogesh-kumar-saini-33a562245'; // Replace with the actual LinkedIn profile link
  window.open(linkedInProfileLink, '_blank');
}

function openInstagram() {
  var instagramProfileLink = 'https://www.instagram.com/_bhai_yogesh_'; // Replace with the actual Instagram profile link
  window.open(instagramProfileLink, '_blank');
}
function openAddressOnMap() {
  // Specified address
  var specifiedAddress = "https://maps.app.goo.gl/8zzFro2MAqEFgkmu5";

  // Open the URL in a new window
  window.open(specifiedAddress, '_blank');
}
//              form validation                          //

function validateForm() {
  // Get form elements
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var message = document.getElementById("message");

  // Get error elements
  var usernameError = document.getElementById("usernameError");
  var emailError = document.getElementById("emailError");
  var phoneError = document.getElementById("phoneError");
  var messageError = document.getElementById("messageError");

  // Reset previous errors
  usernameError.innerHTML = "";
  emailError.innerHTML = "";
  phoneError.innerHTML = "";
  messageError.innerHTML = "";

  // Validate username
  if (username.value.trim() === "") {
    usernameError.innerHTML = "Username is required";
    return false;
  }

  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    emailError.innerHTML = "Invalid email address";
    return false;
  }

  // Validate phone (optional)
  if (phone.value.trim() !== "") {
    var phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.value.trim())) {
      phoneError.innerHTML = "Phone number must be 10 digits";
      return false;
    }
  }

  // Validate message
  if (message.value.trim().length < 10) {
    messageError.innerHTML = "Message should be at least 10 characters long";
    return false;
  }

  // Form is valid
  return true;
}

//  ================== contect form send  ====================  //
const contactForm = document.getElementById('contactForm'),
  contactName = document.getElementById('username'),
  contactEmail = document.getElementById('email'),
  contactPhone = document.getElementById('phone'),
  contactSubject = document.getElementById('subject'),
  contactMessage = document.getElementById('message'),
  errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    contactPhone.value === '' ||
    contactMessage.value === '' ||
    contactSubject.value === ''
  ) {
    errorMessage.textContent = 'Please fill in all the input fields';
  } else {
    emailjs
      .sendForm('service_9l06cvf', 'template_pzo94uy', '#contactForm', 'nxWLsbc9BiQ5Cj5Cd')
      .then(
        () => {
          errorMessage.classList.add('color-first');
          errorMessage.textContent = 'Message sent ✔';
          setTimeout(() => {
            errorMessage.textContent = '';
          }, 5000);
        },
        (error) => {
          alert('Oops! SOMETHING WENT WRONG...', error);
        }
      );

    // Clear input fields
    contactName.value = '';
    contactEmail.value = '';
    contactPhone.value = '';
    contactMessage.value = '';
    contactSubject.value ='';
  }
};

contactForm.addEventListener('submit', sendEmail);