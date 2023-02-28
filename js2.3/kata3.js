function always(num){
    
        return  ()=> num;
        
    
}
let three =always(4);
console.log(three());