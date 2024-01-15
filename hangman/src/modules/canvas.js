export const canvasCreator = (canvas) => {
    let context = canvas.getContext("2d");
    // context.canvas.height = 300;
    // context.canvas.width = 300;
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 4;
    

    //drawing lines
    const drawLine = (fromX, fromY, toX, toY) => {
        context.beginPath();
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
    };

    const head = () => {
        context.beginPath();
        context.arc(160, 73, 20, 0, Math.PI * 2, true);
        context.stroke();
    };

    const body = () => {
        drawLine(160, 93, 160, 170);
    };

    const leftArm = () => {
        drawLine(160, 105, 135, 155);
    };

    const rightArm = () => {
        drawLine(160, 105, 185, 155);
    };

    const leftLeg = () => {
        drawLine(160, 170, 135, 230);
    };

    const rightLeg = () => {
        drawLine(160, 170, 185, 230);
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
        drawLine(20, 290, 275, 290);
        //left 
        drawLine(20, 10, 20, 292);
        //top
        drawLine(18, 10, 160, 10);
        //small diagonal
        drawLine(160, 8, 160, 55);
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