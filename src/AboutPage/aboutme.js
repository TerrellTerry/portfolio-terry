function bodyOverflow(){
    document.body.style.overflow = 'visible';
}

bodyOverflow();

const text = document.getElementById('text');
const button = document.getElementById('right-button');

button.addEventListener('click', () => {
    console.log("Clicked button");
  text.classList.add('slide'); // add the "slide" class to the text element
  setTimeout(() => {
    text.style.display = 'none'; // hide the text element after the transition
  }, 500); // set timeout to match the transition duration
});