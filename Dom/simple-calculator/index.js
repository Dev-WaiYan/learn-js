const displayBox = document.getElementById("displayBox");

function btnPress(value) {
  console.log(`Value => ${value}`);
  displayBox.value += value;
}

function allClear() {
  displayBox.value = "";
}

function del() {
  displayBox.value = displayBox.value.slice(0, -1);
}

// function calculate(){
//     displayBox.value
// }
