



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(10));
console.log(window.innerWidth);
const buttonHeight = 1;
const buttonWidth = 1;








window.addEventListener('DOMContentLoaded', () => {
  const maxWidth = 79 - buttonHeight;
  const maxHeight = 100 - buttonHeight;
  const btnSecond = document.querySelector(".btn-second");
  btnSecond.addEventListener('mouseover', () => {
    btnSecond.style.left = getRandomInt(10) * (maxWidth + 1) + 'px';
    btnSecond.style.top = getRandomInt(10) * (maxHeight + 1) + 'px';
  })
})
