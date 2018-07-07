/* Exes and Ohs
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// My Answer 

function XO(str) {
   let numbO = 0;
   let numbX = 0;
   
   for (let i=0; i<str.length; i++ ) {
     let x = str.charAt(i); 
       if ( x ==="o" || x ==="O" ) {
         numbO++ } 
       else if ( x ==="x" || x ==="X" ) {
         numbX++ } 
         } 
         if ( numbO === numbX ) {
         return true; } 
         else { return false; }
}