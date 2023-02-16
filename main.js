let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let box = document.querySelector(".color");
let arrOfColor = [];

for (let i = 0; i < 6; i++) {
  let randomHex = arr[Math.floor(Math.random() * arr.length)];
  arrOfColor.push(randomHex);
}
let hexColor = `#${arrOfColor.join("")}`;
box.style.backgroundColor = hexColor;
