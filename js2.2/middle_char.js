/* DESCRIPTION:
You are going to be given a word. Your job is to return the middle character of the word.
 If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. */
let a=prompt("enter your input:");
var x=Math.floor(a.length/2);

if(a.length%2===0){
    
    console.log(a.substring(x-1,x+1));
}
else{
    console.log(a.substring(x,x+1));
}