let boardNumbers = [];
var listBoard


document.addEventListener("DOMContentLoaded", function(event) { 
    for(let i = 0; i < 81; i++){

        let node = document.createElement("li");
        node.innerHTML = "<span></span>";
        
        document.getElementById("board").appendChild(node);
        }
        
        init();

});

function init(){
    listBoard = document.getElementById("board").getElementsByTagName("li");

    for(let i = 0; i < 81; i++)
    {
        let rand = Math.ceil(Math.random() *9);
        listBoard[i].innerHTML = rand;
    }

}//end of init

function SudukoGenerator(){

}