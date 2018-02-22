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

function won(){
    $("#total-score-number").text(totalscorenumber);
    $("#won").text(" YOU WON ");
    setTimeout(function(){
     alert("You win");
     },500);
     win++;    
     setTimeout(reset,1000);
     $("#wins").text(win);
}
function loss(){
    $("#total-score-number").text(totalscorenumber);
    $("#won").text("YOU LOST");
    setTimeout(function(){
        alert("You lost");
    },500);
    lost++;
    setTimeout(reset,1000);
    $("#losses").text(lost);
}

$(document).ready(function () {
    //random number btween 19 to 120

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


    if(randNum >totalscorenumber){
        totalscorenumber +=crystal1;
        $("#total-score-number").text(totalscorenumber);
        console.log("cry1 + total :" + totalscorenumber);

        if(randNum === totalscorenumber){
            won();
        }else if(randNum < totalscorenumber) {
            loss();
        }
    }
    

});
$(".crystalClick2").on("click", function() {
    $("#total-score-number").text(totalscorenumber);

    if(randNum >totalscorenumber){
        totalscorenumber +=crystal2;
        $("#total-score-number").text(totalscorenumber);
        if(randNum === totalscorenumber){
            won();
        }else if(randNum < totalscorenumber) {
            loss();
        }
    }
    
});
$(".crystalClick3").on("click", function() {
    $("#total-score-number").text(totalscorenumber);

    if(randNum >totalscorenumber){
        totalscorenumber +=crystal3;
        $("#total-score-number").text(totalscorenumber);
        if(randNum === totalscorenumber){
            won();
        }else if(randNum < totalscorenumber) {
            loss();
        }
    }
    
});
$(".crystalClick4").on("click", function() {
    $("#total-score-number").text(totalscorenumber);


    if(randNum >totalscorenumber){
        totalscorenumber +=crystal4;
        $("#total-score-number").text(totalscorenumber);
        if(randNum === totalscorenumber){
            won();
        }else if(randNum < totalscorenumber) {
            loss();
        }
    }

   
});


