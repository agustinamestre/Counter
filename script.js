const add = document.getElementById("increment");
const remove = document.getElementById("decrement");
const int = document.getElementById("number");

let integer = 0;

add.addEventListener("click", function () {
  integer += 1;
  int.innerHTML = integer;
})

remove.addEventListener("click", function () {
  integer -= 1;
  int.innerHTML = integer;
})