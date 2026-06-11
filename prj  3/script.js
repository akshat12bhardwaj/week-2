const div_1 = document.querySelector(".active-1");
const div_2 = document.querySelector(".active-2");

div_1.classList.toggle("form-mode");
div_2.classList.toggle("dark-green-mode");

const div_3 = document.querySelector("div:nth-child(3)");
const div_4 = document.querySelector("div:nth-child(4)");

const btn_1 = document.querySelector(".change-1");
const btn_2 = document.querySelector(".change-2");

btn_1.addEventListener("click", () => {
  div_1.className = "disable-down";
  div_2.className = "disable-down";

  div_3.className = "active-2";
  div_4.className = "active-1";

  div_4.classList.toggle("form-mode-inverse");
  div_3.classList.toggle("dark-green-mode-inverse");
});

btn_2.addEventListener("click", () => {
  div_1.className = "active-1";
  div_2.className = "active-2";
  div_1.classList.toggle("form-mode");
  div_2.classList.toggle("dark-green-mode");
  div_3.className = "disable-up";
  div_4.className = "disable-up";
});
