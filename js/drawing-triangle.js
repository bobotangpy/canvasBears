class DrawingTriangle extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;   
        this.contextDraft = contextDraft;         
    }
    
    onMouseDown(coord,event){
     
        this.origX = coord[0];
        this.origY = coord[1];
        //this.contextDraft.beginPath();
        // this.contextDraft.moveTo(this.origX, this.origY);
    }
    
    onDragging(coord,event){
        this.contextDraft.fillStyle = "white";
        this.contextDraft.strokeStyle = "black";
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextDraft.moveTo(this.origX, this.origY);
        // this.contextDraft.lineTo(coord[0], coord[1]);
        // this.contextDraft.lineTo(coord[0]*0.1, coord[1]*0.1);
        var disX =  Math.abs(coord[0] - this.origX);
        var disY =  Math.abs(coord[1] - this.origY);
        var totalDis = disX+disY;
        console.log(disX);

        this.contextDraft.moveTo((coord[0]/2)+50,coord[1]/2);
        this.contextDraft.lineTo((coord[0]/2),(coord[1]/2)-50);
        this.contextDraft.lineTo((coord[0]/2)-50,coord[1]/2);

        // path.moveTo((sWidth/2)+50,sHeight/2);
        // path.lineTo((sWidth/2),(sHeight/2)-50);
        // path.lineTo((sWidth/2)-50,sHeight/2);
        
        // var angle = ((Math.PI * 2) / 3);
        // var radius = Math.abs(coord[1]-this.origY/2);
        // this.contextDraft.moveTo(coord[0],coord[1]);
            
        //     this.contextDraft.lineTo(radius * Math.cos(angle * 1), radius * Math.sin(angle * 1));
        //     this.contextDraft.lineTo(radius * Math.cos(angle * 2), radius * Math.sin(angle * 2));
        //     this.contextDraft.lineTo(radius * Math.cos(angle * 3), radius * Math.sin(angle * 3));

        this.contextDraft.closePath();
        this.contextDraft.stroke();
        this.contextDraft.fill();

            // var angle = ((Math.PI * 2) / 3);
            // var radius = (Math.abs(coord[0]-this.origX/2))/2
            // this.contextDraft.translate(this.origX, this.origY);
            // this.contextDraft.moveTo(radius, 0);
            
            //     this.contextDraft.lineTo(radius * Math.cos(angle * 1), radius * Math.sin(angle * 1));
            //     this.contextDraft.lineTo(radius * Math.cos(angle * 2), radius * Math.sin(angle * 2));
            //     this.contextDraft.lineTo(radius * Math.cos(angle * 3), radius * Math.sin(angle * 3));
                
            // this.contextDraft.closePath();
            // this.contextDraft.fill();
            // this.contextDraft.stroke();

    //     this.contextDraft.strokeStyle = "black";        
    //     this.contextDraft.lineTo(coord[0],coord[1]);
    //     this.contextDraft.lineTo(coord[1],coord[0]);
    //     this.contextDraft.closePath();
        // this.contextReal.fill(); 
        // this.contextDraft.stroke();
        // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextDraft.fill(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        // this.contextDraft.stroke(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }

    onMouseMove(){}
    onMouseUp(coord){

        this.contextReal.fillStyle = "white";
        this.contextReal.strokeStyle = "black";
        this.contextReal.beginPath();
        //this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.lineTo(coord[0]/2, coord[1]/2);

        this.contextReal.closePath();
        this.contextReal.stroke();
        this.contextReal.fill();
        
    }
    onMouseLeave(){}
    onMouseEnter(){}
    
}
