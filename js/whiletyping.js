const inputs = document.querySelectorAll(".input-i");
const values = document.querySelectorAll(".value-v");

console.log("inputs", inputs);
console.log("values", values);

console.log(inputs[0]);
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", (event) => {
    const result = document.querySelector(".result");
    values[i].innerHTML = event.target.value;
  });
}
