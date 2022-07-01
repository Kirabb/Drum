// add click listener

var drumTotalLength = document.querySelectorAll( ".drum" ).length;


for(var i=0; i< drumTotalLength; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHtml=this.innerHTML;

    makeSound(buttonInnerHtml);
    changeAnimation(buttonInnerHtml);

  })

}


// add keyboard listener


document.addEventListener("keydown",function(e){

    makeSound(e.key);
    changeAnimation(e.key);

});


//make sound function

function makeSound ( key ){
  switch (key) {
    case "w":

        new Audio("sounds/tom-1.mp3").play();
        break;

    case "a":

        new Audio("sounds/tom-2.mp3").play();
        break;

    case "s":

        new Audio("sounds/tom-3.mp3").play();
        break;

    case "d":

        new Audio("sounds/tom-4.mp3").play();
        break;

    case "j":

        new Audio("sounds/snare.mp3").play();
        break;

    case "k":

        new Audio("sounds/crash.mp3").play();
        break;

    case "l":

        new Audio("sounds/kick-bass.mp3").play();

    default: console.log(key);
  }

}



// change button animation

function changeAnimation(selectButton){

  var buttonClassName = document.querySelector("."+selectButton);
  buttonClassName.classList.add("pressed");

  setTimeout(function(){
    buttonClassName.classList.remove("pressed");
  },100)
}
