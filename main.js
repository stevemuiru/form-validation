document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const email = document.getElementById("email");
  const country = document.getElementById("country");
  const zipcode = document.getElementById("zipcode");
  const password = document.getElementById("password");
  const passwordConfirm = document.getElementById("password-confirmation");

  const validateEmail = () => {
    if (!email.validity.valid) {
      showError(email, "Please enter a valid email");
    } else {
      showSuccess(email);
    }
  };

  const validateCountry = () => {
    if (country.value.trim() === "") {
      showError(country, "Country cannot be empty");
    } else {
      showSuccess(country);
    }
  };

  const validateZipcode = () => {
    const regex = /^[0-9]{5}$/;
    if (!regex.test(zipcode.value.trim())) {
      showError(zipcode, "Please enter a valid zip code.");
    } else {
      showSuccess(zipcode);
    }
  };

  const validatePassword = () => {
    if (password.value.length < 8) {
      showError(password, "Password must be at least 8 characters");
    } else {
      showSuccess(password);
    }
  };

  const validatePasswordConfirm = () => {
    if (passwordConfirm.value !== password.value) {
      showError(passwordConfirm, "Passwords do not match");
    } else {
      showSuccess(passwordConfirm);
    }
  };

  function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
  }

  function showSuccess(input) {
    const error = input.nextElementSibling;
    error.textContent = "";
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
  }

  email.addEventListener("blur", validateEmail);
  country.addEventListener("blur", validateCountry);
  zipcode.addEventListener("blur", validateZipcode);
  password.addEventListener("blur", validatePassword);
  passwordConfirm.addEventListener("blur", validatePasswordConfirm);

  form.addEventListener("submit", (e) => {
    validateEmail();
    validateCountry();
    validateZipcode();
    validatePassword();
    validatePasswordConfirm();

    const errors = form.querySelectorAll(".is-invalid");
    if (errors.length > 0) {
      e.preventDefault();
      alert("Please fix the errors before submitting.");
    } else {
      alert("High five! Form submitted successfully.");
    }
  });
});
