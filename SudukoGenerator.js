let boardNumbers = [];
var listBoard


document.addEventListener("DOMContentLoaded", function(event) { 

    init();

});

function init(){
    listBoard = document.getElementById("board").getElementsByTagName("li");

    for(let i = 0; i < 81; i++)
    {
        //listBoard[i].innerHTML = i;
    }

}

function SudukoGenerator(){

}