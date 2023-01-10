console.log("Fesfsaf");

const divContainer = document.querySelector('#container');


const div = document.createElement('div');
div.setAttribute("class", "gridDiv")




for (let i = 0; i <= 15; i++) {
    divContainer.appendChild(div.cloneNode(true));
}


