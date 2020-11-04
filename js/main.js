const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form["name"].value;
  const lastname = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (!name) {
    displayAlert("name", "First name cannot be empty");
  } else {
    removeAlert("name");
  }

  if (!lastname) {
    displayAlert("lastname", "Last name cannot be empty");
  } else {
    removeAlert("lastname");
  }

  if (!email) {
    displayAlert("email", "Email cannot be empty");
  } else if (!emailIsValid(email)) {
    displayAlert("email", "Looks like this is not an email");
  } else {
    removeAlert("email");
  }

  if (!password) {
    displayAlert("password", "Password cannot be empty");
  } else if (password.length < 6) {
    displayAlert("password", "The password it's too short");
  } else {
    removeAlert("password");
  }
});

function displayAlert(input, error) {
  const formInput = form[input].parentNode;
  formInput.classList.add("error");

  const span = formInput.querySelector("span");
  span.innerText = error;
}

function removeAlert(input) {
  const formInput = form[input].parentNode;
  formInput.classList.remove("error");

  const span = formInput.querySelector("span");
  span.innerText = "";
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
