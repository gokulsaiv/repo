
/* count the number of char in a given string*/
var input1="  This time we want to write calculations using";
var result=input1.trim();
var count=0;
for(let i=0;i<result.length;i++){
    if( result.charAt(i)===' ')count++;
}
console.log(`number of words:${count+1}`);