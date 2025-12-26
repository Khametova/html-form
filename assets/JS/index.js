`use strict`;

const form = document.querySelector(".reg-form");

form.onsubmint = (e) => {
  console.log("Send Form");
  e.preventDefault();
};
