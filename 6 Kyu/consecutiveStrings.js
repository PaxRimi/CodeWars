/*Consecutive strings
You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

#Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/

// My Answer 

function longestConsec(strarr, k) {
      let theLongest = "";
      let conectString = "";
    
    if (strarr.length === 0) {
       return "";}
    else if (k > strarr.length) {
       return "";}
    else if (k<=0 ) {
       return "";} 
    
    
    for (let i=0; i<k; i++){
      theLongest += strarr[i]; }
        
        
        for(let j=1; j<=strarr.length-k; j++) {
          for(let n=0; n<k; n++) {  
          conectString += strarr[n+j]; 
        } 
          if (theLongest.length < conectString.length) {
            theLongest = conectString;
            conectString =""; 
          } else {
            conectString = "";
            }
            }
        return theLongest;
}

