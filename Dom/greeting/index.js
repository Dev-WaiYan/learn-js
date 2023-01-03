function greet() {
  // DOM => Document Object Model
  const fullNameInput = document.getElementById("fullName");
  console.log("value => ", fullNameInput.value);
  console.log("datatype => ", typeof fullNameInput.value);

  const fullName = fullNameInput.value.trim();
  if (fullName === "") {
    alert("Please fill input.");
  } else {
    alert(`Hello, ${fullName}`);
  }
}
