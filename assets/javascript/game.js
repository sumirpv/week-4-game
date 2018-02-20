var totalscorenumber=0;
var win=0;
var lost=0;
var randNum = Math.floor(Math.random() * (120 - 19)) + 19;

var crystal1= Math.floor(Math.random() * 12 )+ 1;
var crystal2= Math.floor(Math.random() * 12 )+ 1;
var crystal3= Math.floor(Math.random() * 12 )+ 1;
var crystal4= Math.floor(Math.random() * 12 )+ 1;


function reset(){
    totalscorenumber=0;
    randNum = Math.floor(Math.random() * (120 - 19)) + 19;
    crystal1= Math.floor(Math.random() * 12 )+ 1;
    crystal2= Math.floor(Math.random() * 12 )+ 1;
    crystal3= Math.floor(Math.random() * 12 )+ 1;
    crystal4= Math.floor(Math.random() * 12 )+ 1;
    $("#randnumber").text(randNum);
    $("#total-score-number").text(totalscorenumber);
        // crystal 1 randnum
        console.log("randon number is 1 :" + crystal1);
        console.log("randon number is 2 :" + crystal2);
        console.log("randon number is 3 :" + crystal3);
        console.log("randon number is 4 :" + crystal4);
}

$(document).ready(function () {

  
    //random number btween 19 to 120
    //console.log("randon number is  :" + randNum);
    //display random number in a document
    $("#randnumber").text(randNum);
    $("#total-score-number").text(totalscorenumber);
    $("#wins").text(win);
    $("#losses").text(lost);
    
    // crystal 1 randnum
    console.log("randon number is 1 :" + crystal1);
    console.log("randon number is 2 :" + crystal2);
    console.log("randon number is 3 :" + crystal3);
    console.log("randon number is 4 :" + crystal4);
});


$(".crystalClick1").on("click", function() {
   // check(totalscorenumber);
  // $("#total-score-number").text(totalscorenumber);

    if(randNum >totalscorenumber){
        totalscorenumber +=crystal1;
        $("#total-score-number").text(totalscorenumber);
        console.log("cry1 + total :" + totalscorenumber);

        if(randNum === totalscorenumber){
           // totalscorenumber +=crystal1;
           $("#total-score-number").text(totalscorenumber);
           console.log("you won : " + totalscorenumber);
            alert("You Won");
            win++;    
            reset();
            $("#wins").text(win);
        }else if(randNum < totalscorenumber) {
          //  totalscorenumber +=crystal1;
        lost++;
        $("#total-score-number").text(totalscorenumber);
        console.log("You lost : " +totalscorenumber);
        alert("You lost better luck next time");
        reset();
        $("#losses").text(lost);
        }

    }
    

});
$(".crystalClick2").on("click", function() {
    $("#total-score-number").text(totalscorenumber);

    if(randNum >totalscorenumber){
        totalscorenumber +=crystal2;
        $("#total-score-number").text(totalscorenumber);
        if(randNum === totalscorenumber){
            $("#total-score-number").text(totalscorenumber);
            alert("You Won");
            win++;
            reset();
            $("#wins").text(win);
            console.log("YOu won");
        }else if(randNum < totalscorenumber) {
            $("#total-score-number").text(totalscorenumber);
            alert("You lost better luck next time");
        lost++;
        reset();
        $("#losses").text(lost);
        console.log("You lost");
        }
        console.log("cry2 + total :" + totalscorenumber);

    }
    
});
$(".crystalClick3").on("click", function() {
    $("#total-score-number").text(totalscorenumber);

    if(randNum >totalscorenumber){
        totalscorenumber +=crystal3;
        $("#total-score-number").text(totalscorenumber);
        if(randNum === totalscorenumber){
            $("#total-score-number").text(totalscorenumber);
            alert("You Won");
            win++;
            reset();
            $("#wins").text(win);
            console.log("YOu won");
        }else if(randNum < totalscorenumber) {
            $("#total-score-number").text(totalscorenumber);
            alert("You lost better luck next time");
        lost++;
        reset();
        $("#losses").text(lost);
        console.log("You lost");
        }
        console.log("cry3 + total :" + totalscorenumber);

    }
    
});
$(".crystalClick4").on("click", function() {
    $("#total-score-number").text(totalscorenumber);


    if(randNum >totalscorenumber){
        totalscorenumber +=crystal4;
        $("#total-score-number").text(totalscorenumber);
        if(randNum === totalscorenumber){
            $("#total-score-number").text(totalscorenumber);
            alert("You Won");
            win++;
            reset();
            $("#wins").text(win);
            console.log("YOu won");
        }else if(randNum < totalscorenumber) {
            $("#total-score-number").text(totalscorenumber);
            alert("You lost better luck next time");
        lost++;
        reset();
        $("#losses").text(lost);
        console.log("You lost");
        }
        console.log("cry4 + total :" + totalscorenumber);

    }
    
    // if(randNum === totalscorenumber){
    //     alert("You Won");
    //     win++;
    //     reset();
    //     $("#wins").text(win);
    //     console.log("YOu won");
    // }else if(randNum < totalscorenumber){
    //     alert("You lost better luck next time");
    //     lost++;
    //     reset();
    //     $("#losses").text(lost);
    //     console.log("You lost");
    // }else{
    //     totalscorenumber +=crystal4;
    //     $("#total-score-number").text(totalscorenumber);
    //     console.log("cry4 + total :" + totalscorenumber);
    // }
   
});


//checking if the random nu and total score are equal
// function check(score){
//     if(randNum === score){
//         win++;
//         $("#wins").text(win);
//         console.log("YOu won");
//     }else{
//         lost++;
//         $("#losses").text(lost);
//         console.log("You lost");
//     }
// }

//  JQUERY4U = {
// 	multiply: function(x,y) {
// 		return (x * y);
// 	}
// }
// //function call
// JQUERY4U.multiply(2,2);