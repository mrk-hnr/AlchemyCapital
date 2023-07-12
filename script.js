const elOne = document.querySelector('.hoverOne');
const elTwo = document.querySelector('.hoverTwo');
const elThree = document.querySelector('.hoverThree');
const elFour = document.querySelector('.hoverFour');

const hiddenDivOne = document.querySelector('.hideMeOne');
const hiddenDivTwo = document.querySelector('.hideMeTwo');
const hiddenDivThree = document.querySelector('.hideMeThree');
const hiddenDivFour = document.querySelector('.hideMeFour');

// ✅ Show hidden DIV on hover
// HIDES CONTENT 1
elOne.addEventListener('mouseover', function handleMouseOver() {
    hiddenDivOne.style.display = 'block'; })

elOne.addEventListener('mouseout', function handleMouseOut() {
    hiddenDivOne.style.display = 'none'; })

// HIDES CONTENT 2
elTwo.addEventListener('mouseover', function handleMouseOver() {
    hiddenDivTwo.style.display = 'block'; })

elTwo.addEventListener('mouseout', function handleMouseOut() {
    hiddenDivTwo.style.display = 'none'; })
        
// HIDES CONTENT 3
elThree.addEventListener('mouseover', function handleMouseOver() {
    hiddenDivThree.style.display = 'block'; })

elThree.addEventListener('mouseout', function handleMouseOut() {
    hiddenDivThree.style.display = 'none'; })
        
// HIDES CONTENT 4
elFour.addEventListener('mouseover', function handleMouseOver() {
    hiddenDivFour.style.display = 'block'; })

elFour.addEventListener('mouseout', function handleMouseOut() {
    hiddenDivFour.style.display = 'none'; })

    