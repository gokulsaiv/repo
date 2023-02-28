function createFunctions(n) {
    var callbacks = [];
  
    for (var i=0; i<n; i++) {
      pushFunc(i);
    }
    function pushFunc(i){
      callbacks.push(function() {
        return i;
      });
    }
    return callbacks;
  }
  let k=createFunctions(3);
  console.log(k[0]());