console.log('Welcome to Tic Tac Toe');

let music = new Audio("music/music.mp3");
let audioturn = new Audio("music/ting.mp3");
let gameover = new Audio("music/gameover.mp3");
let turn = "X";
let isgameover = false;

//function to change turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

//function to check for a win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "  won"
            isgameover = true;
            gameover.play();
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })

}

//Game logic

const boxes = document.getElementsByClassName('Box');
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        music.play();
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkwin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for    " + turn;
        }

        }
    })
})

//Add onclick listener to reset button

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });

    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for    " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
})