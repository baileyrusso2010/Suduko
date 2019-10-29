let boardNumbers = [];
var listBoard;

window

//on load
document.addEventListener("DOMContentLoaded", function(event) { 
    
    for(let i = 0; i < 81; i++){

        //creates the innerhtml
        let node = document.createElement("li");
        node.innerHTML = "<span></span>";
        

        document.getElementById("board").appendChild(node);
        
    }
        //initialize variables
        init();

});

function init(){
    listBoard = document.getElementById("board").getElementsByTagName("li");

    for(let i = 0; i < 81; i++)
    {
        let rand = Math.ceil(Math.random() *9);//random number
        boardNumbers.push(rand);//puts numbers into list
        
        listBoard[i].innerHTML = rand;//updates html
    }

}//end of init

function isInRow(row, number){
    /*
    check if the number 
    is already in the row
    */

    let rowNumber = row * 9;//will get number to start at

    if(rowNumber != 0)
        rowNumber++;

    for(let i = 0; i < 9; i++){
        if(boardNumbers[rowNumber+i] == number)
        {
            return true;
        }
    }
    return false;
}//end of isInRow

function isInCol(col, number){
    /*
    check if the number 
    is already in the col
    */

    for(let i = 0; i < 9; i++){
        if(boardNumbers[col + i*9] == number)
        {
            return true;
        }
    }
    return false;
}//end of isInCol

function isInBox(row, col, number){

    /*
    Check to see if
    the number occurs
    within the box
    */
    let r = row - row %3;
    let c = col - col % 3;
    
    //let index = boardNumbers[(row *9) + col];//get index

    let startingPoint = r*9 + c;

    for(let i = 0; i < 3; i++){

        for(let j = 0; j < 3; j++){

            if(boardNumbers[startingPoint+j] == number){
                return true;
            }
        }
        r++;
        startingPoint = r * 9 + c;
    }

    return false;

}//end of isInBox

function GoodNumber(row, col, number){
    return !isInRow(row,number) && !isInCol(col, number) && !isInBox(row, col, number)
}