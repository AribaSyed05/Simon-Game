//game pattern
var gamePattern = [];
console.log(gamePattern);


//user pattern
var userClickedPattern = [];
console.log(userClickedPattern);


//array of colors
var buttonColours = ["red", "blue", "green", "yellow"];




// To start the game
var level = 0;
var started = false;

$(document).keypress(function(){
    if(!started){
        newSequence();
        $("h1#level-title").text("Level " + level);
        started = true;
    }
   
});




//random color generator
function newSequence(){
    
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1#level-title").text("Level " + level);
    
}





// user clicked pattern
$(".btn").on("click",function(){
   
   var userChosenColour = $(this).attr('id');
   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   checkAnswer(userClickedPattern.length - 1);
   

});



function checkAnswer(currentLevel){
    //success
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");

        if (userClickedPattern.length === gamePattern.length){

           //5. Call nextSequence() after a 1000 millisecond delay.
           setTimeout(function () {
             newSequence();
           }, 1000);
     
        }
       
    }
    //wrong
    else{
        console.log("wrong");

        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        $("h1#level-title").text("Game Over, Press Any Key to Restart");
        startOver();

    }
      
   
}



function startOver(){
    gamePattern = [];
    started = false;
    level = 0;
}









function playSound(name){
    
    switch (name) {
        case "red":
            var redClickedButton = new Audio('sounds/red.mp3');
            redClickedButton.play();
            break;
    
        case "yellow":
            var yellowClickedButton = new Audio('sounds/yellow.mp3');
            yellowClickedButton.play();
                
            break;
        
        case "green":
            var greenClickedButton = new Audio('sounds/red.mp3');
            greenClickedButton.play();
                
            break;     
    
        case "blue":
            var blueClickedButton = new Audio('sounds/red.mp3');
            blueClickedButton.play();
                
             break;
    
        default: var wrongClickedButton = new Audio('sounds/wrong.mp3')
            break;
    };
    
}



function animatePress(currentColour){
     
     $("#" + currentColour).addClass("pressed");
     setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
       } , 100);
        


}





/*

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();


*/
