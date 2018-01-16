var isMouseTracking = false;
// We need a function to update the position
// On our front end, we have 2 labels - 
// one for X, one for Y
function updateMousePosition() {
    //if tracking enabled, update labels
    if(isMouseTracking){
        var positionX = document.getElementById("mousePositionX");
        positionX.innerText = event.clientX;
        var positionY = document.getElementById("mousePositionY");
        positionY.innerText = event.clientY;
    }
}

//function to toggle whether tracking is enabled
function toggleTracking(){
    //set it to opposite what it is currently
    isMouseTracking = !isMouseTracking;
    //update tracking status to show status
    if(isMouseTracking){
        document.getElementById("trackingStatus")
            .innerText = "TRACKING";
    } else {
        document.getElementById("trackingStatus")
            .innerText = "NOT TRACKING";
        }
}