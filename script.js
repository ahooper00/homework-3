const upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
const lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
const numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialArray = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", generate);

function generate() {
  var password = generateString();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function askYesOrNoQuestion(question) {
  while (true) {
    var input = prompt(question);
    if (input === "yes" || input === "no") {
      return input;
    } else {
      alert("Please enter a valid answer");
    }
  }
}

function getPasswordLength() {
  while (true) {
    var input = prompt("How many characters would you like? (Must be between 8 and 128 characters)");
    if (input >= 8 && input <= 128) {
      return input;
    } else {
      alert("Please enter a number between 8 and 128")
    }
  }
}

function generateString() {
  let result = '';
  const length = getPasswordLength();
  const numeric = askYesOrNoQuestion("Would you like numeric characters?");
  const upper = askYesOrNoQuestion("Would you like upper case characters?");
  const lower = askYesOrNoQuestion("Would you like lower case characters?");
  const special = askYesOrNoQuestion("Would you like special characters?");

  let characterChoices = [];
  if (numeric === "yes") {
    characterChoices = characterChoices.concat(numericArray)
  }
  if (upper === "yes") {
    characterChoices = characterChoices.concat(upperArray)
  }
  if (lower === "yes") {
    characterChoices = characterChoices.concat(lowerArray)
  }
  if (special === "yes") {
    characterChoices = characterChoices.concat(specialArray)
  }
  if (special === "no" && lower === "no" && upper === "no" && numeric === "no") {
    alert("Must select at least one numeric, uppercase, lowercase, or special character")
    return '';
  }

  console.log(characterChoices);

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characterChoices.length);
    const char = characterChoices[index];
    result += char;
  }
  return result;
}
