let images = [
   ' <img id=0 src="images/rock.png" alt="rock" style="height: 200px; width: 200px;" onclick="myChoice(this)">',
    ' <img id=1 src="images/paper.png" alt="paper" style="height: 200px; width: 200px;" onclick="myChoice(this)">',
    '<img id=2 src="images/scissors.png" alt="scissors" style="height: 200px; width: 200px;" onclick="myChoice(this)"></img>'
]

 document.getElementById('box').innerHTML = images;

//myChoice-onclick
function myChoice(myPick){
let humanChoice = images[myPick.id];
let yourChoice = Number(myPick.id);

//botChoice-randomize
let botNumber = Math.floor(Math.random()*3)
let botChoice = images[botNumber];
let compChoice = botNumber;
 
//result
let result = [yourChoice, compChoice];
console.log(result);

//displayResult
if(result.toString() === "1,0" || result.toString() === "2,1" || result.toString() === "0,2"){
    let Text = "<p style= 'color:blue;height:150px;margin-top:70px;justify-content:center;font-family:\"Fruktur\", system-ui;font-size: 50px; '> You win! </p> ";
    document.getElementById('box').innerHTML = humanChoice + Text + botChoice;
} else if(result.toString() === "1,1" || result.toString() === "2,2" || result.toString() === "0,0"){
    let Text = "<p style= 'color:yellow;height:150px;margin-top:70px;justify-content:center;font-family:\"Fruktur\", system-ui;font-size: 50px; '> You tie! </p> ";
    document.getElementById('box').innerHTML = humanChoice + Text + botChoice;
} else{
    let Text = "<p style= 'color:red;height:150px;margin-top:70px;justify-content:center;font-family:\"Fruktur\", system-ui;font-size: 50px; '> You lose! </p> ";
    document.getElementById('box').innerHTML = humanChoice + Text + botChoice;
}

}

function reset() {
    document.getElementById('box').innerHTML = images;
}


