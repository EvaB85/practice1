
//grab them all
//passing in css selector = .shape--one
let shapeOne = document.querySelector('.shape--one');
console.log(shapeOne);
let shapeTwo = document.querySelector('.shape--two');
let shapeThree = document.querySelector('.shape--three');
let shapeFour = document.querySelector('.shape--four');
let shapeFive = document.querySelector('.shape--five');

let countOne = 0;
let countTwo = 0;
let countThree = 0;
let countFour = 0;
let countFive = 0;

shapeOne.addEventListener('click', () => {
  countOne++;
  document.querySelector('.span--one').textContent = countOne;
});

shapeTwo.addEventListener('click', () => {
  countTwo++;
  document.querySelector('.span--two').textContent = countTwo;
});

shapeThree.addEventListener('click', () => {
  countThree++;
  document.querySelector('.span--three').textContent = countThree;
});

shapeFour.addEventListener('click', () => {
  countFour++;
  document.querySelector('.span--four').textContent = countFour;
});

shapeFive.addEventListener('click', () => {
  countFive++;
  document.querySelector('.span--five').textContent = countFive;
})
