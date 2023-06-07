// 위니브 정규표현식 책 : https://www.notion.so/paullabworkspace/1c57fc683c33468d95e7a490b6f66c95?pvs=4
// 좋은 글 : https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC


'paullab CEO leehojun hello CEO'
// 문자열 1개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO')
// flag로 global을 주어서 전체 변경(m-다중라인, i-대소문자구분X)
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO')
// 패턴을 찾아 Array로 반환
'paullab CEO leehojun hello CEO'.match(/CEO/g)
// 패턴으로 Split
'paullab CEO leehojun hello CEO'.split(/CEO/g)

// 패턴이 들어가 있으면 true 없으면 false
//(/CEO/g).test('paullab CEO leehojun hello CEO')

// 알고리즘 문제 풀이할 때 주의 사항
// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다
'!a!abc!abcd'.split('!')
'!!!'.split('!') // 4개
'!a!a!a'.split('!') // 4개
'a!a!a!'.split('!') // 4개

'!a!a!a'.split('!').length - 1


// 1번과 2번은 환경설정입니다.
// 위니브 책 기반한 요약입니다.

// 3. 일반문자열
// / hello / g

// 4. 처음과 끝
// /^ hello / g
// / hello$ / g
// /^ hello$ / g

// 5. 모든문자 매핑(.)
// / hello / g
// / h.llo / g
// / hello..world / g

// 6. 모든문자 매핑
// / h[eao]llo / g

// 7. 범위
// / h[a - zA - Z0 - 9]llo / g

// 8. 부정
// / h[^ ae]llo / g

// 9. 그루핑 규칙
// / (on | ues | rida) / gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음
// /(?:on|ues)/gm
// /(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
// /.(a | e | o)ll./ gm
// /hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
// /hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)

// ("hello hallo hello").match(/.(a|e|o)ll./g)
// ("hello hallo hello hello hi").match(/.(a|e|o)ll./g)
// ("hello hallo hello hello hi").match(/.[eao]ll./g)

// 10. 수량자
/*
_* : 앞에 있는 문자가 0개 ~ N개
_+ : 앞에 있는 문자가 1개 ~ N개
_? : 앞에 있는 문자가 0개 ~ 1개

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개

_* : 앞에 있는 문자가 0개 ~ N개 ({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm

// 11. 캐릭터 클래스
/\w{5} /g
/\W/g
/\d/gm : 숫자
/\D/gm : not 숫자
/\s/gm : 스페이스
/\S/gm : not 스페이스

// 12. 이스케이프문자
/\[.*]/gm : 대괄호([]) 안에 감싸여진 문자열
/\(.*\)/gm : 소괄호 안에 감싸여진 문자열
/\\.*\//gm : 이미 사용되고 있는 특수문자로 감싸여진 문자열
/-.*-/gm : 이스케이프 문자를 사용할 필요가 없는 경우
/\^\^/gm : 이스케이프 문자가 필요한 경우
/:\)/gm : 이스케이프 문자가 필요한 경우



// 숙지
- `^` : 문자열의 시작
- `$` : 문자열의 종료. 옵션에 따라 문장의 끝 또는 문서의 끝에 매치된다.
- `.` : 임의의 한 문자
- `[]`: 문자 클래스. 문자 클래스 안에 들어가 있는 문자는 그 바깥에서 하나의 문자로 취급된다.
- `^` : 문자 클래스 내에서 ^는 not
- `-` : ex) a-z는 a에서 z까지의 문자
- `|` : or를 나타냄
- `?` : 앞 문자가 없거나 하나 있음
- `+` : 앞 문자가 하나 이상임
- `*` : 앞 문자가 0개 이상임
- `{n,m}` : 앞 문자가 `n`개 이상 `m`개 이하. `{0,1}` 은 `?`와 같은 의미다.
- `{n,}` : 앞 문자가 `n`개 이상. 위의 형태에서 `m`이 생략된 형태이다. `{0,}` 이면 `*`와 같고 `{1,}` 이면 `+`와 같은 의미이다.
- `{n}` : 앞 문자가 정확히 `n`개. `{n,n}` 과 같은 의미이다.
- `()` : 하나의 패턴구분자 안에 서브 패턴을 지정해서 사용할 경우 괄호로 묶어주는 방식을 사용한다.
- `\s` : 공백문자
- `\b` : 문자와 공백 사이를 의미한다.
- `\d` : 숫자 [0-9]와 같다.
- `\t` : 탭문자
- `\w` : 단어 영문자+숫자+_(밑줄) [0-9a-zA-Z_]문자 이스케이프는 대문자로 적으면 반대를 의미한다.
- [a-z] : a ~ z 사이의 문자를 찾음
- [1-9] : 1 ~ 9 사이의 문자를 찾음
- [abc] : a, b, c중 하나를 찾음
- [^abc] : a, b, c를 제외한 문자를 찾음
.z : 아무 문자 하나를 . 기호로 찾으며 z로 끝남을 의미
- a+ : a가 1개 이상을 의미함
- a* : a가 0개 또는 그 이상을 의미함
- s : 공백 문자를 찾음(스페이스, 탭 등), 대문자의 경우 아닌 문자를 찾음
- d : 숫자를 찾음, 대문자의 경우 아닌 문자를 찾음
- w : 알파벳 영문과 숫자와 언더바 _ 기호를 찾음, 대문자의 경우 아닌 문자를 찾음
- t : 탭 공간을 찾음
- g : 검색범위를 전역으로 확장
- i : 대소문자를 구분하지 않음
- gi : 검색 범위를 전역으로 확대하면서 대소문자를 구분하지 않음
- m : 여러줄을 동시에 매칭함
*/


////////////////// 연습문제 /////////////////

// 0 문자 제거
let s = '010100020201020304812123';
s.replace(/[^1-9]/g, "")
'11221234812123'

// 앞 뒤 공백 제거(캐릭터 클래스 `\s`사용)
s = '   010100020201020304812123    '
s.replace(/^\s+|\s+$/g, '')
'010100020201020304812123'

// 문자열 내 공백 제거
s = '  01010002020   102030  4812123  ';
s.replace(/\s/g, '')
'010100020201020304812123'

// 개행 제거
s = `
a
b
c
d
`
'\na\nb\nc\nd\n'
s.replace(/\n/g, '')
'abcd'

s = "hello world HELLO WORLD";
s.match(/hello/gi);

s1 = '010-5000-2000'
s2 = '010 5000 2000'
s3 = '010~5000!2000'
s4 = '010!!5000!!2000'
s5 = '01050002000'

s1.split(/-/g)

// hint
// s.split(/([a-z])([0-9])/g)
// s.split(/([a-z]{3})/g)

s1.split(/([0-9]{3})[- ~!]*([0-9]{4})[- ~!]*([0-9]{4})/)






////////////////// 그룹 연습문제 /////////////////
'gogaooogogooo'.match(/(go)/g); // ['go', 'go', 'go']
'gogaooogogooo'.match(/[go]/g); // ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']

// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오. 숫자는 항상 2개만 있고, 알파벳은 1개 이상 있을 수 있습니다.

// 87a99b00fww89e => ['87a', '99b', '00f', '89e']
'87a99b00fww89e'.match(/(\d+)(\w)/g)
'87a99b00fww89e'.match(/[0-9][0-9][a-zA-Z]/g)
'87a99b00fww89e'.match(/[0-9]+[a-zA-Z]/g)

// 다음 패턴에서 ello와 zi 는 몇 개가 있는가?
'hellohelellolozihelloelzilellozi'.match(/ello/g)
'hellohelellolozihelloelzilellozi'.match(/zi/g)
'hellohelellolozihelloelzilellozi'.match(/(ello|zi)/g)


// 1번 문제
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120826?language=javascript
function solution(my_string, letter) {
    return my_string.split(letter).join('');
}
'BCBdbe'.split('B')
'BCBdbe'.split('B').join('')

// 오답 : 1개만 바꿉니다.
function solution(my_string, letter) {
    return my_string.replace(letter, '');
}
'BCBdbe'.replace('B', '')

// 오답 : 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해주어야 합니다.
function solution(my_string, letter) {
    return my_string.replace(`/${letter}/g`, '');
}
'BCBdbe'.replace('B', '')
let letter = 'B'
'BCBdbe'.replace(`/${letter}/g`, '');

// 정답
function solution(my_string, letter) {
    // new RegExp(패턴으로 사용할 문자열, 플래그)
    // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있습니다.
    let reg = new RegExp(letter, 'g')
    return my_string.replace(reg, '');
}

// new RegExp('B', 'g') 이렇게 사용하시거나 my_string.replace(/B/g, '')


// 2번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120851

// 정답 유형1 : 숫자를 찾는다!
function solution(my_string) {
    return my_string
        .match(/[0-9]/g)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp".match(/[0-9]/g)
"aAb1B2cC34oOp".match(/[0-9]/g).map(x => parseInt(x)).reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
    .match(/[0-9]/g)
    .map(x => parseInt(x))
    .reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
    .match(/[0-9]/g)
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)

// 정답 유형2 : 문자를 제거한다!
function solution(my_string) {
    return my_string
        .replace(/[^0-9]/g, '')
        .split('')
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp"
    .replace(/[^0-9]/g, '')
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)


// 3번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120891
// 오답! null일때 length가 없습니다!
function solution(order) {
    return order.toString().match(/[369]/g).length;
}

(163009).toString().match(/[369]/g)
    (0).toString().match(/[369]/g)
    (10).toString().match(/[369]/g)

// 정답
function solution(order) {
    let value = order.toString().match(/[369]/g) ?? []
    return value.length;
}

function solution(order) {
    return (order.toString().match(/[369]/g) ?? []).length;
}

// 4번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 아래와 같이 풀 수 있지만 정규표현식을 사용하면 더 간단해집니다.
function solution(my_str, n) {
    let result = []
    for (let i = 0; i < my_str.length; i += n) result.push(my_str.slice(i, i + n))
    return result
}

// [0-9][0-9][0-9][0-9] - [0-9][0-9][0-9][0-9]
// [0-9]{1,n}

"abc1Addfggg4556b".match(/[a-zA-Z0-9]{4}/g)
"abc1Addfggg4556b".match(/[a-zA-Z0-9]{3}/g)
"abc1Addfggg4556b".match(/\w{3}/g) // 문자
"abc1Addfggg4556b".match(/\d{3}/g) // 숫자
"abc1Addfggg4556b".match(/.{3}/g) // 모든문자
"".match(/.{3}/g) // 주의 : null

// 오답
function solution(my_str, n) {
    let reg = new RegExp(`.{${n}}`, 'g') // 마지막 남은 것도 리턴해줘야 해서 오답
    return my_str.match(reg)
}

// 정답
function solution(my_str, n) {
    let reg = new RegExp(`.{1,${n}}`, 'g')
    return my_str.match(reg)
}

function solution(my_str, n) {
    let reg = new RegExp(`\\w{1,${n}}`, 'g') // '\'를 표현하기 위해서 '\\'를 사용
    return my_str.match(reg)
}


// 5번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120864
// 2번 문제 업그레이드
// 2번 문제 해답
function solution(my_string) {
    return my_string
        .replace(/[^0-9]/g, '')
        .split('')
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// 오답
function solution(my_string) {
    return my_string
        .match(/\d+/g)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// 정답
function solution(my_string) {
    return (my_string.match(/\d+/g) ?? [])
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp".match(/\d/g)
"aAb1B2cC34oOp".match(/\d+/g)
"aAb1B2c111C34oO123p".match(/\d+/g)

////////////////// 그룹 연습문제 //////////////////
'gogaooogogooo'.match(/(go)/g); // ['go', 'go', 'go']
'gogaooogogooo'.match(/[go]/g); // ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']

// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오.

// '87a99b00fww89e' => ['87a', '99b', '00f', '89e']
'87a99b00fww89e'.match(/[0-9][0-9][a-zA-Z]/g)
'87a99b00fww89e'.match(/([0-9][0-9])([a-zA-Z])/g) // 숫자 그룹과 문자 그룹으로 나눕니다.
'87a99b00fww89e'.match(/([0-9]{2})([a-zA-Z])/g)
'87a99b00fww89e'.match(/(\d{2})([a-zA-Z])/g)

// 6번 문제
// 링크 : https://jsalgo.co.kr/?page=2#
'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g)
// ['r1', 'e3', 'v2', 'v1', 'v9']

// 아래처럼 r, e, v 뒤에 숫자가 10이 있을 경우 오답
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g)
// ['r1', 'e3', 'v2', 'v1', 'v9']

// 아래처럼 뽑으면 e가 33이 뽑히므로 오답
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev]\d+/g)

// 아래처럼 뽑으면 v가 11이 뽑히므로 오답
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev][1]?[0-9]/g)

// 정답
'a10b9r10ce33uab8wc918v2cv11v9'
    .match(/([rev])(10|[0-9])/g)
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
function solution(data) {
    return data.match(/([rev])(10|[0-9])/g)
}

function solution(data) {
    let result = data.match(/([rev])(10|[0-9])/g).reduce((a, c) => a + parseInt(c.slice(1)), 0).toString()
    return `${result[0]}월 ${result[1]}일`
}

// reduce 보강설명
// reduce의 형태
array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

[10, 20, 30].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        return accumulator + currentValue
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        console.log(currentValue.slice(1))
        return accumulator + currentValue
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        console.log(currentValue.slice(1))
        console.log(parseInt(currentValue.slice(1)))
        return accumulator + parseInt(currentValue.slice(1))
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.slice(1))
    },
    0
);

['a10', 'a20', 'a30'].reduce((a, c) => a + parseInt(c.slice(1)), 0);

// 좀 더 쉽게, 그렇지만 효율적이진 않습니다.
['a10', 'a20', 'a30']
    .map(v => parseInt(v.slice(1)))
    .reduce((a, b) => a + b, 0)



// replace 매우 고급 문법 보강 설명 //
const string = `hojun, lee
gildong, hong
hojung, choi
junho, lee`


let result1 = string.replace(/(\w+), (\w+)/gm, "$2 $1");
console.log(result1);
let result2 = string.replace(/(\w+), (\w+)/gm, "$2_$1");
console.log(result2);
let result3 = string.replace(/(\w+), (\w+)/gm, "$1님 안녕하세요.");
console.log(result3);
let result4 = string.replace(/(\w+), (\w+)/gm, "$2 $1!!$1!!$1");
console.log(result4);