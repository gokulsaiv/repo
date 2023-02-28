/*
DESCRIPTION:
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output 
*/

let result=function(array){
        switch(array[0]){
            case '+':return parseInt(array[1])+parseInt(array[2]);
                    break;
            case '-':return parseInt(array[1])-parseInt(array[2]);
                    break;
            case '*':return parseInt(array[1])*parseInt(array[2]);
                    break;
            case '/':return parseInt(array[1])/parseInt(array[2]);
                    break;
        }
    }
    console.log(result(['*','2','2']))