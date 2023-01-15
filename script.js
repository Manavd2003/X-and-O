console.log("Welcome to Tic Tac Toe")
let turn = "X"

changeTurn = ()=>{
return turn === "X"? "O" : "X"
}

checkWin = () => {

}


    let boxes = document.getElementsByClassName("un");
    Array.from(boxes).forEach(element =>{
        let boxtext = element.querySelector('.b1');
        element.addEventListener('click', ()=>{
            if(boxtext.innerText === ""){
                boxtext.innerText = turn;
                changeTurn();
                checkWin();
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }

        })
    })
