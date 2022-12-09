"use strict";

const allMuscles = document.querySelectorAll(".body-part-btn");
const containerBodyParts = document.getElementById("body-parts-container");
const testDiv = document.getElementById("test");
const testDiv2 = document.getElementById("test2");
const submitButton = document.getElementById("btn-submit");

console.log(testDiv);

const onClickChangeLayout = () => {
  allMuscles.forEach((muscle) => {
    muscle.addEventListener("click", () => {
      testDiv.style.display = "grid";
      testDiv.style.gridTemplateColumns = "25fr 50fr";
    });
  });
};

const createInputAndLabelOnClick = () => {
  allMuscles.forEach((muscle) => {
    muscle.addEventListener("click", () => {
      let takeContent = muscle.textContent;
      createLabel(takeContent);
      createInput(testDiv2);
      btnPossAfterClick(submitButton);
      checkTimesClicked();
    });
  });
};

const createLabel = (contentOfLabel) => {
  const label = document.createElement("label");
  label.setAttribute("for", "input");
  label.innerHTML = `${contentOfLabel}`;
  label.style.width = "20rem";
  label.style.height = "20rem";
  label.style.fontSize = "2rem";
  label.style.display = "flex";
  label.style.alignItems = "center";
  label.style.justifyContent = "center";
  label.style.margin = "0 auto";
  label.style.borderBottom = "1px solid black";
  testDiv2.appendChild(label);
};

const createInput = (varToStyle) => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  varToStyle.style.display = "grid";
  varToStyle.style.gridTemplateColumns = "25fr 25fr";
  varToStyle.style.width = "100%";
  varToStyle.style.height = "20rem";
  varToStyle.appendChild(input);
};

const changeBodyPartMargin = () => {
  containerBodyParts.style.margin = "2rem 2rem";
};

const btnPossAfterClick = (button) => {
  button.style.left = "35%";
};

// TODO

// const objectTimesClicked = {
//   neck: 0,
//   frontShoulder: 0,
//   sideShoulder: 0,
//   rearShoulder: 0,
//   biceps: 0,
//   triceps: 0,
//   upperForearm: 0,
//   lowerForearm: 0,
//   upperChest: 0,
//   middleChest: 0,
//   bottomChest: 0,
// };

// const checkTimesClicked = () => {
//   allMuscles.forEach((muscle) => {
//     muscle.addEventListener("click", () => {
//       objectTimesClicked[muscle.value] += 1;
//       console.log(objectTimesClicked);
//       // muscle.innerText = objectTimesClicked[muscle.value];
//     });
//   });
// };

const runApp = () => {
  changeBodyPartMargin();
  onClickChangeLayout();
  createInputAndLabelOnClick();
};

runApp();
