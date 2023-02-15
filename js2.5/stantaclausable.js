var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};
Object.prototype.santaClausable=function(obj){
    if(obj.hasOwnProperty('sayHoHoHo')&&obj.hasOwnProperty('distributeGifts')&&obj.hasOwnProperty('goDownTheChimney')){
        return true;
    }
    else{
        return false;
    }
}
console.log(santaClausable(santa))
