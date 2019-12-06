function calc(hint) {

    // console.log("calc launshed");
     const arr = hint.split(' ');
 
     const val1 = parseInt(arr[2]);
     const op = arr[3];
     const val2 = parseInt(arr[4]);
 
 
     switch (op) {
         case "plus": return val1 + val2;
         case "minus": return val1 - val2;
         case "times": return val1 * val2;
     }
 
 }
 
 
 function max(hint) {
   //  console.log("max launshed");
     const arr = hint.split(' ');
 
     const val1 = parseInt(arr[2]);
     const op = arr[3];
     const val2 = parseInt(arr[4]);
   // console.log("res max", val1,val2);
     return val1>val2 ? val1: val2;
 }
 
 
 function prime(hint) {
 
     const arr = hint.split(' ');
     const value = parseInt(arr[3].split("th")[0]);
   //  console.log("prime number th ?",value);
 
   return PrimeMover(value);
 
 }

 function PrimeMover(num) {
    var count = 0
    for (var i=2 ; i<10000 ; i++)  { //var i=2
        if (Prime(i) === true) {
            count = count + 1 
        }
        if (count === num) {
            return i
            break
        } 
    }
}

function Prime(num) {
    output = true  
    for (var i=2 ; i<num ; i++) { //var i=2
        if (num%i === 0)  {
           output = false ; break
        }
    }
    return output
    }


 module.exports = {
     calc,
     max,
     prime
 };

