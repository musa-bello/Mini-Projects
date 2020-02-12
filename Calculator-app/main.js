let screen = document.querySelector('#input');
let result = document.getElementById('result');
let equal = document.querySelector('.operator');
let buttons = document.querySelectorAll('.digit');
let extraBtns = document.querySelectorAll('.clear');

function getOutPut(_num) {
    return screen.value;
}

function display(num) {
        return result.textContent = num;
}
    
// event listener for numbers and operators
buttons.forEach(function(button){ 
    button.addEventListener ('click', (e) =>{
        let value = e.target.dataset.num;
        console.log(value);
        screen.value += value;
        
    })
});
    
/* 
event listener for clear, backspace, pi and sqrt
added functionality and error handling
*/
let output;
extraBtns.forEach(function(button){ 
    button.addEventListener ('click', (e) =>{
        let value = e.target.dataset.key;
        console.log(value);
        if (value === "clear") {
            screen.value = "";
            display("");
        } else if (value === "del"){
            output = getOutPut().toString();
            output = output.substr(0, output.length-1);
            screen.value = output;
        } else if (value === "pi"){
            output = getOutPut();
            if (output !== "") {
                output = Math.PI*(output);
                display(output);
            }
        } else {
            output = getOutPut();
            if (output != NaN) {
                output = Math.sqrt(output);
                display(output);
            }  
        }     
    })
});

equal.addEventListener('click', ()=>{
    let answer = eval(screen.value);
    display(answer);
}); 

