function loadTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function changePic(){
    var pic = document.getElementById("pic");
     // sleep time expects milliseconds
     function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
    };
    pic.src="ourGraciousHostSide.png";
   
    sleep(330).then(() => { pic.src="ourGraciousHostFront.png"});
   
}

function changePicBack(){
    var pic = document.getElementById("pic");
     // sleep time expects milliseconds
     function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
    };
    pic.src="ourGraciousHostSide.png";
   
    sleep(330).then(() => { pic.src="ourGraciousHostBack.png"});
   
}
