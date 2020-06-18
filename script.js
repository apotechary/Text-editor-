

function updateText() {

  var inputText = document.getElementById("text-input").value;
  var outputElement = document.getElementById("text-output");
  outputElement.innerText = inputText;
}


function makeBold(elem) {
  elem.classList.toggle('active');
  document.getElementById("text-output").classList.toggle('bold');

}

function makeItalic(elem) {
  elem.classList.toggle('active');
  document.getElementById("text-output").classList.toggle('italic');

}


function makeUnderline(elem) {
  elem.classList.toggle('active');
  document.getElementById("text-output").classList.toggle('underline')
}



function alignText(elem, alignType) {


  document.getElementById('text-output').style.textAlign = alignType;
  let butttonsList = document.getElementsByClassName('align');
  for (let i = 0; i < butttonsList.length; i++) {
    butttonsList[i].classList.remove('active');
  }

  elem.classList.toggle('active');
  //document.getElementById('text-output')
}


