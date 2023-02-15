var obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.'
        }
      }
    }
  };
  Object.prototype.hash=function(path){
    try{ return eval("this."+ path ); } 
    catch(e){ return undefined;
    }}
  console.log(obj.hash('person.name'));
    
  