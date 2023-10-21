* https://github.com/paullabkorea/Algorithm-walk-with-wenivs
* 이력서 템플릿 : https://paullabworkspace.notion.site/Figma-bfa32213fc244db9b31bb8486a479ee6?pvs=4

## 1.1 코테 전 준비사항
1. 가고 싶은 회사에서 [코테를 보는지](https://paullabworkspace.notion.site/446d03bf38df42e19d9fedcf5ceaec61?pvs=4) 확인해보자!
2. [쉬운 문제](https://github.com/paullabkorea/programmersLv0)에서 모르는 것이 있는지 확인하고, 난이도별 어떤 [문법](https://algoview.co.kr/)이 자주 나오는지 체크하자!
3. 플렛폼에 익숙해지자! (프로그래머스, 구름EDU 등)
4. 언어 선택(속도 : C++, 풀이 : Python)
5. 코드 스니펫(트리, 검색, 최단경로(예를 들어 다익스트라), 직접 제작한 함수 등), Cheatsheet, A4 용지 준비
    * 코드 스니펫을 만들어둔 레파지토리 fork - [제주코딩베이스캠프](https://github.com/paullabkorea/programmersLv0)
    * 시험 전 스니펫을 만들지 말고 하루 한 문제씩(저도 매일 한 문제씩 풉니다.)
6. 기억해두자! 예외처리!
7. 간단한 코드 스니펫
```js
const zip = (a, b) => a.map((v, i) => [v, b[i]])

// 평평하게 만들기 - flat()
[1, [2, [3, [4]]]].flat(); // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(1); // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(2); // -> [1, 2, 3, [4]]
[1, [2, [3, [4]]]].flat(Infinity);
Math.max(...[1, [2, [3, [4]]]].flat(Infinity))

// 배열 만들기
Array(10).fill(0);
[...Array(10)].map((_, i) => i + 1);
".".repeat(10).split("."); // 권장하지 않습니다.
".".repeat(9).split(".");
Array.from("ab".repeat(10));

Infinity
-Infinity;
Math.ceil(); // 올림
Math.floor(); // 내림

parseInt(10 / 3);
Math.floor(10 / 3);
~~(10 / 3);
(10 / 3) << 0;
// 2 << 1
// 4
// 2 << 2
// 8
// 2 << 3
// 16
(10 / 3) | 0; // why? bit단위 or 연산자
// 2 | 3 // 3

(123.45).toFixed(1); // 123.4
```

## 1.2 문제 유형과 출제 방식
* 5 ~ 6시간, 6 ~ 7문제
* 30분씩 4문제, 2시간씩 2문제
* 2 ~ 3시간, 3 ~ 5문제
* 30분씩 3 ~ 4문제, 변별력 1문제
* 단기 공부로 붙을 수 있는 코테와 붙기 힘든 코테 경향 정리
* 문제 유형 분석 관련 글
    * [문제 유형 분석](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS4385594264)
    * [언어 유불리 여부](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS9145550324&cate_cd=)
    * [코딩 테스트에 가장 많이 출제 되는 알고리즘](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS7793635735&cate_cd=)
        * 요구사항 구현 알고리즘(33%)
        * 그리디 알고리즘(20%)
        * 너비우선탐색, 깊이우선탐색(20%)
        * 정렬(8%)
        * 다이나믹 프로그래밍, 최단경로, 이진 탐색 등
* 전체 문제 유형
    * 알고리즘
        * 정렬
        * 이진 검색
        * 비트 연산
        * 슬라이딩 윈도우, 페이지 교체
        * 분할 정복
            * 그리디 알고리즘
            * 다이나믹 프로그래밍
    * 자료구조
        * 선형
            * 스택과 큐, 데크
            * 연결리스트, 해시 테이블
        * 비선형
            * 그래프(최단경로) - 다익스트라가 나오면 매우 어려운 문제
            * 트리
                * 힙
                * 트라이

## 워밍업(8의 갯수)
- 링크 : https://codingdojang.com/scode/393
```js
'12345678910111213'.match(/1/g)
'12345678910111213'.match(/1/g).length
'hello world hello hello'.match(/hello/g)

let str = ''
for(let i = 1; i <= 100; i++){
    str += i
}

str.match(/8/g).length
str.split('').filter(v => v == '8').length


Array(100)
    .fill(0)
    .map((v, i) => i)
    .join('')
    .split('')
    .filter(v => v == '8').length

Array(100)
    .fill(0)
    .map((v, i) => i)
    .join('')
    .match(/8/g)
```

## 워밍업(가장 짧은 거리)
- 링크 : https://codingdojang.com/scode/408
```js
const zip = (a, b) => a.map((v, i) => [v, b[i]])
// 가장 짧은 무언가
// 1. 가장 작은 값을 구하는 알고리즘 + 가장 큰 값(Infinity)
// 2. sort를 오름차순으로 해서 가장 앞에 있는 값

// 가장 큰 무언가
// 1. 가장 큰 값을 구하는 알고리즘 + 가장 작은 값(-Infinity)
// 2. sort를 내림차순으로 해서 가장 앞에 있는 값

let mini = Infinity
let data = [10, 5, 4, 7, 8, 3, 9, 15]

for (let i of data){
    console.log(i)
    if (mini > i){
        mini = i
    }
}
console.log(`mini: ${mini}`)



////////////////
[1, 3, 4, 8, 13, 17, 20]
[3, 4, 8, 13, 17, 20]

=> [[1, 3], [3, 4]...]
////////////////

let data = [1, 3, 4, 8, 13, 17, 20]
zip(data, data.slice(1))

////////////////

let data = [1, 3, 4, 8, 13, 17, 20]
let mini = Infinity
let result = []

for (let i of zip(data, data.slice(1))){
    console.log(i)
    if (mini > (i[1] - i[0])){
        mini = i[1] - i[0]
        result = i
    }
}
```


## 중복된 숫자 개수
- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120583


```js
function solution(array, n){
    return array.filter(v => v === n).length
}

function solution(array, n){
    let count = 0
    for (let num of array){
        if (num === n){
            count += 1
        }
    }
    return count
}

function solution(array, n){
    let count = 0
    for (let num of array) if (num === n) count += 1
    return count
}
```

## 머쓱이보다 키 큰 사람
- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120585

```js
function solution(array, height){
    return array.filter(v => v > height).length
}


// 이런식에 문제풀이도 가능합니다.
function solution(array, height) {
    let count = 0;
    result = array.map(h => h > height ? count++ : count)
    console.log(result)
    return count
}

// => [0, 0, 1, 2]

function solution(array, height) {
    result = array.map(h => h > height ? true : false)
    return result
}

function solution(array, height) {
    result = array.map(h => h > height ? true : false)
    return result.reduce((a, c) => a + c, 0)
}
```


## 자릿수 더하기

- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120906

```js
function solution(n){
    return n
            .toString()
            .split('')
            .reduce((a, c) => a + parseInt(c), 0)
}
```

## 모음 제거
- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120849
```js
// 예상 외로 실패가 떴습니다!?
function solution(my_string){
    return my_string
            .replace('a', '')
            .replace('e', '')
            .replace('i', '')
            .replace('o', '')
            .replace('u', '')
}

solution("bus")
solution("nice to meet you")

// replaceAll
// 구버전에 node버전일 때 replaceAll을 지원안해주는 경우도 있어요!
function solution(my_string){
    return my_string
            .replaceAll('a', '')
            .replaceAll('e', '')
            .replaceAll('i', '')
            .replaceAll('o', '')
            .replaceAll('u', '')
}

solution("bus")
solution("nice to meet you")


// 
function solution(my_string){
    return my_string
            .replace(/a/g, '')
            .replace(/e/g, '')
            .replace(/i/g, '')
            .replace(/o/g, '')
            .replace(/u/g, '')
}

function solution(my_string){
    return my_string.replace(/[aeiou]/g, '')
}

function solution(my_string){
    return Array
        .from(my_string)
        .filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v))
        .join('')
}

['a', 'e', 'i', 'o', 'u'].includes('a')
true
['a', 'e', 'i', 'o', 'u'].includes('e')
true
['a', 'e', 'i', 'o', 'u'].includes('c')
false

```

## 숨어있는 숫자의 덧셈 (1)
- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120851

```js
function solution(my_string){
    return my_string
            .replace(/[^\d]/g, '')
            .split('')
            .reduce((a, c) => a + parseInt(c), 0)
}


function solution(my_string) {
    return my_string
        .replace(/[^0-9]/g, '')
        .split('')
        .reduce((a, b) => a + parseInt(b), 0)
}

// 너무 좋은 풀이! 따봉 100만개!
function solution(my_string) {
    return [...my_string].filter(a => parseInt(a))
}
solution("aAb1B2cC34oOp")

function solution(my_string) {
    return [...my_string]
        .filter(a => parseInt(a))
        .reduce((a, c) => a + parseInt(c), 0)
}
solution("aAb1B2cC34oOp")
```


## 진료순서 정하기
- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120835
```js
// step1
let 주어진데이터 = [3, 76, 24];
let 정렬된데이터 = [76, 24, 3];
[정렬된데이터.indexOf(주어진데이터[0]),
정렬된데이터.indexOf(주어진데이터[1]),
정렬된데이터.indexOf(주어진데이터[2])];


// step2
let 주어진데이터 = [3, 76, 24];
let 정렬된데이터 = [76, 24, 3];
[정렬된데이터.indexOf(주어진데이터[0])+1,
정렬된데이터.indexOf(주어진데이터[1])+1,
정렬된데이터.indexOf(주어진데이터[2])+1];


// step3
function solution(emergency){
    let sorted = emergency.slice().sort((a, b) => b - a)
    return emergency.map(v => sorted.indexOf(v) + 1)
}

[3, 76, 24].sort((a, b) => b - a) // 내림차순
[3, 76, 24].sort((a, b) => a - b) // 오름차순
```

## 문자열 밀기
- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120921

```js
let solution = (a, b) => (b + b).indexOf(a);
```


## 저주의 숫자 3
- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120871
- 중요한 문제입니다. 소거법을 사용하세요!

```js
Array(1000).fill(0).map((_, i) => i)
Array(1000).fill(0).map((_, i) => i).filter(v => v % 3 != 0)
Array(1000)
    .fill(0)
    .map((_, i) => i)
    .filter(v => v % 3 != 0)
    .filter(v => !v.toString().includes('3'))

function solution(n) {
    return Array(1000)
    .fill(0)
    .map((_, i) => i)
    .filter(v => v % 3 != 0)
    .filter(v => !v.toString().includes('3'))[n-1]
}

function solution(n) {
    var count3x = 0;
    while (n > 0) {
        count3x = count3x + 1;
        if (count3x.toString().split("").includes("3")) {
            continue;
        }
        if (count3x % 3 == 0) {
            continue;
        }
        n = n - 1;
    }
    return count3x;
}

function solution(n) {
    let arr = [];
    let num = 0;
    while (arr.length !== n && ++num)
        if (num % 3 !== 0 && !("" + num).includes("3")) arr.push(num);
    return arr.pop();
}
```


## jsalgo10 - 1번
* 링크 : https://jsalgo.co.kr/?page=1#
* 유사문제 : https://school.programmers.co.kr/learn/courses/30/lessons/17681
```js
data = `  + +-+ -+-  
++ -- +-+  
++-+ -+ -  
+ ++-+ -+  `

data.split('\n')

'  + +-+ -+-  '.replace(/ /g, '').replace(/\+/g, '1').replace(/\-/g, '0')

'A'.charCodeAt()
String.fromCharCode(65, 66)

parseInt('1101010', 2)
String.fromCharCode(106)

for (let i of data.split('\n')){
    s = i.replace(/ /g, '').replace(/\+/g, '1').replace(/\-/g, '0')
    console.log(String.fromCharCode(parseInt(s, 2)))
}

result = ''
for (let i of data.split('\n')){
    s = i.replace(/ /g, '').replace(/\+/g, '1').replace(/\-/g, '0')
    result += String.fromCharCode(parseInt(s, 2))
}
result

```


## jsalgo10 - 2번
* 링크 : https://jsalgo.co.kr/?page=2#
* 유사문제 : https://school.programmers.co.kr/learn/courses/30/lessons/17682

```js
'a10b9r1ce33uab8wc918v2cv11v9'.match(/[0-9]/g)
'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g)

// 10이 있으면 인식 못함!
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g)
'a10b9r10ce33uab8wc918v2cv11v9'.match(/([rev])([0-9]|10)/g)
'a10b9r10ce33uab8wc918v2cv11v9'.match(/([rev])(10|[0-9])/g)

// (?<변수명>패턴) 으로 그룹핑이 가능합니다.
const regex = /(?<one>[rev])(?<two>10|[0-9])/g;
const replaceString = 'a10b9r10ce33uab8wc918v2cv11v9'.replace(regex, '$<one>!!$<two>!!')

const regex = /(?<one>[rev])(?<two>10|[0-9])/g;
const replaceString = 'a10b9r10ce33uab8wc918v2cv11v9'.replace(regex, '($<one>)[$<two>]')
replaceString

const regex = /(?<one>[rev])(?<two>10|[0-9])/g;
const replaceString = 'a10b9r10ce33uab8wc918v2cv11v9'.replace(regex, '<($<one>)-[$<two>]>')
replaceString


// 문제 해답
let data = 'a10b9r10ce33uab8wc918v2cv11v9'.match(/([rev])(10|[0-9])/g)
let result = 0

for (let i of data){
    result += parseInt(i.slice(1))
}
result = result.toString()
console.log(`${result[0]}월 ${result[1]}일`)
```


```js
// 유사문제 풀이
"1S2D3T".match(/([0-9]|10)([SDT])([\*\#]?)/g)
"1S*2D#3T".match(/(10|[0-9])([SDT])([\*\#]?)/g)
"1S*2D#3T".match(/(10|[0-9])([SDT])([\*\#]?)/g)[0].split('')
```


## jsalgo10 - 6번
* 링크 : https://jsalgo.co.kr/?page=6#

```js
data = [1, 1, 1, 2, 3, 4, 1, 2, 3, 4, 1]

// 스택
// js에서 스택을 구현하는 방법 2가지
// 뒤에다가 넣고 뒤에서 빼는 방법
// data.push(), data.pop()
// 앞에다가 넣고 앞에서 빼는 방법
// data.unshift(), data.shift()


// 큐
// js에서 큐를 구현하는 방법 2가지
// 뒤에다가 넣고 앞에서 빼는 방법
// data.push(), data.shift()
// 앞에다가 넣고 뒤에서 빼는 방법
// data.unshift(), data.pop()

function solution(data){
    let result = 0
    let stack = []
    for (let i in data) {
        stack.push(i)
        if(JSON.stringify(stack.slice(-5)) == JSON.stringify([1, 2, 3, 4, 1])) {
            [...new Array(5)].forEach(v => {
                stack.pop()
            })
            result += 1
        }
    }
    return result
}

// 1 : 식빵
// 2 : 계란
// 3 : 베이컨
// 4 : 야채
// 1, 2, 3, 4, 1 => 샌드위치 1개
solution([1, 1, 1, 2, 3, 4, 1, 2, 3, 4, 1])

//stack
[1]
[1, 1]
[1, 1, 1]
[1, 1, 1, 2]
[1, 1, 1, 2, 3]
[1, 1, 1, 2, 3, 4]
[1, 1, 1, 2, 3, 4, 1] // if 문에 조건 맞아 떨어짐
[1, 1]
[1, 1, 2]
[1, 1, 2, 3]
[1, 1, 2, 3, 4]
[1, 1, 2, 3, 4, 1] // if 문에 조건 맞아 떨어짐
[1]

// 그냥 슬라이싱(슬라이딩 윈도우 알고리즘)을 하면 1개지만
// 스택을 이용하면 2개
solution([1, 1, 2, 1, 2, 3, 4, 1, 3, 4, 1])
```



## jsalgo10 - 14번
* 링크 : https://jsalgo.co.kr/?page=14#


```js
// 깊스너큐
[[0,    '#',    1,      0], 
 [2,    1,      1,      2], 
 ['#',  3,      0,      1], 
 [1,    '#',    '#',    3], 
 [0,    2,      '#',    1]]

data = [[0,    '#',    1,      0], 
        [2,    1,      1,      2], 
        ['#',  3,      0,      1], 
        [1,    '#',    '#',    3], 
        [0,    2,      '#',    1]]

data[0][0]

if (범위 벗어나지 않는지 확인) {
    // 상
    if (check(x-1, y)) { // 만약에 맵을 벗어나지 않으면
        이동을 하고 큐에다 놓고
        이동한 자리에 물고기는 다 잡고
    }
    // 하
    if (check(x+1, y)) {
    }
    // 좌
    if (check(x, y-1)) {
    }
    // 우
    if (check(x, y+1)) {
    }
}
```