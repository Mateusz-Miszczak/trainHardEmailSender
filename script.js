"use strict";

const allMuscles = document.querySelectorAll(".body-part");
const containerBodyParts = document.getElementById("body-parts-container");
const testDiv = document.getElementById("test");

const onClickChangeLayout = () => {
  allMuscles.forEach((muscle) => {
    muscle.addEventListener("click", () => {
      testDiv.style.display = "grid";
      testDiv.style.gridTemplateColumns = "25fr 50fr";
    });
  });
};

onClickChangeLayout();

const checkWhichMuscleClicked = () => {
  allMuscles.forEach((muscle) => {
    muscle.addEventListener("click", () => {
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      document.testDiv.appendChild(input);
    });
  });
};

checkWhichMuscleClicked();
