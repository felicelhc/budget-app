function forgotPassword() {
  let firstName = prompt("What is your name?");
  let forgot = prompt("What is your registered email address?");
  alert(
    `Thank you, ${firstName}. The recovery code will be sent to ${forgot}.`
  );
}
let forgotPasswordButton = document.querySelector("#forgotPassword");
forgotPasswordButton.addEventListener("click", forgotPassword);

