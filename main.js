counter = 0


function AddToCounter() {
    document.getElementById("Tally").innerHTML = counter += 1;
}

function TakeFromCounter() {
    if (counter == 0) {
        counter = 0
    }else{
        document.getElementById("Tally").innerHTML = counter -= 1;
    }


    }
    