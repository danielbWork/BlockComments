
function myFunction() {
    
    var timesRun = 0;
    var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 60){
        console.log("Finished Removing Commants");
        clearInterval(interval);
    }
     var elem = document.getElementById("comments");       
        
        if(elem!= null){
            elem.style.display = 'none';
            elem.style.visibility = 'hidden';
        }  
    
    }, 500); 
    
}

myFunction();