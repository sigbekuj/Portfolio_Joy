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
 
// Get a reference to the button with the ID 'getBtn'
const getBtn = document.getElementById('getBtn');
 
// Create an object with user details
 
const myObjects = {
  name:"Joe Bloggs",
  age:35,
  city: "Liverpool",
  imageURL: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700524800&semt=sph"
 
};
console.log(myObjects);
//Before putting it into localStorage or sending it online,
// you need to convert it into a flat note (string).

//JSON.stringify() does — it turns your object into a string.
// Save the object to localStorage as a JSON string
localStorage.setItem("myObjects", JSON.stringify(myObjects));
 
// Variable to track if the card has already been created
let userCard  = null;
 
// Function to generate and display the user card
const generateCard = ()=> {
 
 
  // Only create the card if it hasn't been created already
  if (userCard == null){
 
 
 
    // When you get that (string) back from storage or a server, you need to turn it back into your original box (object).
    // JSON.parse() converts that string back into a JavaScript object so you can use it.
    // Retrieve and parse the object from localStorage
    let parsedObject = JSON.parse(localStorage.getItem("myObjects"));
    // console.log(parsedObject);
    // Create a new div to act as the user card
    userCard = document.createElement('div');
       
   
    // Create an image element for the user photo
    let userImage = document.createElement('img');
 
   
   
    // Create a paragraph element to hold the user details
    let userDetails =  document.createElement('p');
   
   
    // Append image and paragraph to the card div
    userCard.append(userImage, userDetails);
   
   
    // Set the image source from the parsed data
    userImage.setAttribute('src', parsedObject.imageURL);
 
   
    // Set the inner text of the paragraph with the user info
    userDetails.innerText = `Name: ${parsedObject.name}\nAge: ${parsedObject.age}\nCity: ${parsedObject.city}`;
   
    // Append the card to the document body
    document.body.append(userCard);
 
  }
}
 
 
// Add a click event listener to the button that calls generateCard
getBtn.addEventListener('click', generateCard);
 