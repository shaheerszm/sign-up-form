const pwd = document.querySelector('#password');
const pwd_c = document.querySelector('#password-check');
const pwd_error = document.querySelector('#password-error');
const inputs = document.querySelectorAll("input");

pwd_c.addEventListener("input", function (event) {
  if (pwd.value !== pwd_c.value) {
    pwd_error.style.visibility = 'visible';
  } else {
    pwd_error.style.visibility = 'hidden';
  }
});

inputs.forEach(input => {
  input.addEventListener("invalid", event => {
      input.classList.add("error");
    },
    false
  );
});