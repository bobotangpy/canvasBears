class DrawingLine extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;            
    }
    
    onMouseDown(coord,event){
        var size = document.getElementById("myRange"); //get slider size
        var mySize = size.value;
        this.context.lineWidth = mySize; //change size when slider value change
        this.context.strokeStyle = "#df4b26";
        this.context.lineJoin = "round";
        this.context.lineCap = "round"; // Smooth when draw thick line (end of lines are rounded)
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();    
    }
}

/////////////////// Spray ///////////////////
class Spray extends DrawingLine{
    constructor(contextReal){
        super();
        this.context = contextReal;            
    }
    
    onMouseDown(coord,event){
        this.context.strokeStyle = this.context.fillStyle = "black";
        this.context.lineJoin = this.context.lineCap = "round";
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        var size = document.getElementById("myRange"); 
        var mySize = size.value;
        this.context.lineWidth = mySize; 
        var density = 50;
        for (var i = density; i--;){
            var radius = mySize;
            this.context.getRandomInt = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var offsetX = this.context.getRandomInt(-radius, radius);
            var offsetY = this.context.getRandomInt(-radius, radius);
            this.context.fillRect(coord[0] + offsetX,coord[1] + offsetY, 1, 1);
        }
    }

    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        var size = document.getElementById("myRange"); 
        var mySize = size.value;
        this.context.lineWidth = mySize; 
        var density = 50;
        for (var i = density; i--;){
            var radius = mySize;
            this.context.getRandomInt = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var offsetX = this.context.getRandomInt(-radius, radius);
            var offsetY = this.context.getRandomInt(-radius, radius);
            this.context.fillRect(x + offsetX, y + offsetY, 1, 1);
        }
    }
}
