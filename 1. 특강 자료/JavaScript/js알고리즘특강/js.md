* 현재 repo 주소: https://github.com/paullabkorea/Algorithm-walk-with-wenivs
* 이력서 템플릿: https://paullabworkspace.notion.site/Figma-bfa32213fc244db9b31bb8486a479ee6?pvs=4
* jsalgo: https://100.jsalgo.co.kr/

# 1. 자료구조와 알고리즘, 코딩테스트
* 자료구조(자료를 어떻게 담는가?): array, object, map, set, 싱글 링크드 리스트, 더블 링크드 리스트, 트리, 해쉬 등
* 알고리즘(문제를 어떻게 풀 것인가?): 애라토스테네스의 체, 그리디 알고리즘, 투 포인터, 슬라이딩 윈도우 등 
* 자료구조 + 알고리즘 => 문제 풀이 능력을 보겠다! => 코딩테스트
* 추천 서적
    * 학문적 접근: The Art of Computer Programming(도널드 커누스)
    * 코딩테스트 접근: 파이썬 알고리즘 인터뷰(박상길)
    * 자바스크립트 코딩 테스트 책: 코딩 테스트 합격자 되기 - 자바스크립트 편
* 요즘은 ChatGPT가 이러한 책의 역할을 하고 있습니다. 그래서 https://100.jsalgo.co.kr/ 와 같은 곳에서 문제를 풀어보시면서 자료구조와 알고리즘을 설명해달라고 ChatGPT에게 요청하시면서 공부하시는 방법이 더 효율적입니다.

## 1.1 코테 전 준비사항
1. 회사와 경향 분석!
    * 코테 보는 회사와 회사 유형을 정리하세요.
    * [코딩테스트 경향 정리](https://paullabworkspace.notion.site/446d03bf38df42e19d9fedcf5ceaec61?pvs=4) 해두었습니다.
    * 분석 서비스를 통해 [출제 경향](https://algoview.co.kr/)도 한 번 정리하세요.
2. 플렛폼에 익숙해지자! (프로그래머스, 구름EDU 등)
    * 사용 가능 라이브러리 미리 확인 등
    * 대부분 numpy나 pandas가 사용 가능하지만 간혹가다 라이브러리 제한이 있는 곳도 있습니다. numpy는 python보다 대부분의 경우 속도가 빠릅니다. 크기에 따라 다르지만 100000개 이상의 배열의 연산의 경우 50배 이상의 성능을 보입니다. 순열과 조합은 itertools를 사용하시면 python 아주 쉽게 풀 수 있습니다.
2. 언어 선택(속도 : C++, 풀이 : Python)
    * 요즘은 Lv이 높은 경우가 아니면 속도 체크를 거의 하지 않는 추세입니다.
    * 다른 언어가 메인이셔도 Python 추천 드립니다. 코딩테스트만을 위해 Python을 새로 공부하시는 분들이 많습니다.
3. 코드 스니펫(트리, 검색, 최단경로(예를 들어 다익스트라), 직접 제작한 함수 등), Cheatsheet, A4 용지 준비
    * 코드 스니펫을 만들어둔 레파지토리 fork - [제주코딩베이스캠프](https://github.com/paullabkorea/programmersLv0)
    * 감독관이 없는 경우 [스니펫](https://github.com/paullabkorea/programmersLv0/blob/main/Solution.md)에서 Ctrl + F해서 문제를 풉니다.
    * 시험 전 스니펫을 만들지 말고 하루 한 문제씩(저도 매일 한 문제씩 풉니다.) 또는 버겁다면 일주일에 2 ~ 3문제.
4. 유용한 라이브러리 정리! (collections, itertools(순열, 조합), functools, re, bisect, math 등) - [제주코딩베이스캠프](https://www.youtube.com/channel/UC4GnvNKtuJ4cqWsYjxNxAEQ) 유튜브 채널 확인
    * 유용한 알고리즘 GitHub repo를 검색하고 fork를 떠두는 것도 좋습니다.
    * 면접질문 repo등 다양한 목적에 repo가 있습니다.
5. 기억해두자! 예외처리!
    * 예외처리와 테스트 케이스중 통과 못하는 케이스들은 문제를 많이 풀어보셔야 합니다.
    * 길이가 0이거나 0으로 나누거나 등
6. 속도개선
    * class로 구현
    * 메서드 대신 슬라이싱 구현(슬라이싱은 C로 구현되어 있어 메서드보다 통상 8배정도 빠릅니다.)하세요. 다만 공간복잡도가 상승할 수 있습니다. (리스트.reverse(), reversed(리스트), 리스트[::-1])
    * for문 대신 list comprehension을 사용하세요. 더 빠릅니다.
    * 재귀는 느립니다. 최후의 수단으로 사용하세요.
7. ChatGPT, Copilot 활용
    * 감독관이 없고 검색이 가능하다면 ChatGPT를 활용하세요.(ChatGPT가 활용 불가인 코테도 있습니다. 다만 활용 불가인데 검색이 가능할 경우 형평성 문제가 생겨요.)
    * ChatGPT 나오고 화이트보드 테스트가 많아졌습니다.

## 1.2 문제 유형과 출제 방식
* 5 ~ 6시간, 6 ~ 7문제
    * 구현 테스트의 경우에는 짧으면 1일 길면 4 ~ 5일 주는 경우도 있습니다.
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

# 2. 간단한 코드 스니펫
```js
// 1. python에서 유용한 코드를 js 모듈화

// 1.1. 묶음
const zip = (a, b) => a.map((e, i) => [e, b[i]]);
// 제약조건: a가 map을 사용하기 위해 array여야 합니다.

// 1.2. 범위안에 수 생성
const range = (start, end) => Array.from({length: end - start + 1}, (_, i) => start + i);

Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
Array.from({'one':10, 'two':20}, (v, i) => i);
Array.from({'one':10, 'two':20}, (v, i) => 'hello');
Array.from({'one':10, 'two':20, length: 3}, (v, i) => 'hello');
Array.from({1, 2, 3});
Array.from([1, 2, 3]);
Array.from(new Set([1, 2, 3]));
Array.from(new Map([[1, 2], [3, 4]]));

Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
Array.from('hello', x => x + x); // ['hh', 'ee', 'll', 'll', 'oo']

// 1.3. 평평하게 만들기(평탄화)
// [1, [2, [3, [4]]]] => [1, 2, 3, 4]
const flatten = (arr, depth = Infinity) => arr.flat(depth);

[1, [2, [3, [4]]]].flat()
[1, [2, [3, [4]]]].flat(1)
[1, [2, [3, [4]]]].flat(2)
[1, [2, [3, [4]]]].flat(3)
[1, [2, [3, [4]]]].flat(Infinity)


// 2. js에서 사용할 유용한 코드
Array(5).fill(0); // [0, 0, 0, 0, 0]
Array(5).fill(0).map((v, i) => i); // [0, 1, 2, 3, 4]
Array(5).fill(0).map((v, i) => i+1); // [1, 2, 3, 4, 5]
'.'.repeat(5)
'.'.repeat(5).split('.') // 권하진 않습니다.
Array.from('ab'.repeat(5))

Infinity
-Infinity

Math.ceil(1.1); // 올림
Math.floor(1.1); // 내림
Math.max(1, 2, 3, 4, 5);
Math.max([1, 2, 3, 4, 5]);
Math.max(...[1, 2, 3, 4, 5]); // 이렇게 종종 사용합니다.

parseInt('1234', 10); // 10진수 1234를 10진수로 변환
parseInt('1001', 2); // 2진수 1001을 10진수로 변환
parseInt('12aa34.abc'); // 12까지 변환, 안전합니다.

Math.floor(10 / 3);
~~(10 / 3) // 안전한 parseInt 연산을 사용하세요.
10 / 3 | 0 // 안전한 parseInt 연산을 사용하세요.
10 / 3 << 0 // 안전한 parseInt 연산을 사용하세요.

2 << 2 // 8
// step1 왼쪽에 있는 2를 2진수로 변환합니다. 10이 됩니다.
// step2 10을 왼쪽으로 2칸 이동합니다. 1000이 됩니다.
// step3 1000을 10진수로 변환합니다. 8이 됩니다.

5 << 3
// step1 왼쪽에 있는 5를 2진수로 변환합니다. 101이 됩니다.
// step2 101을 왼쪽으로 3칸 이동합니다. 101000이 됩니다.
// step3 101000을 10진수로 변환합니다. 40이 됩니다.

(1234.56789).toFixed(2); // 1234.57
(1234.56789).toFixed(0); // 1235
(1234.56789).toFixed(4); // 1234.5679
(1234.56789).toFixed(6); // 1234.567890

// match는 문자열에서 정규식을 사용할 수 있습니다.
'2345678910111213'.match(/1/g) // g는 global이에요. 전역에서 찾겠다는 것입니다. 앞에 슬러시와 뒤에 슬러시는 정규식을 사용할 때 사용합니다.
'2345678910111213'.match('1')
'2345678910111213'.match(/1/)
'2345678910111213'.match(/1/g)
'2345678910111213'.match(/1/g).length
'hello leehojun my name hojun'.match(/hojun/g).length
```

# 3. 알고리즘 문제 풀이

## 2진수, 8진수, 16진수, 10진수
```js
// 2진수: 숫자를 2개만 사용합니다.
// 0, 1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010

// 8진수: 숫자를 8개만 사용합니다.
// 0, 1, 2, 3, 4, 5, 6, 7, 10

// 16진수: 숫자를 16개만 사용합니다.
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, 10

// 10진수: 숫자를 10개만 사용합니다.
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// 아주 쉽게 10진수를 2진수로 변환하는 방법
// 9를 2진수로 표현해주세요!
// step1 9와 가장 가까운 2의 제곱수를 찾습니다. 2^3 = 8 이 수의 형태는 항상 10000...형태가 됩니다. 1000
// step2 8에서 몇을 더하면 9가 되는지 찾습니다. 1만 더하면 됩니다. 1001
```

## 워밍업 문제 1
- 링크: https://codingdojang.com/scode/393
```js
// 이렇게 풀지 마세요 - 1
// xxx8:000 ~ 999개
// xx8x:000 ~ 999개
// x8xx:000 ~ 999개
// 8xxx:000 ~ 999개
// 중복 => 중복을 허락해야 합니다. 4000개가 답이 맞습니다. 
// 이런식으로 풀이하는 것을 보려고 하는 문제가 아닙니다!

// 이렇게 풀지 마세요 - 2
// 이런 카운팅 하는 문제에 lv1문제는 대부분 문자열 문제입니다.
// [0, 0, 0, 0] ~ [9, 9, 9, 9] 반복을 돌며 풀지 마세요.

// 이렇게 풀지 마세요 - 3
count = 0;
for (let i of '12345678910111213') {
    console.log(i);
    if (i === '1'){
        count++;
    }
}
count

// 최대한 내장 메서드를 이용해주세요.
// 효율적으로 풀 수 있는 방법을 찾아주세요.

'12345678910111213'.match(/1/g).length

Array(100)
.fill(0)
.map((_, i) => i)

Array(100)
.fill(0)
.map((_, i) => i)
.join('')

Array(100)
.fill(0)
.map((_, i) => i)
.join('')
.split('')
.filter(v => v === '1')

Array(100)
.fill(0)
.map((_, i) => i)
.join('')
.split('')
.filter(v => v === '1')
.length

// 모든 것을 다 한줄로 만들려는 것은 좋지 않습니다.

Array(100)
.fill(0)
.map((_, i) => i)
.join('')
.match(/1/g)
.length
```

## 워밍업 문제 2
- 링크: https://codingdojang.com/scode/408
- 순서쌍, 최댓값, 최솟값, 특정값의 정렬 문제는 모두 정렬문제입니다.

```js
const s = [1, 3, 4, 8, 13, 17, 20];

// 이렇게 풀지 마세요 - 1
let min = Infinity;
let index = 0;
for (let i = 0; i < s.length - 1; i++) {
    console.log(s[i+1] - s[i]);
    if (s[i+1] - s[i] < min) {
        min = s[i+1] - s[i];
        index = i;
    }
}

console.log(s[index], s[index+1]);

// 최솟값: 최댓값을 먼저 저장해야합니다.
// 최댓값: 최솟값을 먼저 저장해야합니다.

////////////////

// 이렇게 풀면 간단합니다.
const s = [1, 3, 4, 8, 13, 17, 20];
const zip = (a, b) => a.map((e, i) => [e, b[i]]);
const pair = zip(s, s.slice(1));

// 이 상태에서 정렬을 하고 최솟값을 찾으면 됩니다.
pair.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))
pair.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0]

////////////////

const s = [1, 3, 4, 8, 13, 17, 20];
const zip = (a, b) => a.map((e, i) => [e, b[i]]);
const pair = zip(s, s.slice(1));
let min = Infinity;
let result = [];

for (let [i, j] of pair) {
    console.log(i, j);
    if (j - i < min) {
        min = j - i;
        result = [i, j];
    }
}

console.log(result);
```

## 워밍업 문제 3
- 링크: https://100.jsalgo.co.kr/?page=4#

```js
// ['쿠키 3개', '쿠키 2개', '쿠키 5개']
// 3 X 1 + 2 X 2 + 5 X 3 = 3 + 4 + 15 = 22

const cookies = ['쿠키 3개', '쿠키 2개', '쿠키 5개'];

function solution(data){
    data.forEach(v => {
        console.log(v);
        // console.log(parseInt(v))
        // 숫자가 먼저 나오지 않으면 못찾습니다.
    });
}

solution(cookies);

////////////////

const cookies = ['쿠키 3개', '쿠키 2개', '쿠키 5개'];

function solution(data){
    let result = 0;
    let temp = 1;
    data.forEach(v => {
        console.log(v.match(/\d+/g));
        result += parseInt(v.match(/\d+/g)[0]) * temp;
        temp++;
    });
    return result;
}

solution(cookies);

////////////////

const cookies = ['쿠키 3개', '쿠키 2개', '쿠키 5개'];

function solution(data){
    let result = 0;
    let temp = 1;
    data.forEach(v => {
        result += parseInt(v.split(' ')[1]) * temp;
        temp++;
    });
    return result;
}

solution(cookies);
```

## 평균점수 카운팅
- 링크: https://100.jsalgo.co.kr/?page=11#

```js
function solution11(data) {
  return data.filter((x) => x.reduce((acc, curr) => acc + curr, 0) > 240).length;
}
```

## 비트 치환 문제
- 링크: https://100.jsalgo.co.kr/?page=30#

```js
function solution30(n) {
  const binaryString = n.toString(2);
  let resultString = '';
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '1') {
      resultString += 'A';
    } else {
      resultString += 'B';
    }
  }
  return resultString;
}
```

## URL 쿼리 스트링 파싱
- 링크: https://100.jsalgo.co.kr/?page=38#

```js
function solution38(data) {
  const pattern = /(?<protocol>https?|ftp):\/\/(?<domain>[^/\s]+)(?<path>\/[^?]*|)(\?(?<query>[^#\s]*))?/;
  const match = data.match(pattern);
  if (match) {
    const { protocol, domain, path, query } = match.groups;
    return {
      protocol,
      domain,
      path: path || '',
      query: query || '',
    };
  } else {
    return null;
  }
}
```

JavaScript의 URL 객체는 URL을 파싱하고 조작하는 데 사용되는 내장 객체입니다. 이 객체를 사용하면 URL의 다양한 구성 요소를 쉽게 추출하고 수정할 수 있습니다.

1. `href`: 전체 URL 문자열
2. `protocol`: URL의 프로토콜 (예: "http:", "https:")
3. `host`: 호스트 이름과 포트
4. `hostname`: 호스트 이름
5. `port`: 포트 번호
6. `pathname`: 경로
7. `search`: 쿼리 문자열
8. `hash`: 프래그먼트 식별자

```js
// URL 객체 생성
const url = new URL('https://www.example.com:8080/path/to/page?name=John&age=30#section1');

// URL 구성 요소 출력
console.log('전체 URL:', url.href);
console.log('프로토콜:', url.protocol);
console.log('호스트:', url.host);
console.log('호스트 이름:', url.hostname);
console.log('포트:', url.port);
console.log('경로:', url.pathname);
console.log('쿼리 문자열:', url.search);
console.log('해시:', url.hash);

// 쿼리 파라미터 조작
console.log('name 파라미터:', url.searchParams.get('name'));
url.searchParams.set('name', 'Jane');
console.log('수정된 name 파라미터:', url.searchParams.get('name'));

// 새로운 URL 구성 요소 설정
url.protocol = 'http:';
url.port = '3000';

console.log('수정된 전체 URL:', url.href);
```


## 중복된 숫자 개수
- 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120583

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

# 4. 중요 알고리즘 설명

해당 강의는 시간이 남는 경우 진행합니다. 시간이 부족한 경우에는 진행하지 않습니다.

## 4.1 연결리스트

-   연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
-   js에서는 그다지 메모리 효율이 좋지 못함
-   개념 : https://en.wikipedia.org/wiki/Linked_list
-   알고리즘 시각화 : https://visualgo.net/ko

1. step 1 - object로 linkedlist 구현

```javascript
// 여러분이 다 이해하실 수 있는 코드로 설명해보겠습니다.
const list = {
    head: {
        value: 46,
        next: {
            value: 49,
            next: {
                value: 97,
                next: {
                    value: 12,
                    next: null,
                },
            },
        },
    },
};
// list.head.next.next.value
// list.head.next.next.next.value

let list = {
    head: null,
};

let node1 = { value: 46, next: null };
let node2 = { value: 49, next: null };
let node3 = { value: 97, next: null };
let node4 = { value: 12, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;

list.head = node1;

// let node4 = {value: 12, next: null}
// let node3 = {value: 97, next: node4}
// let node2 = {value: 49, next: node3}
// let node1 = {value: 46, next: node2}
```

* 순회
    ```js
    let current = node1
    while current:
        console.log(current.data)
        current = current.next
    ```

-   문제

```js
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.
const list = {
    head: {
        value: 90,
        next: {
            value: 2,
            next: {
                value: 77,
                next: {
                    value: 35,
                    next: {
                        value: 21,
                        next: null,
                    },
                },
            },
        },
    },
};
list.head.next.next.next.value;
```

2. step 2 - class로 node 구현

```javascript
// 위 문제 처럼 만들어 보도록 하겠습니다.
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

node1 = new Node(90);
node2 = new Node(2);
node3 = new Node(77);
node4 = new Node(35);
node5 = new Node(21);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node1.data;
// 90
node1.next.next.data;
// 77
node1.next.next.next.data;
// 35
```

3. step 3 - class로 linkedList 구현

```js
// head -> ['init', next]
//               ↑
//              tail

// head -> ['init', next] -> [90, next]
//                               ↑
//                              tail
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);

// l.head.data
// 'init'
// l.head.next.data
// 1
// l.head.next.next.data
// 2
// l.head.next.next.next.data
// 3

// 새로운노드 = node(1, null)
// init.next 값은 null인데! null자리를 '새로운노드node(1, null)'로!
// this.tail은 이제 node(1, null)
//
// 새로운노드 = node(2, null)
// node(1, null).next 값은 null인데! null자리를 '새로운노드node(2, null)'로!
// node(1, null) = 새로운노드node(2, null)
//
// 새로운노드 = node(3, null)
// node(2, null).next값은 null인데! null자리를 '새로운노드node(3, null)'로!
// node(2, null) = 새로운노드node(3, null)
```

4. step 4 - class로 linkedList에서 length 구현

```js
// head -> ['init', next]
//               ↑
//              tail

// head -> ['init', next] -> [90, next]
//                               ↑
//                              tail

// 여기서 데이터를 추가하면 생성되는 노드마다 데이터 공간이 할당되는 것이라 메모리가 크게 필요하게 됩니다.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
    }

    // length() { //this.length가 덮어 씀
    //     return this.length;
    // }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.length += 1;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

5. step 5 - class로 linkedList에서 toString 구현

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
        this.displayData = "";
    }

    // length() { //this.length가 덮어 씀
    //     return this.length;
    // }

    toString() {
        return "<" + this.displayData.slice(0, -2) + ">";
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.length += 1;
        this.displayData += `${data}, `;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

6. step 6 - class로 linkedList에서 toArray 구현

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
        this.displayData = "";
        this.displayDataArr = [];
    }

    // length() { //this.length가 덮어 씀
    //     return this.length;
    // }

    toString() {
        return "<" + this.displayData.slice(0, -2) + ">";
    }

    toArray() {
        return this.displayDataArr;
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.length += 1;
        this.displayData += `${data}, `;
        this.displayDataArr.push(data);
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

7. step 7 - (중요) toString을 순회로 구현

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
    }

    // length() { //this.length가 덮어 씀
    //     return this.length;
    // }

    toString() {
        let 순회용현재노드 = this.head;

        //처음 순회용 현재 노드가 init이기 때문에
        순회용현재노드 = 순회용현재노드.next;

        let 출력데이터 = "";
        for (let i = 0; i < this.length; i++) {
            출력데이터 += `${순회용현재노드.data}, `;
            순회용현재노드 = 순회용현재노드.next;
        }

        return 출력데이터;
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.length += 1;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

8. step 8 - data를 arr로 만들기

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
    }

    // length() { //this.length가 덮어 씀
    //     return this.length;
    // }

    toString() {
        let 순회용현재노드 = this.head;

        //처음 순회용 현재 노드가 init이기 때문에
        순회용현재노드 = 순회용현재노드.next;

        let 출력데이터 = "";
        for (let i = 0; i < this.length; i++) {
            출력데이터 += `${순회용현재노드.data}, `;
            순회용현재노드 = 순회용현재노드.next;
        }

        // return 출력데이터;
        return "[" + 출력데이터.slice(0, -2) + "]";
    }

    fullData() {
        return JSON.parse(this.toString());
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.length += 1;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

9. step 9 - linked list에 node 삽입하기

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
    }

    // length() { //this.length가 덮어 씀
    //     return this.length;
    // }

    toString() {
        let 순회용현재노드 = this.head;

        //처음 순회용 현재 노드가 init이기 때문에
        순회용현재노드 = 순회용현재노드.next;

        let 출력데이터 = "";
        for (let i = 0; i < this.length; i++) {
            출력데이터 += `${순회용현재노드.data}, `;
            순회용현재노드 = 순회용현재노드.next;
        }

        // return 출력데이터;
        return "[" + 출력데이터.slice(0, -2) + "]";
    }

    fullData() {
        return JSON.parse(this.toString());
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.length += 1;
    }

    insert(index, data) {
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        for (let i = 0; i < index - 1; i++) {
            순회용현재노드 = 순회용현재노드.next;
        }

        let 새로운노드 = new Node(data);
        새로운노드.next = 순회용현재노드.next;
        순회용현재노드.next = 새로운노드;
        this.length += 1;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

10. Double linked list의 기본 형태

```js
const list = {
    head: null,
};

let list1 = { value: 12, next: null, pre: null };
let list2 = { value: 99, next: null, pre: null };
let list3 = { value: 37, next: null, pre: null };
let list4 = { value: 2, next: null, pre: null };

list.head = list1;
list1.next = list2;
list2.next = list3;
list3.next = list4;

list1.pre = list;
list2.pre = list1;
list3.pre = list2;
list4.pre = list3;

list1.next.next.value;
// 37
list3.pre.pre.value;
// 12
list4.pre.pre.pre.next.next.value;
// 37
```

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.pre = null;
    }
}

class DoubleLinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
    }

    append(data) {
        let 새로운노드 = new Node(data);

        this.tail.next = 새로운노드;
        새로운노드.pre = this.tail;

        this.tail = 새로운노드;
    }
}

l = new DoubleLinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

## 4.2 트리와 그래프

-   tree object로 구현하기(이미지 : tree만들기\_트리순회\_2.png)

```js
// 초벌작업
// 이진 트리의 기본형태
// value
// child - left
// child - right
const tree = {
    root: {
        value: 5,
        left: {
            value: 3,
            left: null,
            right: null,
        },
        right: {
            value: 8,
            left: null,
            right: null,
        },
    },
};

//문제 : tree만들기_트리순회_2.png를 보고 tree를 만드세요.
const tree = {
    root: {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 1,
                left: null,
                right: null,
            },
            right: {
                value: 4,
                left: null,
                right: null,
            },
        },
        right: {
            value: 8,
            left: {
                value: 6,
                left: null,
                right: null,
            },
            right: {
                value: 9,
                left: null,
                right: null,
            },
        },
    },
};

//문제 : tree만들기.png를 보고 tree를 만드세요.

const tree = {
    root: {
        value: 55,
        left: {
            value: 30,
            left: {
                value: 25,
                left: {
                    value: 21,
                    left: null,
                    right: null,
                },
                right: null,
            },
            right: {
                value: 37,
                left: null,
                right: null,
            },
        },
        right: {
            value: 70,
            left: {
                value: 75,
                left: null,
                right: null,
            },
            right: {
                value: 77,
                left: null,
                right: {
                    value: 80,
                    left: null,
                    right: null,
                },
            },
        },
    },
};

tree.root.value;
// 55
tree.root.right.value;
// 70
tree.root.right.right.value[
    // 77

    // object나 array(기존 자료형)로 tree나 linked list를 구현할 수 있는데 왜 class로 구현할까요?
    (5, [3, [1, [], []], [4, [], []]], [8, [6, [], []], [9, [], []]])
];

// 1. 더 lite한 모델을 만들기 위해
// 2. 확장성(메서드 같은 것을 만들 수 있음)
// 3. OOP(Object-Oriented Programming, 객체 지향 프로그래밍)에 철학에 맞기 때문에

// node를 만들어서 삽입하는 식으로 구현
const root = {
    value: 55,
    left: null,
    right: null,
};

node1 = { value: 53, left: null, right: null };
node2 = { value: 99, left: null, right: null };
node3 = { value: 37, left: null, right: null };
node4 = { value: 54, left: null, right: null };

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

root.value;
// 55
root.right.value;
// 99
root.left.value;
// 53
root.left.left.value;
// 37
```

-   tree를 class로 구현하기(이미지 : tree만들기\_트리순회\_.png)

```js
class Node {
    constructor(data) {
        this.data = data;
        // this.child = [] // 2진트리가 아닌 트리를 만들 때 사용할 수 있습니다.
        this.left = null;
        this.right = null;
    }
}

root = new Node(55);
node1 = new Node(53);
node2 = new Node(99);
node3 = new Node(37);
node4 = new Node(54);

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

root.data;
// 55
root.left.data;
// 53
root.left.left.data;
// 37
root.left.right.data;
// 54
```

-   트리 구현(완벽한 이진트리가 아닙니다.)

```js
class Node {
    constructor(data) {
        this.data = data;
        // this.child = [] // 2진트리가 아닌 트리를 만들 때 사용할 수 있습니다.
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(data) {
        let init = new Node(data);
        this.root = init;
        this.length = 0;
    }

    // length(){ // this.length와 이름이 같아서 작동하지 않습니다.
    //     return this.length
    // }

    insert(data) {
        let 새로운노드 = new Node(data);
        let 순회용현재노드 = this.root;

        while (순회용현재노드) {
            if (data == 순회용현재노드.data) {
                // 들어온 값이 존재하는 값이면 트리에 값을 추가하지 않습니다.
                return;
            } else if (data < 순회용현재노드.data) {
                // 들어온 데이터가 작은 경우 왼쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if (!순회용현재노드.left) {
                    순회용현재노드.left = 새로운노드;
                    this.length += 1;
                    return;
                }
                순회용현재노드 = 순회용현재노드.left;
            } else if (data > 순회용현재노드.data) {
                // 들어온 데이터가 큰 경우 오른쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if (!순회용현재노드.right) {
                    순회용현재노드.right = 새로운노드;
                    this.length += 1;
                    return;
                }
                순회용현재노드 = 순회용현재노드.right;
            }
        }
    }
}

let t = new Tree(5);
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);
```

-   데이터 삽입

```js
class Node {
    constructor(data) {
        this.data = data;
        // this.child = [] // 2진트리가 아닌 트리를 만들 때 사용할 수 있습니다.
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(data) {
        let init = new Node(data);
        this.root = init;
        this.length = 0;
    }

    insert(data) {
        let 새로운노드 = new Node(data);
        let 순회용현재노드 = this.root;

        while (순회용현재노드) {
            if (data == 순회용현재노드.data) {
                return;
            } else if (data < 순회용현재노드.data) {
                if (!순회용현재노드.left) {
                    순회용현재노드.left = 새로운노드;
                    this.length += 1;
                    return;
                }
                순회용현재노드 = 순회용현재노드.left;
            } else if (data > 순회용현재노드.data) {
                if (!순회용현재노드.right) {
                    순회용현재노드.right = 새로운노드;
                    this.length += 1;
                    return;
                }
                순회용현재노드 = 순회용현재노드.right;
            }
        }
    }
}
let t = new Tree(5);
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);
```

-   트리 순회

```js
class Node {
    constructor(data) {
        this.data = data;
        // this.child = [] // 2진트리가 아닌 트리를 만들 때 사용할 수 있습니다.
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(data) {
        let init = new Node(data);
        this.root = init;
        this.length = 0;
    }

    insert(data) {
        let 새로운노드 = new Node(data);
        let 순회용현재노드 = this.root;

        while (순회용현재노드) {
            if (data == 순회용현재노드.data) {
                return;
            } else if (data < 순회용현재노드.data) {
                if (!순회용현재노드.left) {
                    순회용현재노드.left = 새로운노드;
                    this.length += 1;
                    return;
                }
                순회용현재노드 = 순회용현재노드.left;
            } else if (data > 순회용현재노드.data) {
                if (!순회용현재노드.right) {
                    순회용현재노드.right = 새로운노드;
                    this.length += 1;
                    return;
                }
                순회용현재노드 = 순회용현재노드.right;
            }
        }
    }

    //깊스너큐
    DFS() {
        // 깊이우선탐색, DFS(Depth First Search)
        // Stack 이용!
        let 방문경로 = [];
        let 스택 = [this.root];

        while (스택.length !== 0) {
            let current = 스택.pop();
            if (current.right) {
                스택.push(current.right);
            }
            if (current.left) {
                스택.push(current.left);
            }
            방문경로.push(current.data);
        }

        return 방문경로;
    }

    BFS() {
        // 너비우선탐색, BFS(Breadth First Search)
        // Queue 이용!
        let 방문경로 = [];
        let 큐 = [this.root];

        while (큐.length !== 0) {
            let current = 큐.shift();
            if (current.right) {
                큐.push(current.right);
            }
            if (current.left) {
                큐.push(current.left);
            }
            방문경로.push(current.data);
        }

        return 방문경로;
    }
}

let t = new Tree(5);
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);

t.DFS();
t.BFS();
```