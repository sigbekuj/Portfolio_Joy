// DarkLight Mode Logic

// Select the toggle button
const toggleThemeBtn = document.getElementById('toggleThemeBtn');

// Function to read from localStorage and apply the appropriate theme
const applyStoredTheme = () => {
    // Get saved theme or default to "light"
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Clear any previously applied theme class
    document.body.classList.remove('light-theme', 'dark-theme');

    // Apply the saved theme
    document.body.classList.add(`${savedTheme}-theme`);

    // Update the toggle button text to reflect current theme
    toggleThemeBtn.textContent =
        savedTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
};

// When the button is clicked, toggle theme and save new value
toggleThemeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    const newTheme = isDark ? 'light' : 'dark';

    // Save new theme to localStorage
    localStorage.setItem('theme', newTheme);

    // Apply updated theme
    applyStoredTheme();
});

// Apply theme as soon as the DOM is ready
document.addEventListener('DOMContentLoaded', applyStoredTheme);

// Note: JSON (JavaScript Object Notation) is a way to store and send data
//  in a format that looks like text, but is structured like an object.
 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark')
  navbar.classList.toggle('active')

}

let setion = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height){
      navLinks.forEach.apply(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ']').classLists.add('active');
      });
    };
  });


let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('fa-xmark');
navLinks.classList.remove('active');
 
};

    
/*=================scroll reveal ==============*/

ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,

});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('home-img,skill li, .contact form', {origin: 'button'});
ScrollReveal().reveal('.home-contact h1 .about-img', { origin: 'left'});
ScrollReveal().reveal('home-contact p, .about-content' ,{ origin: 'right'});

/*=======contact form========*/

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
