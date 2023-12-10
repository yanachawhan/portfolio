const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

var navContainer = document.getElementById("nav-menu");
var btns = navContainer.getElementsByClassName("nav-item");

for(var i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active","");
        this.className += " active";
    });
}

 var projectsContainer = document.getElementById("projects-container");
 var projectCards = projectsContainer.getElementsByClassName("project-card");



 for(var j=0;j<projectCards.length;j++){
     projectCards[j].addEventListener("mouseover",function(){
         var currentProjectTitle = this.getElementsByClassName("project-title-none");
         if(currentProjectTitle.length){
             currentProjectTitle[0].className = currentProjectTitle[0].className.replace("-none","");
         }
     });

      projectCards[j].addEventListener("mouseout",function(){
          var currentNoneProjectTitle = this.getElementsByClassName("project-title");
          if(currentNoneProjectTitle.length){
             currentNoneProjectTitle[0].className = currentNoneProjectTitle[0].className.replace("project-title","project-title-none");
          }
         
      });
     }

