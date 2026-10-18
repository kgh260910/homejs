var obj1 = {
    myName: 'gildong'
}

var obj2 = { ...obj1 }

obj1.myName = 'chanho';
obj2.myName = 'JaeHoon';

console.log('obj1: ', obj1);
console.log('obj2: ', obj2);

console.log('----------------------------------');

const PI = 3.14;

const userNameID = {
    nameID: "홍길동",
    age: 25
}

console.log('userNameID: ', userNameID);

userNameID.nameID = "박찬호";

console.log('userNameID: ', userNameID);

console.log('----------------------------------');

// Q) 신체질량지수(BMI)구하기
// 사용자가 몸무게, 신장을 입력하면 신체질량지수(BMI)를 계산해주는 프로그램을 만들자!
// BMI = 몸무게(kg) / 신장(M)의 제곱

// var weight = Number(prompt('몸무게(kg) 입력: '));
// var height = Number(prompt('신장(cm) 입력: '));
// var bmi = weight / ((height / 100 ) ** 2);
// console.log(`BMI: ${bmi}`);

// Q) 빵을 나누어 줄 수 있는 학생 수 구하기
//  길동이는 97개의 빵을 3개씩 같은 반의 친구들에게 나누어 주려고 합니다.
//  최대 몇 명에게 나누어 줄 수 있는지 구하고, 남는 빵의 개수도 구해봅시다.
var bread = 97;
var cnt = 3;
var maxStudentCnt = bread / cnt;
var restBread = bread % cnt;
console.log(`최대몇명: ${parseInt(maxStudentCnt)}`);
console.log(`남는빵: ${restBread}`);

console.log('----------------------------------');
// Q) 전염병 예상 감염자 수 구하기
//    보건 당국은 전염병의 감염 확산 추세를 파악한 결과,
//    하루에 한 사람이 한 명씩 감염시키는 것으로 나타났습니다.
//    확진자 한 사람이 나올 경우 30일 이후 몇 명의 감염자가 나오는지 계산해 봅시다.

var man = 2; //첫날에 두명
var date = 30;
var total = man ** date;
console.log(`total: ${total.toLocaleString('ko-KR')}`);

console.log('----------------------------------');

// 대입 연산자, 복합대입연산자
var num5 = 10;
num5 +=  5;
console.log(num5);  // 15
num5 -= 5;
console.log(num5);  // 10
num5 *= 5;
console.log(num5);  // 50
num5 /= 5;
console.log(num5);  // 10
num5 %= 5;
console.log(num5);  // 0
console.log('----------------------------------');

//Q) 범퍼카 탑승 가능 판별하기
// 놀이동산에서 범퍼카는 신장이 120cm 이상인 어린이만 탑승할 수 있습니다.
// 신장을 입력하면 범퍼카를 탑승할 수 있는지 여부를 알려주는 프로그램을 만들어 봅시다.
// 탑승가능은 true로 불가능은 false로 출력한다.

// var height = Number(prompt('키를 입력하세요.'));
// console.log(`탑승가능 여부: ${height >= 120}`);

// Q) 컴퓨터와 홀짝 게임을 해보자!
// var random = Math.random();
// random = parseInt(random * 10);

// var userSelectedNumber = Number(prompt('1.짝     2.홀'));
// console.log(`WIN: ${random % 2 === 0  && userSelectedNumber === 1}`);
// console.log(`WIN: ${random % 2 !== 0  && userSelectedNumber === 2}`);
// console.log(`LOSE: ${random % 2 === 0  && userSelectedNumber === 2}`);
// console.log(`LOSE: ${random % 2 !== 0  && userSelectedNumber === 1}`);

// console.log(`random: ${random}`);
// console.log(`userSelectedNumber: ${userSelectedNumber}`);

// 자동 증감 연산자 : ++ , --;
var score = 80;
score++;
console.log(score); //81
score--;
console.log(score); //80

var myScore = 90;
// var result = myScore++; 
// console.log(result); // 90

var result = ++myScore;
console.log(result); // 91

// 삼항 연산자 : 3개의 항을 사용하는 연산자, 조건 ? 값1 : 값2 
var resultVar = (5 > 1) ? '5는 1보다 크다' : '5는 1보다 크지 않다';
console.log(resultVar);

// Q) 사용자가 시험 점수를 입력하고, 점수가 80이상이면 합격 그렇지 않으면 불합격 출력하자!
var exampleScore = Number(prompt('시험 점수 입력:'));
var resultMessage = exampleScore >= 80 ? '합격' : '불합격';
console.log(resultMessage);


