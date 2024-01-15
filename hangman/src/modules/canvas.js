export const canvasCreator = (canvas) => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;

    //drawing lines
    const drawLine = (fromX, fromY, toX, toY) => {
        context.beginPath();
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
    };

    const head = () => {
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI * 2, true);
        context.stroke();
    };

    const body = () => {
        drawLine(70, 40, 70, 80);
    };

    const leftArm = () => {
        drawLine(70, 50, 50, 70);
    };

    const rightArm = () => {
        drawLine(70, 50, 90, 70);
    };

    const leftLeg = () => {
        drawLine(70, 80, 50, 110);
    };

    const rightLeg = () => {
        drawLine(70, 80, 90, 110);
    }; 
    
    const clearCanvas = () => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        console.log(context.canvas.width, context.canvas.height);
    }

    //initial 
    const initialDrawing = () => {
        // // //clear canv
        // cleanCanvas();
        //bottom
        drawLine(10, 130, 130, 130);
        //left 
        drawLine(10, 10, 10, 131);
        //top
        drawLine(10, 10, 70, 10);
        //small diagonal
        drawLine(70, 10, 70, 20);
    };

   

    return { initialDrawing, clearCanvas, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

export const drawHangman = (count, canvas) => {
    let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator(canvas);
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};