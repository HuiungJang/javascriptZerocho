let num1= Math.ceil(Math.random()*9);
let num2= Math.ceil(Math.random()*9);
let result = num1* num2;

var body = document.body;
var word = document.createElement('div');
word.textContent= String(num1)+'곱하기'+String(num2)+'는?';
document.body.append(word);

var form = document.createElement('form');
document.body.append(form);

var input = document.createElement('input');
form.append(input);

var button = document.createElement('button');
button.textContent='제출';
form.append(button);

var resultView = document.createElement('div');
document.body.append(resultView);

form.addEventListener('submit',function call(e){
   e.preventDefault();
   if(result === Number(input.value)) {
       resultView.textContent = '정답';

       num1= Math.ceil(Math.random()*9);
       num2= Math.ceil(Math.random()*9);
       result = num1* num2;
       word.textContent= String(num1)+'곱하기'+String(num2)+'는?';

       input.value='';
       input.focus();
   }else{
       resultView.textContent='땡';
       input.value='';
       input.focus();
   }
});

// while(true){
//     let num1= Math.ceil(Math.random()*9);
//     let num2= Math.ceil(Math.random()*9);
//     let result = num1* num2;
//     let condition = true;
//     while(condition){
//         let answer = prompt(String(num1))+'곱하기'+String(num2)+'는?';
//         if(result === Number(answer)){
//             alert('정답');
//             condition =false;
//         }else{
//             alert('땡');
//         }
//     }
// }
