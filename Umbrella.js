class Umbrella{
 constructor(x,y,r){
var  options={
    isStatic:true,
}

     this.body=Bodies.circle(x,y,r)
     
 }


 image(){
     this.image=this.body.position;
 }

}