console.log("hello from App file");

const add = document.querySelector(".add");
add.addEventListener("click", () => {
  fetch("/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
});
