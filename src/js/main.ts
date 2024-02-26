import {Home, MasterCard, Rectangle, Triangle} from "./shapes/Rectangle";

const swissFlag = new Rectangle();

swissFlag.drawSwissFlag();

const home = new Home();

home.drawHome();

const masterCard = new MasterCard(125);

masterCard.drawMasterCard();
masterCard.drawText();

const triangle = new Triangle("grey", "black", "white", "black");

triangle.drawTriangle();
triangle.drawCircle();
