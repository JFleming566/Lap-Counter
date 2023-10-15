let counter = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");

function increment () {
    counter += 1;
    countEl.textContent = counter;
}

function save () {
    let countIndex = counter + " - ";
    saveEl.textContent += countIndex;
    counter = 0;
    countEl.textContent = counter;
    
}

