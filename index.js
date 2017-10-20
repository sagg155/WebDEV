var rect  =require('./rectangle');
// = {
//     perimeter:(x,y) => (2*(x+y)),
//     area:(x,y) =>(x*y)
// };



function solveRect(l,b){
    if(l<=0 || b<=0){
        console.log("Not Applicable");
    }

    else{
        console.log(rect.area(l,b));
        console.log(rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(0,5);
solveRect(-3,5);