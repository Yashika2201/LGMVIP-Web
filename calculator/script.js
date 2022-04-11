function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    try{
        var p = document.getElementById("result").value;
        var q = eval(p);
        document.getElementById("result").value = q;
    }
    catch(err){
        alert("Invalid Format \nKindly check again")
    }
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteNum(){
    document.getElementById("result").value = document.getElementById("result").value.slice(0,-1);
    
}