function createSecretHolder(num){
    var secret=num;
    return {
        getSecret:function(){
            return secret;
        
        },
        setSecret:function(newValue){
            secret=newValue;
        }
    
      }  
  
}
let b=createSecretHolder(5);
