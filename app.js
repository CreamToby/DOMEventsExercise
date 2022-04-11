// DOM Events Exercise
// 1a. 
const button1 = document.querySelector(`#one`);

// 1b. 
button1.onclick = () => {
    alert(`You clicked the first button! Congrats!`);
}

// 2a. 
const h3 = document.querySelector(`h3`);

// 2b. 
h3.addEventListener(`mouseleave`, () => {
    alert(`You hovered over the h3 element! Congrats!`);
})

// 3a. 
const form = document.querySelector(`form`);

// 3b. 
form.addEventListener(`submit`, () => {
    alert(`${form.elements.entry.value}`);
})

// BONUS
// 4a. 
const darkMode = document.querySelector(`#dm`);

// 4b. 
const elements = document.querySelector(`body`);
// const elements = document.querySelector(`*`);
darkMode.addEventListener(`click`, function() {
    elements.classList.toggle(`dark-mode`);
})

// 5a. 
const times = document.querySelector(`#times`);

// 5b. 

var count = 0;
times.addEventListener(`click`, () => {
    count ++;
    if (count <= 2) {
        alert(`You clicked the last button! Congrats!`);
    } else if (count === 3) {
        alert(`OH NO! This button is NOT going to work anymore`);
    }else {
        return false;
    }
})
    