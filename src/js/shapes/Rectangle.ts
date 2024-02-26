export class Rectangle {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById("Swiss-flag") as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    }

    drawSwissFlag() {
        this.context.fillStyle = "red";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.fillStyle = "white";

        this.context.fillRect(267.6, 39.7, 64.9, 280.7);
        this.context.fillRect((this.canvas.width / 2) - (280.7 / 2), (this.canvas.height / 2) - (64.9 / 2), 280.7, 64.9);
    }
}

export class Home {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById("home") as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    }

    drawHome() {
        this.context.beginPath();
        this.context.arc(354.9, 116.8, 36.5, 0, 2 * Math.PI);
        this.context.fillStyle = "yellow";
        this.context.fill();
        this.context.strokeStyle = "brown";
        this.context.stroke();

        this.context.fillStyle = "brown";
        this.context.beginPath();
        this.context.arc(354.9, 120, 20, 0, Math.PI);
        this.context.stroke();

        this.context.strokeStyle = "orange";
        this.context.beginPath();
        this.context.moveTo(254.2, 165.7);
        this.context.lineTo(254.2, 213);
        this.context.lineTo(270.3, 213);
        this.context.lineTo(301.2, 213);
        this.context.lineTo(301.2, 165.7);
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(269.4, 213);
        this.context.lineTo(269.4, 181.6);
        this.context.lineTo(286, 181.6);
        this.context.lineTo(286, 213);
        this.context.closePath();
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(232.3, 165.7);
        this.context.lineTo(277.4, 120.5);
        this.context.lineTo(322.1, 165.2);
        this.context.stroke();

        this.context.strokeStyle = "blue";
        this.context.beginPath();
        this.context.moveTo(210, 245);
        this.context.bezierCurveTo(300, 220, 250, 290, 350, 240);
        this.context.moveTo(210, 265);
        this.context.bezierCurveTo(300, 240, 250, 310, 350, 260);
        this.context.stroke();

        this.context.strokeStyle = "green";
        this.context.beginPath()
        this.context.moveTo(200, 213);
        this.context.bezierCurveTo(200, 150, 190, 120, 230, 130);
        this.context.stroke();
    }
}

export class MasterCard {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    radius: number;

    constructor(radius: number) {
        this.canvas = document.getElementById("master-card") as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
        this.radius = radius;
    }

    drawMasterCard() {
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.globalCompositeOperation = "exclusion";

        this.context.fillStyle = "red";
        this.context.beginPath();
        this.context.arc(225, 148.9, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();

        this.context.fillStyle = "orange";
        this.context.beginPath();
        this.context.arc(375, 148.9, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();

    }
    drawText() {
        this.context.fillStyle = "white";
        this.context.font = "60px helvetica";
        this.context.fillText("mastercard", 150, 340);
    }
}

export class Triangle {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    backColor: string;
    triangleColor: string;
    bigCircleColor: string;
    smallCircleColor: string;

    constructor(backColor: string, triangleColor: string, bigCircleColor: string, smallCircleColor: string) {
        this.canvas = document.getElementById("triangle") as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
        this.backColor = backColor;
        this.triangleColor = triangleColor;
        this.bigCircleColor = bigCircleColor;
        this.smallCircleColor = smallCircleColor;
    }

    drawTriangle() {
        this.context.fillStyle = this.backColor;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        //Triangle
        this.context.fillStyle = this.triangleColor;
        this.context.beginPath();
        this.context.moveTo(375, 250);
        this.context.lineTo(300, 100);
        this.context.lineTo(225, 250);
        this.context.lineTo(375, 250);
        this.context.fill();
        this.context.closePath();

    }

    drawCircle() {
        //Cercle1
        this.context.fillStyle = this.bigCircleColor;
        this.context.beginPath();
        this.context.arc(295, 190, 45, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();

        //Cercle2
        this.context.fillStyle = this.smallCircleColor;
        this.context.beginPath();
        this.context.arc(301, 188, 35, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
    }
}