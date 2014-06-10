
console.log("hiding newsfeed!");

killElement = function(id){
    document.getElementById(id).style.display = 'none';
}

var fbEvilIds = ['contentArea', 'rightCol']
for(var i = 0; i < fbEvilIds.length; i++){
    killElement(fbEvilIds[i]);
}
