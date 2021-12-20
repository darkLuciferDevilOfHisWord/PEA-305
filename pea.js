let mainBox = document.getElementById("mainBox");
let calculator = document.getElementById("calculator");
calculator.addEventListener("click",()=>{
    mainBox.innerHTML = "";
})

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

let result = document.getElementById('result');

let afterResult = document.getElementById('afterResult');

let history1 = document.getElementById('history1');
let history2 = document.getElementById('history2');

let value1 = 0;
let value2 = 0;

let allow = 0;
let allow2 = 0;

let final = 0;

function preOp2(){ 
    if(input1.value.length > 0 && input2.value.length > 0){
        try {
            
            value1 = BigInt(input1.value);
            value2 = BigInt(input2.value);
            allow = 1; 

        } catch (error) {
            value1 = parseFloat(input1.value);
            value2 = parseFloat(input2.value);
            allow = 1;
            allow2 = 1;
        } 
    }
}

function preOp1(){
    if(input1.value.length > 0 ){
        try {
            
            value1 = BigInt(input1.value);
            allow = 1; 

        } catch (error) {
            value1 = parseFloat(input1.value);
            allow = 1;
            allow2 = 1;
        } 
    }
}


function insertOutput(){
    input1.value = final;
    input2.value = "";
    result.innerText = "";
    afterResult.innerHTML = `
    <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
    `;
    input2.focus();
}

function insertOutput2(){
    input1.value = "";
    input2.value = final;
    result.innerText = "";
    afterResult.innerHTML = `
    <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
    `;
    input2.focus();
}

function clearAll(){
    input1.value = "";
    input2.value = "";
    result.innerText = "";
    afterResult.innerHTML = "";
    history1.innerHTML = "";
}

function Add(){

    preOp2();
    if(allow == 1){
        final = value1+value2;
        result.innerText = `Add is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Set O/P in 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        <button type="button" class="btn btn-light" onclick="insertOutput2()">Set O/P in 2</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} + ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} + ${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}

function Sub(){

    preOp2();
    if(allow == 1){
        final = value1-value2;
        result.innerText = `Sub is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Set O/P in 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        <button type="button" class="btn btn-light" onclick="insertOutput2()">Set O/P in 2</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} - ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} - ${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}

function Mul(){

    preOp2();
    if(allow == 1){
        final = value1*value2;
        result.innerText = `Mul is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Set O/P in 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        <button type="button" class="btn btn-light" onclick="insertOutput2()">Set O/P in 2</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} X ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} X ${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}

function Div(){

    preOp2();
    if(allow == 1 && value2 != 0){
        final = parseFloat(value1)/parseFloat(value2);
        result.innerText = `Div is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Set O/P in 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        <button type="button" class="btn btn-light" onclick="insertOutput2()">Set O/P in 2</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} / ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} / ${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the non zero values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}

function Mod(){

    preOp2();
    if(allow == 1 && value2 != 0){
        final = value1%value2;
        result.innerText = `Mod is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Set O/P in 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        <button type="button" class="btn btn-light" onclick="insertOutput2()">Set O/P in 2</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} % ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} % ${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the non zero  values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}

function Fact(){

    preOp1();
    if(allow == 1 && allow2 != 1){
        let temp = BigInt(1);
        for(let i = value1; i > 0; i--){
            temp = BigInt(temp*i);
        }
        final = BigInt(temp);
        result.innerText = `Fact of value 1 is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Set O/P in 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        <button type="button" class="btn btn-light" onclick="insertOutput2()">Set O/P in 2</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">! ${value1} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">! ${value1} = ${final}</div> <hr>`;
    }
    else if(allow2 == 1){
        let temp = (1);
        for(let i = value1; i > 0; i--){
            temp = (temp*i);
        }
        final = (temp);
        result.innerText = `Fact of value 1 is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Set O/P in 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        <button type="button" class="btn btn-light" onclick="insertOutput2()">Set O/P in 2</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">! ${value1} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">! ${value1} = ${final}</div> <hr>`;
    

    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}

function Log(){

    preOp1();
    if(allow == 1){
        final = Math.log10(parseFloat(value1));
        result.innerText = `Log of value 1 is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Set O/P in 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        <button type="button" class="btn btn-light" onclick="insertOutput2()">Set O/P in 2</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">ln ${value1} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">ln ${value1} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}


function Lcm(){

    preOp1();
    if(allow == 1 && allow2 == 0){
        let temp = BigInt(value1);
        let temp2 = "";
        let i = BigInt(2);
        while(temp != 1){
            if(temp%i == 0){
                temp = BigInt(temp)/BigInt(i);
                temp2 += ` ${i}, `;
            }
            else{
                ++i;
            }
        }
        final = temp2;
        result.innerText = `LCM of value 1 is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Set O/P in 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        <button type="button" class="btn btn-light" onclick="insertOutput2()">Set O/P in 2</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">LCM ${value1} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">LCM ${value1} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}


function Exp(){

    preOp2(); console.log(allow2)
    if(allow == 1 && allow2 != 1){
        let temp = BigInt(value1);
        for(let i = 1; i < value2; i++){
            temp = BigInt(temp*value1)
        }
        if(value2 == 0){
            temp = BigInt(1);
        }
        final = BigInt(temp);
        result.innerText = `Exp is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Set O/P in 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        <button type="button" class="btn btn-light" onclick="insertOutput2()">Set O/P in 2</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} ^ ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} ^ ${value2} = ${final}</div> <hr>`;
    }
    else if(allow2  == 1){
        let temp = (value1);
        for(let i = 1; i < value2; i++){
            temp = (temp*value1)
        }
        final = (temp);
        result.innerText = `Exp is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Set O/P in 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        <button type="button" class="btn btn-light" onclick="insertOutput2()">Set O/P in 2</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} ^ ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} ^ ${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}





function Per(){

    preOp2();
    if(allow == 1 && allow2 == 0){
        let temp = BigInt(1);
        for(let i = value1; i > 0; i--){
            temp = BigInt(temp*i);
        }
        let temp1 = BigInt(temp);

        
        temp = BigInt(1);
        for(let i = value2; i > 0; i--){
            temp = BigInt(temp*i);
        }
        let temp2 = BigInt(temp);

        let temp3 = (temp1/temp2);
        final = temp3;
        result.innerText = `permutation is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Set O/P in 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        <button type="button" class="btn btn-light" onclick="insertOutput2()">Set O/P in 2</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;"> ${value1}P${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;"> ${value1}P${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}




function Com(){

    preOp2();
    if(allow == 1 && allow2 == 0){
        let temp = BigInt(1);
        for(let i = value1; i > 0; i--){
            temp = BigInt(temp*i);
        }
        let temp1 = BigInt(temp);

        
        temp = BigInt(1);
        for(let i = value2; i > 0; i--){
            temp = BigInt(temp*i);
        }
        let temp2 = BigInt(temp);

        
        temp = BigInt(1);
        for(let i = value1-value2; i > 0; i--){
            temp = BigInt(temp*i);
        }
        let temp3 = BigInt(temp);

        let temp4 = (temp1/(temp2*temp3));
        final = temp4;
        result.innerText = `Combination is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Set O/P in 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        <button type="button" class="btn btn-light" onclick="insertOutput2()">Set O/P in 2</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;"> ${value1}C${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1}C${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}
