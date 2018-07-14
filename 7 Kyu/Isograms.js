/*Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
*/

//My answer 

function isIsogram(str){
  let arrStr = str.split(''); 
  
    for (let i=0; i<str.length; i++ ) {
      let j = arrStr.pop(); 
      if (arrStr.indexOf(j.toUpperCase()) !== -1 || arrStr.indexOf(j.toLowerCase()) !== -1) {
        return false; }
        }
    return true;
}