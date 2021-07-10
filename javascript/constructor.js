function Circle(radius){
    this.radius=radius;
};
 Circle.prototype.getArea = 
    function (){
    return Math.PI * Math.pow(this.radius,2);
    }


var mycircle= new Circle(20)
    console.log(mycircle);
    console.log(mycircle.getArea());