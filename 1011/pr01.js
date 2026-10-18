// bmi 구하기

// let weight = Number(prompt('몸무게 입력(kg)'));
// let height = Number(prompt('신장 입력(m)'));
// let bmi = weight / (height ** 2);

// console.log(parseInt(bmi));

// 삼항 연산자
// 사용자가 시험 점수를 입력하고, 점수가 80이상이면 합격 그렇지 않으면 불합격 출력

// let exampleScore = Number(prompt('본인 시험 점수 입력'));
// let resultMessage = Number(exampleScore) >= 80 ? '합격' : '불합격';
// console.log(`resultMessage: ${resultMessage}`);

// for(var i = 1; i < 11; i++) {
//     console.log('hello', i);
// }

// 1단부터 9단까지 전체 구구단 출력

// for(let gugu = 1; gugu < 10; gugu++) {
//     for(let i = 1; i < 10; i++) {
//         console.log(`${gugu} * ${i} = ${gugu * i}`);
//     }
// }

// 구구단 2~9단 가로로 출력

// for(let i = 1; i < 10; i++) {
//     let result = '';
//     for(let j = 2; j < 10; j++) {
//         result += `${j} * ${i} = ${j * i} \t`;
//     }
//     console.log(result);
// }

// while문 
// let i = i;
// while(i < 11) {
//     console.log(`i: ${i}`);
// }

// 날짜 출력하기
let now = new Date();
console.log(`now: ${now}`);

let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let day = now.getDay();

let dayString = '';
switch(day) {
    case 1:
        console.log('월요일');
        dayString = '월';
        break;
    case 2:
        console.log('화요일');
        dayString = '화';
        break;
    case 3:
        console.log('수요일');
        dayString = '수';
        break;
    case 4:
        console.log('목요일');
        dayString = '목';
        break;
    case 5:
        console.log('금요일');
        dayString = '금';
        break;
    case 6:
        console.log('토요일');
        dayString = '토';
        break;
    case 0:
        console.log('일요일');
        dayString = '일';
        break;
}
// 오늘날짜
console.log(`${year}년 ${month+1}월 ${date}일 ${dayString}요일`);

// // 공적마스크 구매 프로그램 다시하기
// let endBirthYear = Number(prompt('출생연도 끝자리 입력:'));
// let age = Number(prompt('나이 입력'));

// if (age < 65) {
//     if(endBirthYear === 1 || endBirthYear === 6) {
//         console.log('월요일 구매 가능!!');
//     } else if(endBirthYear === 2 || endBirthYear === 7) {
//         console.log('화요일 구매 가능!!');
//     } else if(endBirthYear === 3 || endBirthYear === 8) {
//         console.log('수요일 구매 가능!!'); 
//     } else if(endBirthYear === 4 || endBirthYear === 9) {
//         console.log('목요일 구매 가능!!');
//     } else if(endBirthYear === 5 || endBirthYear === 0) {
//         console.log('금요일 구매 가능!!');
//     } 
// } else {
//     alert('언제든지 구매가능!!');
// }

// 전기 요금 계산기 다시 풀기
// let kwh = Number(prompt('전기 사용량 입력(kwh)'));


// if(kwh <= 200) {
//     var danGa = 99.3;
//     var giBon = 910;
// } else if(kwh <= 400) {
//     var danGa = 187.9;
//     var giBon = 1600;
// } else {
//     var danGa = 280.6;
//     var giBon = 7300;
// }

// let myHomeKwh = danGa * kwh + giBon
// console.log(myHomeKwh);

// 매개변수-가변인자

function printTotalAndAverageScore(...student) {
    console.log(`student: ${student}`);
    console.log(`student: ${student.length}`);

    var totalScore = 0;
    for (var i = 0; i < student.length; i++) {
        console.log(student[i]);
        totalScore += student[i];
    }

    var averageScore = totalScore / student.length;

    console.log(`총점 : ${totalScore}`);
    console.log(`평점 : ${averageScore}`);
}

printTotalAndAverageScore(80, 90, 100, 80);

