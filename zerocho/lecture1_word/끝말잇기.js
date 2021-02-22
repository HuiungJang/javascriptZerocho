// 자바스크립트로 HTML 태그 만들기
let 바디 = document.body;
let 단어 = document.createElement('div');
단어.textContent = '제로초';
// 여기까지만 하면 브라우저는 바디라는 변수를
// 기억은 하지만 표시는 하지 않는다.

document.body.append(단어);
// body부분에 기억만 하지말고 추가를 해라.
// append -> 태그 추가.

// 키보드 엔터로 입력누르기
let 폼 = document.createElement('form');
document.body.append(폼);

let 입력창 = document.createElement('input');
// createElement함수로 새로 만들었으면
// 항상 추가를 해줘야한다.
//document.body.append(입력창);

폼.append(입력창);
// 키보드 엔터로 click 대신하기

let 버튼 = document.createElement('button');
버튼.textContent = '입력!';
//document.body.append(버튼);

폼.append(버튼);
// 키보드 엔터로 click 대신하기

// js로 html을 만들수는 있지만 비효율적이라서
// 보통 안만든다.
// textContent

// 버튼안에 들어가는 텍스트
let 결과창 = document.createElement('div');
document.body.append(결과창);

//버튼.addEventListener('click',function 콜백함수() {

폼.addEventListener('submit',function 콜백함수(e) {
    // 폼을 submit(엔터) 한것
    // 기본적으로 엔터를 누르면 새로고침 혹은 다른 페이지로 간다.
    e.preventDefault();
    //  preventDefault -> 기본적으로 하는거(새로고침) 하지마!!

    // ventListener -> 반복문 느낌
    if(단어.textContent[단어.textContent.length-1] === 입력창.value[0]){
        // 입력창.value === 초밥
        // 태그에 들어가는 글자는 textContent
        // input 같은거에 들어가는 것이 value
        결과창.textContent = '딩동댕';
        단어.textContent = 입력창.value;
        입력창.value = '';
        // 입력창 값 지우기
        입력창.focus();
        // 입력창에 계속 깜박거리도록

    }else{
        결과창.textContent = '땡';
        입력창.value = '';
        입력창.focus();
    }

});


// let word = '제로초'
// let stop = true
// while(stop){
//     let answer = prompt(word);
//     if(word[word.length-1] === answer[0]){
//         alert('딩동댕')
//         word = answer
//     } else{
//         alert('땡')
//         alert('종료합니다')
//         stop = false
//     }
// }