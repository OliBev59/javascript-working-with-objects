(function(){ // Immediatly invoked function Expression(IFFE) 
//Start
    // everything from now goes within this function
console.info("Hello JS"); 

var myNode = document.createElement('div');
document.getElementById("digitalClock").appendChild(myNode);



var upDateTime = function(){
console.info('tick tock');
var mydate = new Date();

myNode.innerHTML = mydate.toTimeString() .substring(0, 8);
}

setInterval(upDateTime, 1000);
upDateTime();


//end
})();