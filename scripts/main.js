let myHeading = document.querySelector("h1");
myHeading.textContent = "friend, hang out with me";

let myImage = document.getElementById('my-bnnuy');
let myButton = document.querySelector("button");

myButton.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://i.ibb.co/DgQ5mSph/teacup-bunny.jpg") {
    myImage.setAttribute("src", "images/teacup-bunny.jpeg");
  } else {
    myImage.setAttribute("src", "https://i.ibb.co/DgQ5mSph/teacup-bunny.jpg");
  }
}; 

function displayBnnuy() {
  const image = document.getElementById('my-bnnuy');
  image.style.display = 'block';
  // Check if the text already exists to avoid duplicates
  if (!document.getElementById("bnnuy-text")) {
    var text = document.createElement("p");
    text.id = "bnnuy-text"; // Assign an ID for future reference
    text.innerText = "enter on the right side of house <br> up the scary back stairs";
    document.body.appendChild(text); // Append the text to the body
}
};

// Event listener for button click to display image
document.getElementById('bnnuy-button').addEventListener('click', function() {
  displayBnnuy();
});

// Separate function for myInvite button
function setUserName() {
  let myName = prompt('Enter your name:');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = myName + ', hang out with me XD';
  }
}

// Call setUserName function when the page loads
window.onload = function() {
  setUserName();
};