function save() {
  showAlert("fail");
}

function showAlert(type) {
  const successAlert = document.getElementById("alertSuccess");
  const failAlert = document.getElementById("alertFail");
  let alert;

  if (type === "success") {
    alert = successAlert;
  } else if (type === "fail") {
    alert = failAlert;
  }

  alert.style.display = "initial";
  setTimeout(function () {
    alert.style.display = "none";
  }, 3000);
}
