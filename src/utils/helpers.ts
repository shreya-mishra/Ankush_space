if (
  circlePositions[0].top === 40 &&
  circlePositions[0].left >= 0 &&
  circlePositions[0].left <= 30
) {

  setInterval(() => {
    console.log("this is called>>>>>>>>>>>> TOP2");
    moveCircle(1, "top2");
  }, 5000);
} else if (
  circlePositions[0].top === 100 &&
  circlePositions[0].left >= 0 &&
  circlePositions[0].left <= 30
) {
  
  setInterval(() => {
    console.log("this is called>>>>>>>>>>>> BOTTOM2");
    moveCircle(1, "bottom2");
  }, 5000);
} else if (
  circlePositions[0].top === 70 &&
  circlePositions[0].left >= -40 &&
  circlePositions[0].left <= -10
) {
  console.log("this is called>>>>>>>>>>>> LEFT");

  moveCircle(1, "left");
} else if (
  circlePositions[0].top === 70 &&
  circlePositions[0].left >= 40 &&
  circlePositions[0].left <= 60
) {
  console.log("this is called>>>>>>>>>>>> RIGHT");

  moveCircle(1, "right");
} else if (
  circlePositions[1].top === 40 &&
  circlePositions[1].left >= 0 &&
  circlePositions[1].left <= 30
) {
  
  setInterval(() => {
    console.log("this is called>>>>>>>>>>>> TOP2");
    moveCircle(2, "top2");
  }, 5000);
} else if (
  circlePositions[1].top === 100 &&
  circlePositions[1].left >= 0 &&
  circlePositions[1].left <= 30
) {
  
  setInterval(() => {
    console.log("this is called>>>>>>>>>>>> BOTTOM2");
    moveCircle(2, "bottom2");
  }, 5000);
} else if (
  circlePositions[1].top === 70 &&
  circlePositions[1].left >= -40 &&
  circlePositions[1].left <= -10
) {
  console.log("this is called>>>>>>>>>>>> LEFT");

  moveCircle(2, "left");
} else if (
  circlePositions[1].top === 70 &&
  circlePositions[1].left >= 40 &&
  circlePositions[1].left <= 60
) {
  console.log("this is called>>>>>>>>>>>> RIGHT");

  moveCircle(2, "right");
} else {
  console.log("outside the box");
}


    // left = 0 ------ 30;
    // top = 40;
    //index  ========> index , top button press

    // left = -40 to - 10 and top === 70 . button press LEFT

    // left = 0 ----30 and top === 100 button pressBOTTOM

    // right = 40 ----- 60 and top === 70 button press RIGHT



    {"left": -150, "top": 0}
    {"left": 180, "top": 120}
    {"left": -150, "top": -30}
    {"left": -150, "top": 120}
