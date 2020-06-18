/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE: TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */


function updateText() {

  var inputText = document.getElementById("text-input").value;
  var outputElement = document.getElementById("text-output");
  outputElement.innerText = inputText;
}

/**
 * Toggle the bold class for the output text--- done 
 * HINT: Use the onclick function insite HTML--done
 * HINT: Look into using this keyword--done
 * HINT: Use the classList property- done
 * HINT: Toggle .active class for the button---done
 */
function makeBold(elem) {
  elem.classList.toggle('active');
  document.getElementById("text-output").classList.toggle('bold');

}

/**
 * Toggle the italic class for the output text---  done
 */
function makeItalic(elem) {
  elem.classList.toggle('active');
  document.getElementById("text-output").classList.toggle('italic');

}

/**
 * Toggle the underline class for the output text---done
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
  elem.classList.toggle('active');
  document.getElementById("text-output").classList.toggle('underline')
}

/**
 * Toggle the style textAlign attribute--
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */

function alignText(elem, alignType) {
  // CODE GOES HERE

  document.getElementById('text-output').style.textAlign = alignType;
  let butttonsList = document.getElementsByClassName('align');
  for (let i = 0; i < butttonsList.length; i++) {
    butttonsList[i].classList.remove('active');
  }

  elem.classList.toggle('active');
  //document.getElementById('text-output')
}


