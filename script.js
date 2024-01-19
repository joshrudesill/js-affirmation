onReady();

let fireCount = 0;
let iceCount = 0;

function onReady() {
  console.log("Javascript is working!");
}

function addEmoji(emoji) {
  let divElement = document.getElementById("emoji_space");
  if (emoji === "fire") {
    fireCount++;
    divElement.textContent += "🔥";
  } else {
    iceCount++;
    divElement.textContent += "❄️";
  }
}

function addAffirmation(event) {
  event.preventDefault();
  let tableElement = document.querySelector("tbody");
  let affirmation = document.getElementById("affirmation");
  let author = document.getElementById("author");

  if (fireCount > iceCount) {
    tableElement.innerHTML += `
    <tr>
      <td>${affirmation.value}</td>
      <td>${author.value}</td>
      <td>
        <button onclick="deleteRow(event)">❌</button>
      </td>
    </tr>
  `;
  } else {
    alert("Fire must be greater than ice to add an affirmation!");
  }
  affirmation.value = "";
  author.value = "";
}
function deleteRow(event) {
  if (iceCount > fireCount) {
    event.target.parentElement.parentElement.remove();
  } else {
    alert("Ice must be greater than fire to delete an affirmation!");
  }
}
// Add on click to fire and ice buttons
// both will be a function that:
// gets the div
// adds +1 to a global counter that counts both fire and ice
// appends either fire or ice to the div

// add onsubmit listener
// It will lead to a function that:
// event.preventDefault()
// get the table element
// get the data from the form
// adds a row to the affirmations table with a button that deletes it
//<tr>
//<td>You probably got this!</td>
//<td>Oscar</td>
//</tr>
//clear the form - .value = ''

// the delete button will have an event listener that:
// gets the row element
// removes it
// both will also check that there are more fire than ice etc
