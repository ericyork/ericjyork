function show() {
  let btnText = document.getElementById('btn-text');
  let container = document.getElementById('m-container');
  let content = document.getElementById('m-content');
  container.classList.toggle('clicked');
  content.classList.toggle('open');
  if (content.classList.contains('open')) {
    btnText.innerText = "CLOSE";
  } else {
    btnText.innerText = "SEE ALL";
  }
}
function extend(id) {
  let container = id;
  container.classList.toggle('extended');
  let button = container.nextElementSibling;
  button.classList.toggle('toggled');
  let buttonText = button.firstElementChild;
  if (container.classList.contains('extended')) {
    button.classList.add('hovered');
    buttonText.innerText = "LESS";
  } else {
    button.classList.remove('hovered');
    buttonText.innerText = "MORE";
  }
  console.log(buttonText);
}

// let expanders = document.getElementsByClassName("expander"); // selects all expandable elements
// let i; // loop counter
// for (i = 0; i < expanders.length; i++) { // loops through the array
//   expanders[i].addEventListener("click", function() { // attaches the click handler to an anonymous function
//     let tog = this.childNodes[1].classList.toggle("opened"); // adds .opened to change :after element
//     let content = this.childNodes[1].nextElementSibling; // selects content elements
//     content.classList.toggle("show"); // toggles .show on contents
//     this.classList.toggle("expanded"); // toggles .expanded on entire element
//   });
// }