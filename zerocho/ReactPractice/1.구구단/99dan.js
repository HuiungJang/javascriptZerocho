'use strict';
const $body = document.querySelector('html');

const container = document.createElement("div");
$body.appendChild(container);

const $h2 =document.createElement("h2");
container.appendChild($h2);

let num1 = Math.ceil(Math.random()*9)+1;
let num2 = Math.ceil(Math.random()*9)+1;
let numResult = num1*num2;


$h2.innerText =`${num1} 곱하기 ${num2} 는?`;

const $input = document.createElement("input");
$input.setAttribute("type","number");
container.appendChild($input);


const $button =document.createElement("button");
$button.setAttribute("id","clickBtn");
$button.innerText="클릭";
container.appendChild($button);

const result =document.createElement("h2");
container.appendChild(result);




document.getElementById("clickBtn").addEventListener("click",()=>{
  let inputText = $input.value;


  if(parseInt(inputText) === numResult){
    num1 =Math.ceil(Math.random()*9);
    num2 =Math.ceil(Math.random()*9);
    numResult = num1*num2;

    $h2.innerText=`${num1} 곱하기 ${num2} 는?`
    result.innerText="정답입니다.";
    $input.value='';
    $input.focus();

  }else{
    $h2.innerText=`${num1} 곱하기 ${num2} 는?`;
    result.innerText="틀렸습니다.";
    $input.value='';
    $input.focus();
  }
});

