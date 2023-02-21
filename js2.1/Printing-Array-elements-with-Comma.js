/*
DESCRIPTION:
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a" 
*/

let a=["h","o","l","a"];
result=""
for(var i=0;i<a.length;i++){
    if(i==a.length-1){
        result+=a[i];
    }
    else{
        result+=a[i]+",";
    }
}
console.log(result)
