class Drop{
    constructor(x,y,r){
        var options=


        
        this.body=Bodies.circle(x,y,r)
    }
    
    

    update(){
        if(Drop.y>500){
            Drop.y=-10;
        }

    }


     ellipse(){
    ellipseMode(this.body.x,this.body.y,r);
    }


    display()
    {
        var y= this.body.y;
        var x= this.body.x;
    }
}
