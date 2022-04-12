function add(... paremt){
    let total = 0;
    for(value of paremt){
        total+=value
    }
    return total;
}
console.log("12*2 is: "+add(12*2))
console.log("12*2*3 is: "+add(12*2*3))
console.log("12*2*3*4 is: "+add(12*2*3*4))

function add_two_digits(a)
   {
      return a % 10 + Math.floor(a / 10);
   }

   let a=parseInt(prompt("enter"))
      console.log(add_two_digits(a))

let sum=(num)=>{
    let fnum = parseInt(num*10);
    let lnum = parseInt(num*10);
    return lnum+fnum; 
}
let input = parseInt(prompt("Enter a 2-Digit number: "));
console.log("Sum is: "+ sum(input))