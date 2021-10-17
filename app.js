// For set the number max of sides must be (max + 1).
const max = 7;
const min = 1;

let diceSide = () => {
    return Math.floor(Math.random() * (max - min) + min);
};

const selectSide = document.querySelectorAll('.side');

let showSide = () => {
    addEventListener('click', diceSide)
    console.log('Side: ' + diceSide());
    for (let i = 0; i <= 5; i++) {
        selectSide[i].classList.remove("show");
    }
    selectSide[diceSide() - 1].classList.add("show");
}

showSide()