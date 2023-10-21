let c=0;//global variable for keeping track of number of clicks
let w=1;//global variable to check if game over or not
function winordraw(idvalue)//check for every input if anyone has won or not
{
    if(w==1)
    {
        c = c + 1;
        if (c % 2 == 0) {
            if (document.getElementById(idvalue).innerHTML == "0" || document.getElementById(idvalue).innerHTML == "X") {
                console.log("inside if if");
                c = c - 1;
            } else {
                document.getElementById(idvalue).style.color = "yellow";
                document.getElementById(idvalue).innerHTML = "O";
                document.getElementById(idvalue).value = "O";
            }
        } else {
            if (document.getElementById(idvalue).innerHTML == "O" || document.getElementById(idvalue).innerHTML == "X") {
                console.log("inside  else if");
                c = c - 1;
            } else {
                document.getElementById(idvalue).style.color = "brown";
                document.getElementById(idvalue).innerHTML = "X";
                document.getElementById(idvalue).value = "X";
            }
        }

        let b1 = document.getElementById("block1").value;
        let b2 = document.getElementById("block2").value;
        let b3 = document.getElementById("block3").value;
        let b4 = document.getElementById("block4").value;
        let b5 = document.getElementById("block5").value;
        let b6 = document.getElementById("block6").value;
        let b7 = document.getElementById("block7").value;
        let b8 = document.getElementById("block8").value;
        let b9 = document.getElementById("block9").value;
        if ((b1 == "X") && (b2 == "X") && (b3 == "X")) {
            document.getElementById("para").innerHTML = "Player one wins";
            w=0;
            document.getElementById("block1").style.backgroundColor = "green";
            document.getElementById("block2").style.backgroundColor = "green";
            document.getElementById("block3").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b1 == "X") && (b4 == "X") && (b7 == "X")) {
            document.getElementById("para").innerHTML = "Player one wins";
            w=0;
            document.getElementById("block1").style.backgroundColor = "green";
            document.getElementById("block4").style.backgroundColor = "green";
            document.getElementById("block7").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b1 == "X") && (b5 == "X") && (b9 == "X")) {
            document.getElementById("para").innerHTML = "Player one wins";
            w=0;
            document.getElementById("block1").style.backgroundColor = "green";
            document.getElementById("block5").style.backgroundColor = "green";
            document.getElementById("block9").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b2 == "X") && (b5 == "X") && (b8 == "X")) {
            document.getElementById("para").innerHTML = "Player one wins";
            w=0;
            document.getElementById("block2").style.backgroundColor = "green";
            document.getElementById("block5").style.backgroundColor = "green";
            document.getElementById("block8").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b3 == "X") && (b6 == "X") && (b9 == "X")) {
            document.getElementById("para").innerHTML = "Player one wins";
            w=0;
            document.getElementById("block3").style.backgroundColor = "green";
            document.getElementById("block6").style.backgroundColor = "green";
            document.getElementById("block9").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b7 == "X") && (b8 == "X") && (b9 == "X")) {
            document.getElementById("para").innerHTML = "Player one wins";
            w=0;
            document.getElementById("block7").style.backgroundColor = "green";
            document.getElementById("block8").style.backgroundColor = "green";
            document.getElementById("block9").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b7 == "X") && (b5 == "X") && (b3 == "X")) {
            document.getElementById("para").innerHTML = "Player one wins";
            w=0;
            document.getElementById("block7").style.backgroundColor = "green";
            document.getElementById("block5").style.backgroundColor = "green";
            document.getElementById("block3").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b4 == "X") && (b5 == "X") && (b6 == "X")) {
            document.getElementById("para").innerHTML = "Player one wins";
            w=0;
            document.getElementById("block4").style.backgroundColor = "green";
            document.getElementById("block5").style.backgroundColor = "green";
            document.getElementById("block6").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b1 == "O") && (b2 == "O") && (b3 == "O")) {
            document.getElementById("para").innerHTML = "Player two wins";
            w=0;
            document.getElementById("block1").style.backgroundColor = "green";
            document.getElementById("block2").style.backgroundColor = "green";
            document.getElementById("block3").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b1 == "O") && (b4 == "O") && (b7 == "O")) {
            document.getElementById("para").innerHTML = "Player two wins";
            w=0;
            document.getElementById("block1").style.backgroundColor = "green";
            document.getElementById("block4").style.backgroundColor = "green";
            document.getElementById("block7").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b1 == "O") && (b5 == "O") && (b9 == "O")) {
            document.getElementById("para").innerHTML = "Player two wins";
            w=0;
            document.getElementById("block1").style.backgroundColor = "green";
            document.getElementById("block5").style.backgroundColor = "green";
            document.getElementById("block9").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b2 == "O") && (b5 == "O") && (b8 == "O")) {
            document.getElementById("para").innerHTML = "Player two wins";
            w=0;
            document.getElementById("block2").style.backgroundColor = "green";
            document.getElementById("block5").style.backgroundColor = "green";
            document.getElementById("block8").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b3 == "O") && (b6 == "O") && (b9 == "O")) {
            document.getElementById("para").innerHTML = "Player two wins";
            w=0;
            document.getElementById("block3").style.backgroundColor = "green";
            document.getElementById("block6").style.backgroundColor = "green";
            document.getElementById("block9").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b7 == "O") && (b8 == "O") && (b9 == "O")) {
            document.getElementById("para").innerHTML = "Player two wins";
            w=0;
            document.getElementById("block7").style.backgroundColor = "green";
            document.getElementById("block8").style.backgroundColor = "green";
            document.getElementById("block9").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b7 == "O") && (b5 == "O") && (b3 == "O")) {
            document.getElementById("para").innerHTML = "Player two wins";
            w=0;
            document.getElementById("block7").style.backgroundColor = "green";
            document.getElementById("block5").style.backgroundColor = "green";
            document.getElementById("block3").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b4 == "O") && (b5 == "O") && (b6 == "O")) {
            document.getElementById("para").innerHTML = "Player two wins";
            w=0;
            document.getElementById("block4").style.backgroundColor = "green";
            document.getElementById("block5").style.backgroundColor = "green";
            document.getElementById("block6").style.backgroundColor = "green";
            document.getElementById("Playagain").hidden = false;
        } else if ((b1 == "O" || b1 == "X") && (b2 == "O" || b2 == "X") && (b3 == "O" || b3 == "X") && (b4 == "O" || b4 == "X") && (b5 == "O" || b5 == "X") && (b6 == "O" || b6 == "X") && (b7 == "O" || b7 == "X") && (b8 == "O" || b8 == "X") && (b9 == "O" || b9 == "X")) {
            document.getElementById("para").innerHTML = "Match Draw";
            w=0;
            document.getElementById("Playagain").hidden = false;
        }
    }
}

function newgame()//reset all and begin a new game
{
    document.getElementById("block1").innerHTML="";
    document.getElementById("block2").innerHTML="";
    document.getElementById("block3").innerHTML="";
    document.getElementById("block4").innerHTML="";
    document.getElementById("block5").innerHTML="";
    document.getElementById("block6").innerHTML="";
    document.getElementById("block7").innerHTML="";
    document.getElementById("block8").innerHTML="";
    document.getElementById("block9").innerHTML="";

    document.getElementById("block1").style.backgroundColor="white";
    document.getElementById("block2").style.backgroundColor="white";
    document.getElementById("block3").style.backgroundColor="white";
    document.getElementById("block4").style.backgroundColor="white";
    document.getElementById("block5").style.backgroundColor="white";
    document.getElementById("block6").style.backgroundColor="white";
    document.getElementById("block7").style.backgroundColor="white";
    document.getElementById("block8").style.backgroundColor="white";
    document.getElementById("block9").style.backgroundColor="white";

    document.getElementById("block1").value="";
    document.getElementById("block2").value="";
    document.getElementById("block3").value="";
    document.getElementById("block4").value="";
    document.getElementById("block5").value="";
    document.getElementById("block6").value="";
    document.getElementById("block7").value="";
    document.getElementById("block8").value="";
    document.getElementById("block9").value="";
    c=0;
    w=1;
    document.getElementById("para").innerHTML="";
    document.getElementById("Playagain").hidden=true;
}