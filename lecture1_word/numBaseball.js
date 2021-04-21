let body = document.body;

let num;
let numAry;
let count =0;

function baseball() {
    num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numAry = [];
    for (let i = 0; i < 4; i++) {
        let selectN = num.splice(Math.floor(Math.random()*(9-i)),1)[0];
        numAry.push(selectN);
    }
}

baseball();
console.log(numAry);

// for (let i =0; i<4; i++){
//     // let selectN = num.pop();
//     // 마지막 것을 하나씩 뽑는 것.
//     // 원래 배열에서 숫자는 사라짐
//
//     // let selectN = num.shift();
//     // 앞에서부터 하나씩 뽑음
//     // 원래 배열에서 숫자는 사라짐
//
//
//     // let selectN = num.splice(3,1);
//     // splice(위치,개수)
//     // 3부터 1개를 뽑고 싶다.
//     // 추출된 숫자는 배열로 저장됨
//
//     let selectN = num.splice(Math.floor(Math.random()*(9-i)),1)[0];
//     // 0~9 랜덤값을 1개 뽑아서 배열로 저장함
//     // 배열로 뽑힌 값의 첫번째 값을 뽑으면 됨.
//     // -> [0]
//
//     // Maht.Floor 쓴 이유 -> 자리수를 선택해야하니까
//     // 만약 ceil로 올림사용하면 9번쨰자리 다음부터 1개니까 뽑힐 수 가 없음
//
//     // undefined가 나오는 이유?
//     // 랜덤값 돌려져서 8번째 자리에서 1개를 뽑았는데
//     // 다음에 또 랜덤값 돌려져서 8번째 자리에서 1개를 뽑으면 값이 존재하지 않는다.
//     // -> 자리수를 한개씩 줄여서 뽑는다 (9-i)
//
//
//      numAry.push(selectN);
//     // 앞에서 부터 하나씩 넣음
//
//     // 앞에서부터 하나씩 뽑아서 역순으로 넣음.
//     // 1부터 9까지 뽑으면
//     // 1 -> 2,1->3,2,1 순서대
// }

// console.log(numAry);
// 숫자 배열이 나오는지 확인


let result = document.createElement('h1');
body.appendChild(result);

let form = document.createElement('form');
document.body.append(form);

let input = document.createElement('input');
input.type = 'number';
input.maxLength=4;
// 최대 4자리까지만 가능하게함.
form.append(input);

let button = document.createElement('button');
button.textContent ='입력';
form.append(button);

// let resultView =document.createElement('div');
// document.body.append(resultView);


form.addEventListener('submit',function 비동기(e){
    // submit 의 기본동작은 새로고침이다
    e.preventDefault();
    // 기본동작인 새로고침을 막는 것.

    let answer = input.value;
    // join()
    // 배열에 들어있는 값을 합쳐주는 메서
    // let ex =  [2,9,0,1];
    // ex.join('') -> 2901
    // ex.join(',') -> 2,9,0,1
    // ex.join(':') -> 2:9:0:1

    // spilt()
    // 문자열을 배열로 바꿔줌 join과 반대드
    // let num = '9650';
    // num.split(''); -> ['9','6','5','0']


    if (answer === numAry.join('')) {
        // 답이 맞으면
        result.textContent = 'HOMERUN';
        input.value = '';
        input.focus();

        // num =[1,2,3,4,5,6,7,8,9];
        // numAry = [];
        // for (let i =0; i<4; i++) {
        //     let selectN = num.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        //     numAry.push(selectN);
        // }
        baseball();
        count =0;
    } else {
        //  답이 틀리면
        let answerArr = answer.split('');
        let strike = 0;
        let ball = 0;

        count+=1;

        if (count > 4) {
            result.textContent = '4번 넘어서 실패 ! 답은 >>>>' + answerArr.join(',');
            input.value = '';
            input.focus();

            baseball();
        } else {

            for (let i = 0; i < 3; i += 1) {
                if (Number(answerArr[i]) === numAry[i]) {
                    strike += 1;
                    // 같은 자리인지 확인
                } else if (numAry.indexOf(Number(answerArr[i])) > -1) {
                    // 같은 자리는 아니지만 숫자가 겹치는지 확인

                    ball += 1;
                    // indexOf()
                    // 배열에서 사용가능.
                    // 값이 있으면 값이 있는 인덱스 번호를 리턴해줌
                    // 없으면 -1 리턴.
                }

                result.textContent = strike + ' STRIKE' + ball + ' BALL입니다.';
                input.value = '';
                input.focus();
            }
        }

    }

});

// 반복되는 코드는 최대한 줄여주는 것이 좋다.
