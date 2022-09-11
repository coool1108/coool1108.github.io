let button = document.querySelector("button");
let intColorNumber = 1;
button.addEventListener("click", (e) => {
  let body = document.querySelector("body");
  switch (intColorNumber) {
    case 0:
      body.style.backgroundColor = "White";
      break;

    case 1:
      body.style.backgroundColor = "Red";
      break;

    case 2:
      body.style.backgroundColor = "Orange";
      break;

    case 3:
      body.style.backgroundColor = "Yellow";
      break;

    case 4:
      body.style.backgroundColor = "Green";
      break;

    case 5:
      body.style.backgroundColor = "Blue";
      break;

    case 6:
      body.style.backgroundColor = "Purple";
      intColorNumber = -1;
      break;

    default:
      break;
  }
  intColorNumber++;
});
