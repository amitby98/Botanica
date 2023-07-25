const userInput = $("#username");
const passwordInput = $("#password");

$("form").on("submit", e => {
  e.preventDefault();
  console.log(userInput.val());
  const username = userInput.val();
  const password = passwordInput.val();

  console.log({ username, password });

  $.post("api/users/login", { username, password }, () => {
    console.log("user found");
  });
});

function show() {
  document.getElementById("zero").style.display = "inline-block";
  document.getElementById("aa").style.display = "inline-block";
}

function hide() {
  document.getElementById("zero").style.display = "none";
  document.getElementById("aa").style.display = "none";
}
