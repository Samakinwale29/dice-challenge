 
 $(".play").on("click", function(){

    var randomNumber = Math.ceil(Math.random()*6);

//  var randomImage1 = "image/dice" + randomNumber + ".png";

    var randomImage1 = `image/dice${randomNumber}.png`;

    var randomDiceImage = $(".img1").attr("src", randomImage1);


    
    var randomNumber2 = Math.ceil(Math.random()*6);

    //  var randomImage2 = "image/dice" + randomNumber2 + ".png";

    var randomImage2 = `image/dice${randomNumber2}.png`;

    var randomDiceImage2 = $(".img2").attr("src", randomImage2);


    if ( randomNumber > randomNumber2){
        var result = $(".result").html("Player 1 wins");
        result.css("color", "red");
    }
    else if(randomNumber < randomNumber2){
        var result = $(".result").html("Player 2 wins");
        result.css("color", "red");
    }
    else{
        var result = $(".result").html("Draw!");
        result.css("color", "black");
    }

 })
 
 