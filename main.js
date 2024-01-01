let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

toggle.onclick = () => {
  menu.classList.toggle("active");
};

for (let i = 1; i <= 4; i++) {
  let asterisks = "*".repeat(i);
  console.log(asterisks);
}
