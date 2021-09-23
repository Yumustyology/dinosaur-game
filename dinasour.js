var character = document.getElementById("character");
var block = document.getElementById("block");
function jump() {
    if (character.classList != "animate"){// this if command here indicates that if the class has not been gotten 
        //then it should be added (so has to make the code work, but if it has been added then no need to add it again, 
        //the whole idea is to avoid spam because the code will just be continually added.) 
    character.classList.add("animate");
}
    setTimeout(function(){
        character.classList.remove("animate");
    },500); //this 500 is referring to the speed at which the code in the function runs (in milliseconds) 
}

var checkDead = setInterval(function(){
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));//we used the parseInt to get only the number has our initial value would carry "px"
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (blockLeft < 5 && blockLeft > 0 && characterTop >= 150){
    block.style.animation = "none";
    block.style.display = "none";
    alert("You lose");
}

},10)








window.addEventListener('keydown' ,button =>{
    if(button.key ==='Enter'){

    jump();            
    
    } else if(button.key === 'SpaceBar'){
        jump();
    }else if(button.key === 'j'){
        jump();
    }
});

