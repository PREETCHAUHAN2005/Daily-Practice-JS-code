let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("btn1 was clicked");
//   let a = 25;
//   a++;
//   console.log("a=", a);
// };
let div = document.querySelector("div");
div.onmouseover = (evt) => {
  console.log(evt);

  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
  div.style.backgroundColor = "red";
};

let btn2 = document.querySelector("#btn2");

btn2.onclick = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};
btn1.addEventListener("click", (evt) => {
  console.log("button was clicked");
  // console.log(evt);
  // console.log(evt.type);
  // console.log(evt.target);
  // console.log(evt.clientX, evt.clientY);
});
btn1.addEventListener("click", () => {
  console.log("button was clicked again - fn");
});
const handler = () => {
  console.log("button was clicked again - fn");
};
//FIXME: this
btn1.removeEventListener("click", handler);