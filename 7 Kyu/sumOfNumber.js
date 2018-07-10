/*Beginner Series #3 Sum of Numbers

Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

//My Answer 

function GetSum( a,b )
{ let sum = 0;
  let lownum = 0;
  let bignum = 0;
  
   if (a === b) {
     return a; 
     } else if ( a > b ) {
        lownum = b; 
        bignum = a;
     } else {
       lownum = a;
       bignum = b; }
       
       for ( let i=lownum; i<= bignum; i++) {
         sum += i; }
         
    return sum;
}