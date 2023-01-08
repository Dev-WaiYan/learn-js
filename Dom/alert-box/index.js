function clickButton(type) {
  const alertBoxContainer = document.getElementById("alertBoxContainer");

  alertBoxContainer.style.display = "flex";

  switch (type) {
    case "success":
      processForAlert("Success", "success");
      break;

    case "danger":
      processForAlert("Danger", "danger");
      break;

    case "warning":
      processForAlert("Warning", "warning");
      break;

    case "info":
      processForAlert("Info", "info");
      break;

    default:
      window.alert("Not Supported.");
      break;
  }
}

const alertContent = document.getElementById("alertContent");
const alertBox = document.getElementById("alertBox");

function processForAlert(content, className) {
  alertContent.innerText = content;
  alertBox.className = `alertBox ${className}`;

  setTimeout(function hide() {
    alertBoxContainer.style.display = "none";
  }, 3000);
}
