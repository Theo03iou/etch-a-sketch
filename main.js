const divContainer = document.querySelector('#container'); // Targets the container
const div = document.createElement('div'); // Creates an individual div.

div.setAttribute("class", "gridDiv") // Sets the class of gridDiv to the JS generated div.
let gridSize = prompt("enter the size of the array")

for (let i = 1; i <= (gridSize); i++) { // Creates 16 divs
    divContainer.appendChild(div.cloneNode(true));
}

const gridDiv = document.querySelectorAll(".gridDiv");



// gridDiv.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
//   }); 

  gridDiv.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      e.target.style.background = 'red';
    });
  });

// gridDiv.addEventListener("mouseover", addColour);

// divContainer.addEventListener("mouseover", addColour);

// function addColour(e) {
//     e.preventDefault;
//     console.log("yguyguig");
//     // gridDiv[e].classList.add("coloured")
//     gridDiv.style.color = 'blue'; 
    
// }

