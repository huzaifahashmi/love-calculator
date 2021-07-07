let percentAge = Math.floor(Math.random() * 100) + 1;
let myName = document.querySelector(".inputOne");
let loverName = document.querySelector(".inputTwo");
let modalBody = document.querySelector(".modal-body");
let checkLove = document.querySelector(".btn-danger");
checkLove.addEventListener("click", () => {
  if (!myName.value == "") {
    modalBody.textContent = `The love between ${myName.value} and ${loverName.value} is %`;
  }
  if (myName && loverName) {
    let percentAge = Math.floor(Math.random() * 100) + 1;
    modalBody.textContent = `The love between ${myName.value} and ${loverName.value} is ${percentAge}%`;
  }
});
