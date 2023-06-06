# 1. 자료구조와 알고리즘, 코딩테스트

-   추천 서적
    -   학문적 접근 : The Art of Computer Programming(도널드 커누스)
    -   코딩테스트 접근 : 파이썬 알고리즘 인터뷰(박상길)
    -   기타 : 파이썬 자료구조와 알고리즘(중학교 학생 가르칠 때 사용), 그림으로 배우는 알고리즘(코드 없고 그림만 있습니다), 알고리즘 산책(역사적인 알고리즘을 쭉 훑어봅니다. 수학적인 내용이 많고 코드는 C++로 되어 있으나 보는데 큰 무리는 없습니다.)

## 1.1 코테 전 준비사항

## 1.1 코테 전 준비사항

1. 가고 싶은 회사에서 [코테를 보는지](https://paullabworkspace.notion.site/446d03bf38df42e19d9fedcf5ceaec61?pvs=4) 확인해보자!
2. [쉬운 문제](https://github.com/paullabkorea/programmersLv0)에서 모르는 것이 있는지 확인하고, 난이도별 어떤 [문법](https://algoview.co.kr/)이 자주 나오는지 체크하자!
2. 플렛폼에 익숙해지자! (프로그래머스, 구름EDU 등)
3. 언어 선택(속도 : C++, 풀이 : Python)
4. 코드 스니펫(트리, 검색, 최단경로(예를 들어 다익스트라), 직접 제작한 함수 등), Cheatsheet, A4 용지 준비
    * 코드 스니펫을 만들어둔 레파지토리 fork - [제주코딩베이스캠프](https://github.com/paullabkorea/programmersLv0)
    * 시험 전 스니펫을 만들지 말고 하루 한 문제씩(저도 매일 한 문제씩 풉니다.)
5. 유용한 스니펫은 만들어 정리!(zip, filter...)
6. 기억해두자! 예외처리!
7. 속도개선
    1. class로 구현
    2. 재귀는 느립니다. 최후의 수단으로 사용하세요.

## 1.2 문제 유형과 출제 방식

-   5 ~ 6시간, 6 ~ 7문제
-   30분씩 4문제, 2시간씩 2문제
-   문제 유형 분석 관련 글
    -   [문제 유형 분석](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS4385594264)
    -   [언어 유불리 여부](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS9145550324&cate_cd=)
    -   [코딩 테스트에 가장 많이 출제 되는 알고리즘](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS7793635735&cate_cd=)
        -   요구사항 구현 알고리즘(33%)
        -   그리디 알고리즘(20%)
        -   너비우선탐색, 깊이우선탐색(20%)
        -   정렬(8%)
        -   다이나믹 프로그래밍, 최단경로, 이진 탐색 등
-   전체 문제 유형
    -   알고리즘
        -   정렬
        -   이진 검색
        -   비트 연산
        -   슬라이딩 윈도우, 페이지 교체, 투포인트
        -   분할 정복
            -   그리디 알고리즘
            -   다이나믹 프로그래밍
            -   퀵소트, 병합정렬
    -   자료구조
        -   선형
            -   스택과 큐, 데크
            -   연결리스트, 해시 테이블
        -   비선형
            -   그래프(최단경로) - 다익스트라가 나오면 매우 어려운 문제
            -   트리
                -   힙
                -   트라이

## 1.3 워밍업 문제

-   활용할 수 있는 기본 개념 코드

```js
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;

Infinity - Infinity(123.45).toFixed(); // 123
(123.45).toFixed(1); // 123.4

const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((a, c) => (a += c));

// 평평하게 만들기 - flat()
[1, [2, [3, [4]]]].flat(); // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(1); // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(2); // -> [1, 2, 3, [4]]
[1, [2, [3, [4]]]].flat(Infinity);

// 배열 만들기
Array(10).fill(0);
[...Array(10)].map((_, i) => i + 1);
".".repeat(10).split("."); // 권장하지 않습니다.
".".repeat(9).split(".");
Array.from("ab".repeat(10));

Array(10);
let x = Array(10)
x[2] = null
x[3] = undefined
x
// [비어 있음 × 2, undefined, null, 비어 있음 × 6]
x.length = 20;
x
// [비어 있음 × 2, undefined, null, 비어 있음 × 16]
Array(10).fill(0);
Array(10).fill(10);
// Array(100).fill().map((_, i) => i + 1)
// [...Array(100)].map((_, i) => i + 1)
Array(100).fill(1).map((value, index)=>value+index);
'.'.repeat(10);
'.'.repeat(10).split('.');
'.'.repeat(9).split('.');
Array.from('abc');
Array.from('a'.repeat(10));
Array.from('ab'.repeat(10));
```

-   활용할 수 있는 커스텀 메서드

```js
const zip = (a, b) => a.map((v, i) => [v, b[i]]);
// zip('hello', [10, 20, 30, 40, 50]) // error
zip([10, 20, 30, 40, 50], "hello"); // 성공
// (2) [10, 'h']
// (2) [20, 'e']
// (2) [30, 'l']
// (2) [40, 'l']
// (2) [50, 'o']
```

### 1.3.1 워밍업 문제(google)

1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

문제 링크 : https://codingdojang.com/scode/393

-   풀이

    ```js
    // '123433332121'.match(/1/g)
    // (3) ['1', '1', '1']
    // 'hello world hello'.match(/hello/g)
    // (2) ['hello', 'hello']

    let str = "";

    for (let i = 1; i <= 10000; i++) {
        str += i;
    }

    console.log(str.match(/8/g).length);

    // '123433332121'.split("")
    // (12) ['1', '2', '3', '4', '3', '3', '3', '3', '2', '1', '2', '1']
    // ['1', '2', '3', '4', '3', '3', '3', '3', '2', '1', '2', '1'].filter(item => item === "1")
    // (3) ['1', '1', '1']
    // ['1', '1', '1'].length
    let str = "";
    for (let i = 1; i <= 10000; i++) {
        str += i;
    }
    console.log(str.split("").filter((item) => item === "8").length);

    // Array(10)
    // (10) [empty × 10]
    // let test = Array(10)
    // undefined
    // test[2] = null
    // null
    // test[3] = undefined
    // undefined
    // test
    // (10) [empty × 2, null, undefined, empty × 6]

    // for (i of test){
    //     console.log(i)
    // }

    // Array(10).fill(0)
    // (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    // Array(10).fill(1).map((v, i) => v + i)
    // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // Array(10).fill(0).map((v, i) => v + i)
    // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    // Array(10).fill(1).map((_, i) => i + 1)
    // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // Array(10).map((_, i) => i + 1)
    // (10) [empty × 10]

    // [...Array(10)].map((_, i) => i + 1)
    // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    Array(10000)
        .fill(0)
        .map((n, index) => n + index)
        .join("")
        .match(/8/g).length;

    // Array(10).fill(1).map((_, i) => i + 1).join("")
    // '12345678910'

    // Array(10).fill(1).map((_, i) => i + 1).join()
    // '1,2,3,4,5,6,7,8,9,10'

    // Array(10).fill(1).map((_, i) => i + 1).join().match(/8/g)
    // ['8']

    // Array(10).fill(1).map((_, i) => i + 1).join().match(/8/g).length
    // 1

    // Array(20).fill(1).map((_, i) => i + 1).join().match(/8/g).length

    Array(10)
        .fill(0)
        .map((n, index) => n + index)
        .toString()
    // '0,1,2,3,4,5,6,7,8,9'

    [...Array(10)].map((_, i) => i + 1).filter(item => item === '8')

    let arr = []
    for(let i = 1;i<=10000;i++){
        arr.push(i);
    }
    let result = [...arr.join('')].filter(el=>el==='8').length
    console.log(result)

    // let arr = []
    // for(let i = 1;i<=20;i++){
    //     arr.push(i);
    // }
    // let result = [...arr.join('')]
    // console.log(result)
    // (31) ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0', '1', '1', '1', '2', '1', '3', '1', '4', '1', '5', '1', '6', '1', '7', '1', '8', '1', '9', '2', '0']

    // arr = [10, 20, 30, 40]
    // (4) [10, 20, 30, 40]
    // arr.join('')
    // '10203040'
    // [...'10203040']
    // (8) ['1', '0', '2', '0', '3', '0', '4', '0']
    // [...arr.join('')]
    // (8) ['1', '0', '2', '0', '3', '0', '4', '0']
    // [...'hello']
    // (5) ['h', 'e', 'l', 'l', 'o']

    (Array(10000).fill(1).map((value, index)=>value+index)+'').split('8').length - 1; // 4000개, 답
    ```

### 1.3.2 워밍업 문제(daum)

1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

예를들어 S = [1, 3, 4, 8, 13, 17, 20] 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

문제링크 : https://codingdojang.com/scode/408

-   풀이

    ```js
    let arr = [1, 3, 4, 8, 13, 17, 20];
    // 앞 요소나 뒤 요소를 알아야 하기 때문에 for of문은 적절치가 않습니다.
    for (i of arr) {
        console.log(i);
    }

    let arr = [1, 3, 4, 8, 13, 17, 20];
    for (i in arr) {
        console.log(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    // 마지막이 undefined, undefined - 20 X
    // 다른 언어는 error, but js에서는 -1안해줘도 error가 안나긴 함
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        console.log(arr[i + 1]);
        console.log("----------");
    }

    for (let i = 0; i < arr.length - 1; i++) {
        console.log(arr[i]);
        console.log(arr[i + 1]);
        console.log("----------");
    }

    for (let i = 0; i < arr.length - 1; i++) {
        console.log(arr[i + 1] - arr[i]);
    }

    for (let i = 1; i < arr.length; i++) {
        console.log(arr[i] - arr[i - 1]);
    }

    let s = [1, 3, 4, 8, 13, 17, 20];
    let arr = [];

    for (let i = 1; i < s.length; i++) {
        arr.push(s[i] - s[i - 1]);
    }

    let index = arr.indexOf(Math.min(...arr));
    console.log(s[index], s[index + 1]);

    // 기본적인 풀이
    let dots = [1, 3, 4, 8, 13, 17, 20];
    let 최솟값 = Infinity;
    let 최솟값인덱스 = 0;

    for (let i = 1; i < dots.length; i++) {
        if (Math.abs(dots[i] - dots[i - 1]) < 최솟값) {
            최솟값 = Math.abs(dots[i] - dots[i - 1]);
            최솟값인덱스 = i;
        }
    }
    console.log(dots[최솟값인덱스], dots[최솟값인덱스 - 1]);
    ```

    -   아래와 같은 방식으로 풀이 예정

    ```python
    list(zip('hello world', [10, 20, 30, 40, 50]))
    list(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20]))
    sorted(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20]), key=lambda i:i[1]-i[0])
    sorted(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20]), key=lambda i:i[1]-i[0])[0]
    ```

    ```js
    const zip = (a, b) => a.map((v, i) => [v, b[i]]);
    let s = [1, 3, 4, 8, 13, 17, 20];

    let pairs = zip(s.slice(0, s.length - 1), s.slice(1));

    function 비교(a, b) {
        if (a[1] - a[0] < b[1] - b[0]) {
            return -1;
        }
        if (a[1] - a[0] > b[1] - b[0]) {
            return 1;
        }
        return 0;
    }

    pairs.sort(비교);
    pairs.sort(비교)[0];
    ```

    ```js
    const zip = (a, b) => a.map((v, i) => [v, b[i]]);
    let s = [1, 3, 4, 8, 13, 17, 20];

    let pairs = zip(s.slice(0, s.length - 1), s.slice(1));
    let 최솟값 = Infinity;
    let 최솟값쌍 = [];

    for ([i, j] of pairs) {
        if (j - i < 최솟값) {
            최솟값 = j - i;
            최솟값쌍 = [i, j];
        }
    }
    ```

## 1.4 기본 자료구조 및 알고리즘

1. 스택과 큐
2. 연결리스트
3. 트리와 그래프
    - 3.1 트리 구현
    - 3.2 트리의 순회
4. 정렬 알고리즘
    - 4.1 선택정렬
    - 4.2 삽입정렬
    - 4.3 병합정렬
    - 4.4 퀵정렬
5. 페이지 교체 알고리즘
6. 슬라이딩 윈도우와 투 포인터 알고리즘

### 1.4.1 스택과 큐

    * 스택 : (삽입)arr.push, (삭제)arr.pop
    * 큐: (삽입)arr.push, (삭제)arr.shift
    * 큐: (삽입)arr.unshift, (삭제)arr.pop
    * arr.unshift(1000) : 맨 앞에 1000을 삽입합니다.
    * arr.shift() : 맨 앞에 값을 꺼냅니다.
    * arr.push : 맨 뒤에 값을 삽입합니다.
    * arr.pop : 맨 뒤에 값을 꺼냅니다.
    * 스택과 큐 간단한 문제
        * 다음중 스택이 될 수 없는 것은? 스택에 들어가는 값은 1, 2, 3, 4, 5이다. (4번)
            * 1. 1, 2, 3, 4, 5
            * 2. 3, 2, 4, 5, 1
            * 3. 4, 3, 2, 5, 1
            * 4. 1, 5, 4, 2, 3
    * stack 구현
        ```js
        // stack
        let s = []
        // 값 삽입
        s.push(10)
        s.push(20)
        s.push(30)
        // 값 꺼냄
        s.pop()
        ```
    * queue 구현
        ```js
        // 보통의 queue
        // s = <- [] <-
        let s = []
        // 값 삽입
        s.push(10)
        s.push(20)
        s.push(30)
        // 값 꺼냄
        s.shift()

        // 내맘대로 queue
        // s = -> [] ->
        let s = []
        // 값 삽입
        s.unshift(10)
        s.unshift(20)
        s.unshift(30)
        // 값 꺼냄
        s.pop()
        ```

#### 스택과 큐 문제
* 문제 링크 : https://jsalgo.co.kr/?page=6#
```js
function solution(data) {
    let result = 0
    let stack = []
    for (let i of data) {
        stack.push(i)
        if (JSON.stringify(stack.slice(-5)) === JSON.stringify([1, 2, 3, 4, 1])) {
            [...new Array(5)].forEach(v => {
                stack.pop()
            })
            result += 1
        }
    }
    return result
}
```

#### ADT 구현
    * 학문적 접근을 하는 경우에만 학습

    ```javascript
    class Stack {
        constructor(){
            this.arr = []; // 연결리스트로 구현할 수도 있지만, 지금 배우지 않았기에 배열로 구현합니다.
            this.length = 0;
        }

        push(data){
            this.arr.push(data);
            this.length += 1;
        }

        pop(index){
            if (this.length == 0){
                return
            }
            if (index > this.arr.length - 1){
                this.length -= 1
                return this.arr.pop()
            }
            let result = this.arr.splice(index, 1)
            this.length -= 1
            return result
        }

        empty(){
            if (this.length == 0){
                return 1
            } else {
                return 0
            }
        }

        top(){
            return this.arr[this.length - 1]
        }

        bottom(){
            return this.arr[0]
        }

        display(){
            return this.arr
        }
    }

    let s = new Stack()
    s.push(10)
    s.push(20)
    s.push(30)
    s.push(40)
    s.push(50)
    s.display()
    ```

### 1.4.2 연결리스트

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
#### 쉬어가기 연습문제
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120807
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120583
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120585
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120906
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120844
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120864
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120956
### 1.4.3 트리와 그래프

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

### 1.4.4 정렬 알고리즘

-   재미있는 사실(재미없을 수도 있습니다. 사례를 말씀드릴게요.)
    -   JavaScript의 Array의 sort는 알고리즘이 고정이 아닙니다. 각 브라우저마다(벤더사마다) 다른 sort를 사용하고 있어서 같은 값이면 브라우저마다 보여지는 화면이 다를 수 있습니다.
    -   Google이 Chrome 70 이전에 개수에 따라 다른 알고리즘을 혼합하는 정렬을 사용했다가(InsertionSort & QuickSort 사용) 얼마전에(18년도에) Timsort로 변경했습니다.
    -   정렬 알고리즘 중에서 가장 인기있는 알고리즘은 병합정렬(존 폰 노이만 제작)이었습니다.
    -   Python에서 시작된 Timsort로(팀 피터스) 대동단결하고 있는 모양세입니다. Python 만세!
    -   Timsort는 삽입정렬과 병합정렬을 적절히 조합한 것이고, 2002년도에 Python을 위해 C로 구현되었습니다.
    -   정렬 알고리즘 3대장 비교(Bset, Worst)
        -   병합 정렬 : nlogn, nlogn
        -   퀵 정렬 : nlogn, n\*\*2
        -   팀소트 : n, nlogn
-   정렬 알고리즘을 작성할 때 주의사항

```js
// 입력값.length는 고정값이 아닙니다!
// block 안에서 pop을 하게 되면 length가 변합니다.
입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
for (let i = 0; i < 입력값.length; i++) {
    console.log(입력값.pop());
    console.log(i);
}
// 아래와 같이 출력해보세요.
입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
for (let i = 0; i < 입력값.length; i++) {
    console.log(입력값.pop());
    console.log(i);
    console.log(입력값.length);
}
```

#### 1.4.4.1 선택정렬

-   step

    -   step 1

    ```
    전 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
    후 = []
    ```

    -   step 2

    ```
    전 = [199, 22, 33, 32, 64, 72, 222, 233]
    후 = [12]
    ```

    -   step 3

    ```
    전 = [199, 33, 32, 64, 72, 222, 233]
    후 = [12, 22]
    ```

    -   step 4

    ```
    전 = [199, 33, 64, 72, 222, 233]
    후 = [12, 22, 32]
    ```

    -   step 5

    ```
    전 = [199, 64, 72, 222, 233]
    후 = [12, 22, 32, 33]
    ```

-   선택정렬 구현

```js
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
// let 길이 = 입력값.length // 가변될 수 있는 값을 미리 변수로 선언하는 방식을 사용할 수도 있습니다.
while (!!입력값.toString()) {
    // !! 안해주어도 됩니다.
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값);
    입력값.splice(입력값.indexOf(최솟값), 1);
}

console.log(정렬된배열);

// 메서드 최소화된 코드, 새로운 arr를 만들지 않는 코드
// 최솟값 <-> 현재값
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];

function selectionSort(arr) {
    // [199, 22, 33, 12, 32, 64, 72, 222, 233]
    // 첫번째 순회
    // min_index = 0
    // 두번째 순회
    // arr[min_index] > arr[j]
    // arr[0] > arr[1] -> min_index = 1
    // arr[1] > arr[2] -> min_index = 1
    // arr[1] > arr[3] -> min_index = 3
    // arr[3] > arr[4] -> min_index = 3
    // arr[3] > arr[5] -> min_index = 3
    // arr[3] > arr[6] -> min_index = 3
    // arr[3] > arr[7] -> min_index = 3
    // arr[0](199) <-> arr[3](12)
    // 순회가 돌면 돌 수록 최솟값이 앞에 배치되게 된다.
    for (let i = 0; i < arr.length; i++) {
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_index] > arr[j]) {
                min_index = j;
            }
        }
        let temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(selectionSort(입력값));
```

#### 1.4.4.2 삽입정렬

-   step

    -   step 1

    ```
    전 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
    후 = []
    ```

    -   step 2

    ```
    전 = [22, 33, 12, 32, 64, 72, 222, 233]
    후 = [199]
    ```

    -   step 3

    ```
    전 = [33, 12, 32, 64, 72, 222, 233]
    후 = [22, 199]
    ```

    -   step 4

    ```
    전 = [12, 32, 64, 72, 222, 233]
    후 = [22, 33, 199] // 이렇게 껴들려면 껴들 수 있는 index를 알아내야 합니다.
    ```

    -   step 5

    ```
    전 = [32, 64, 72, 222, 233]
    후 = [12, 22, 33, 199]
    ```

*   구현코드

```js
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이_들어갈_인덱스(정렬된배열, 삽입값) {
    for (const i in 정렬된배열) {
        if (삽입값 < 정렬된배열[i]) {
            return i;
        }
    }
    return 정렬된배열.length;
}

for (let i = 0; i < 배열의길이; i++) {
    let 삽입값 = 입력값.shift();
    let 인덱스 = 삽입값이_들어갈_인덱스(정렬된배열, 삽입값);
    정렬된배열.splice(인덱스, 0, 삽입값);
}

console.log(정렬된배열);

// 참고만 하고 가도록 하겠습니다.
function insertIndex(sorted_arr, value) {
    //삽입될 위치를 찾는 함수
    for (let i in sorted_arr) {
        if (value < sorted_arr[i]) {
            return i;
        }
    }
    return sorted_arr.length;
}

function insertSort(arr) {
    let sorted_arr = [];

    while (arr.length != 0) {
        let value = arr.shift();
        //삽입될 위치를 반환함
        let index = insertIndex(sorted_arr, value);
        //삽입될 위치에 값을 반환
        sorted_arr.splice(index, 0, value);
    }
    return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function insertIndex(sorted_arr, value) {
    //삽입될 위치를 찾는 함수
    for (let i in sorted_arr) {
        if (value < sorted_arr[i]) {
            return i;
        }
    }
    return sorted_arr.length;
}

function insertSort(arr) {
    let sorted_arr = [];

    while (arr.length != 0) {
        let [value, ...arr2] = arr;
        arr = arr2;
        //삽입될 위치를 반환함
        let index = insertIndex(sorted_arr, value);
        //삽입될 위치에 값을 반환
        sorted_arr.splice(index, 0, value);
    }
    return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));
```

#### 1.4.4.3 병합정렬

-   Worst와 Best 모두 O(nlogn), 어떤 정렬보다 빠름, 동일 할 수 있음
-   분할 정복(Divide and Conquer)

*   step

    ```
    // 분할
    [5, 10, 66, 77, 54, 32, 11, 15]
    [5, 10, 66, 77], [54, 32, 11, 15]
    [5, 10], [66, 77], [54, 32], [11, 15]
    [5], [10], [66], [77], [54], [32], [11], [15]

    // 정복
    [5, 10], [66, 77], [32, 54], [11, 15]
    [5, 10, 66, 77], [11, 15, 32, 54]
    [5, 10, 11, 15, 32, 54, 66, 77]
    ```

*   구현코드

    -   step 1

    ```js
    let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

    function 병합정렬(입력배열) {
        let 입력배열의길이 = 입력배열.length;
        if (입력배열의길이 <= 1) {
            return 입력배열;
        }
        let 중간값 = parseInt(입력배열의길이 / 2);
        // ~~(입력배열의길이 / 2)와 같습니다.
        let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
        let 그룹둘 = 병합정렬(입력배열.slice(중간값));

        return `그룹하나:${그룹하나}\n그룹둘:${그룹둘}\n\n`;
    }

    console.log(병합정렬(입력값));
    ```

    -   step 2

    ```js
    let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

    function 병합정렬(입력배열) {
        //분할
        let 입력배열의길이 = 입력배열.length;
        let 결과값 = [];
        if (입력배열의길이 <= 1) {
            return 입력배열;
        }
        let 중간값 = parseInt(입력배열의길이 / 2);
        // ~~(입력배열의길이 / 2)와 같습니다.
        let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
        let 그룹둘 = 병합정렬(입력배열.slice(중간값));

        // return `그룹하나:${그룹하나}\n그룹둘:${그룹둘}\n\n`;

        //정복
        while (그룹하나.length != 0 && 그룹둘.length != 0) {
            if (그룹하나[0] < 그룹둘[0]) {
                결과값.push(그룹하나.shift());
            } else {
                결과값.push(그룹둘.shift());
            }
        }
        while (그룹하나.length != 0) {
            결과값.push(그룹하나.shift());
        }
        while (그룹둘.length != 0) {
            결과값.push(그룹둘.shift());
        }

        return 결과값;
    }

    console.log(병합정렬(입력값));
    ```

*   개선 코드

    ```js
    // let a = [10, 20, 30]
    // let b = [100, 200, 300]
    // [...a, ...b]
    // (6) [10, 20, 30, 100, 200, 300]
    // a.concat(b)
    // (6) [10, 20, 30, 100, 200, 300]
    let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

    function 병합정렬(입력배열) {
        //분할
        let 입력배열의길이 = 입력배열.length;
        let 결과값 = [];
        if (입력배열의길이 <= 1) {
            return 입력배열;
        }
        let 중간값 = parseInt(입력배열의길이 / 2);
        // ~~(입력배열의길이 / 2)와 같습니다.
        let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
        let 그룹둘 = 병합정렬(입력배열.slice(중간값));

        // return `그룹하나:${그룹하나}\n그룹둘:${그룹둘}\n\n`;

        //정복
        while (그룹하나.length != 0 && 그룹둘.length != 0) {
            if (그룹하나[0] < 그룹둘[0]) {
                결과값.push(그룹하나.shift());
            } else {
                결과값.push(그룹둘.shift());
            }
        }

        //개선된 코드
        결과값 = [...결과값, ...그룹하나];
        결과값 = [...결과값, ...그룹둘];

        return 결과값;
    }

    console.log(병합정렬(입력값));
    ```

#### 1.4.4.4 퀵정렬

-   best - O(nlog2n), worst - O(n\*\*2)
-   피봇값(pivot)을 기준으로 정렬(피봇값은 처음값, 중간값, 마지막 값)
-   실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음.

*   step

    ```
    // 원본
    [66, 77, 54, 32, 10, 5, 11, 15]

    // step 1
    // 피봇값 : 66
    [54, 32, 10, 5, 11, 15] + [66] + [77]

    // step 2
    // 피봇값 : 54
    [32, 10, 5, 11, 15] + [54] + [66] + [77]

    // step 3
    // 피봇값 : 32
    [10, 5, 11, 15] + [32] + [54] + [66] + [77]

    // step 4
    // 피봇값 : 10
    [5] + [10] + [11, 15] + [32] + [54] + [66] + [77]

    // step 5
    // 피봇값 : 11
    [5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]

    [5, 10, 11, 15, 32, 54, 66, 77]
    ```

*   구현코드

```js
let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

function 퀵정렬(입력배열) {
    let 입력배열의길이 = 입력배열.length;

    if (입력배열의길이 <= 1) {
        return 입력배열;
    }

    let 피벗값 = 입력배열.shift();
    let 그룹하나 = [];
    let 그룹둘 = [];

    for (let i in 입력배열) {
        if (입력배열[i] < 피벗값) {
            그룹하나.push(입력배열[i]);
        } else {
            그룹둘.push(입력배열[i]);
        }
    }
    console.log(
        `그룹하나 : ${그룹하나}\n그룹둘 : ${그룹둘}\n피벗값 : ${피벗값}\n`
    );

    return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘));
}

퀵정렬(입력값);
```

### 1.4.5 페이지 교체 알고리즘

// https://www.notion.so/paullabworkspace/db83d9c4bbe6410ea208e6dc2daff07e
// 페이지 교체 알고리즘 : 메모리를 효율적으로 사용하기 위해서 어떤 데이터를 메모리에 적재할지 결정하는 알고리즘
// FIFO(오래된 녀석이 가장 빨리 나간다)
// 순서 : 0, 4, 6, 5, 4, 7, 8
[]
[0]
[0, 4]
[0, 4, 6]
[4, 6, 5]
[4, 6, 5] // 4가 hit
[6, 5, 7]
[5, 7, 8]
// LRU(오랫동안 사용되지 않은 녀석이 삭제)
// 순서 : 0, 4, 6, 5, 4, 7, 8
[]
[0]
[0, 4]
[0, 4, 6]
[4, 6, 5]
[6, 5, 4] // 4가 hit
[5, 4, 7]
[4, 7, 8]

// 문제 : https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/
// 캐시 크기(cacheSize)와 도시이름 배열(cities)
// cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30
// cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
// 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.
// LRU(Least Recently Used)를 사용한다.
// hit일 경우 실행시간은 1이다.
// miss일 경우 실행시간은 5이다.

// 캐시크기 3
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
["","",""]

["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
["Jeju","",""] // 5

/////// stop //////

```js
// 캐시크기 3 - 총 27
// 바나나, 체리, 한라봉, 체리, a, b
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"][("Jeju", "", "")][ //5
    ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("Jeju", "Pangyo", "")][ //5
    ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("Jeju", "Pangyo", "Seoul")][ //5
    ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("Pangyo", "Seoul", "NewYork")][ //5
    ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("Seoul", "NewYork", "LA")][ //5
    ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("NewYork", "LA", "Seoul")][ //1
    ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("NewYork", "Seoul", "LA")][ //1
    // LRU
    // hit - 1
    // miss - 5
    ("바나나", "체리", "한라봉", "자몽", "수박", "수박", "체리")
][바나나][(바나나, 체리)][(바나나, 체리, 한라봉)][(체리, 한라봉, 자몽)][ // 5 // 5 // 5 // 5
    (한라봉, 자몽, 수박)
][(한라봉, 자몽, 수박)][(자몽, 수박, 체리)][바나나][(바나나, 체리)][ // 5 // 1 - hit // 5 // 5 // 5
    (바나나, 체리, 한라봉)
][(바나나, 한라봉, 체리)][(한라봉, 체리, a)][(체리, a, b)][ // 5 // 1 // 5 // 5
    // FIFO 알고리즘(캐시:3)
    ("바나나", "체리", "한라봉", "자몽", "수박", "수박", "체리")
][바나나][(바나나, 체리)][(바나나, 체리, 한라봉)][(체리, 한라봉, 자몽)][ // 5 // 5 // 5 // 5
    (한라봉, 자몽, 수박)
][(한라봉, 자몽, 수박)][(자몽, 수박, 체리)]; // 5 // 1 - hit // 5
```

## 2.1 코테 실전 풀이

### 2.1.1 비밀지도(18년)

-   https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
-   주제 : 2진법, 진법 연산, replace, or 연산

```
n	    5
arr1	[9, 20, 28, 18, 11]
arr2	[30, 1, 21, 17, 28]

    01001 (9)
or  11110 (30)
---------
    11111

    10100 (20)
or  00001 (1)
---------
    10101

    11100 (28)
or  10101 (21)
---------
    11101

["#####","# # #", "### #", "# ##", "#####"]
```

```js
// step 1
function solution(n, arr1, arr2) {
    const zip = (a, b) => a.map((v, i) => [v, b[i]]);
    for ([i, j] of zip(arr1, arr2)){
        console.log(i, j)
    }
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])

// step 2
function solution(n, arr1, arr2) {
    const zip = (a, b) => a.map((v, i) => [v, b[i]]);
    for ([i, j] of zip(arr1, arr2)){
        console.log(i | j)
    }
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])

// step 3
function solution(n, arr1, arr2) {
    answer = []
    const zip = (a, b) => a.map((v, i) => [v, b[i]]);
    for ([i, j] of zip(arr1, arr2)){
        answer.push((i | j).toString(2).replace(/1/g, '#').replace(/0/g, ' '))
    }
    return answer
}

// step 4
function solution(n, arr1, arr2) {
    answer = []
    const zip = (a, b) => a.map((v, i) => [v, b[i]]);
    for ([i, j] of zip(arr1, arr2)){
        answer.push((i | j).toString(2).padStart(n, '0').replace(/1/g, '#').replace(/0/g, ' '))
    }
    return answer
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])

// step 4
function solution(n, arr1, arr2) {
    answer = []
    for (let i = 0; i < n; i++){
        answer.push((arr1[i] | arr2[i]).toString(2).padStart(n, '0').replace(/1/g, '#').replace(/0/g, ' '))
    }
    return answer
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])

// 이 문제에서 필요한 기초 상식
// 1. bit 단위 or 연산자
28 | 21
29
20 | 1
21
20 | 2
22
20 | 3
23
20 | 4

// 2. toString()
let x = 9
9.toString()
x.toString()
'9'
x.toString(2)
'1001'
x.toString(8)
'11'
x.toString(16)
'9'

// 3. replace
let x = 9
x.toString(2).replace('1', '#')
x.toString(2).replace(/1/g, '#').replace(/0/g, ' ')

// 4. padStart
'1001'.padStart(10, '0');
```

### 2.1.2 다트 게임(18년)

-   https://school.programmers.co.kr/learn/courses/30/lessons/17682
-   문자열 파싱(Parsing)
    -   3번의 기회
    -   0점에서 10점
    -   보너스 - Single(S), Double(D), Triple(T) - 1제곱, 2제곱, 3제곱 (점수^1 , 점수^2 , 점수^3 )으로 계산
    -   옵션 - 스타상(\*, 2배) , 아차상(#, 마이너스)
    -   1S - 2
    -   2D - 8
    -   \*3T - 27
    -   1D - 1
    -   2S# - -2
    -   10S - 10

*   문제풀이

    -   step 1

    ```js
    testcase = [
        "1S2D*3T", // 37
        "1D2S#10S", // 9
        "1D2S0T", // 3
    ];

    function solution(dartResult) {
        let answer = [];
        let result = 0;
        let temp = 0;

        for (let i = 0; i < dartResult.length; i++) {
            if (dartResult[i] >= 0 && dartResult[i] <= 9) {
                temp = parseInt(dartResult[i]); // 이렇게 하게 되면 10점을 고려하지 않은 것!
            } else if (dartResult[i] == "S") {
                answer.push(temp);
            } else if (dartResult[i] == "D") {
                answer.push(temp ** 2);
            } else if (dartResult[i] == "T") {
                answer.push(temp ** 3);
            }
        }
        return answer;
    }

    console.log(solution(testcase[0]));
    console.log(solution(testcase[1]));
    console.log(solution(testcase[2]));
    // 정규표현식을 사용하면 보다 편하게 문자열 parsing 문제를 풀 수 있습니다.
    // '1S2D*3T'.match(/([0-9]|10)([SDT])([\*\#]?)/g)

    // 번외편
    function solution(dartResult) {
        let 승수 = { S: 1, D: 2, T: 3 };
        let answer = dartResult
            .match(/([0-9]|10)([SDT])([\*\#]?)/g)
            .map((item) => {
                return parseInt(item[0]) ** 승수[item[1]];
            });
        return answer.reduce((a, c) => a + c);
    }

    console.log(solution("1S2D3T"));
    ```

    -   step 2

    ```js
    function solution(dartResult) {
        let answer = [];
        let result = 0;
        let temp = 0;

        for (let i = 0; i < dartResult.length; i++) {
            if (dartResult[i] >= 0 && dartResult[i] <= 9) {
                if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
                    temp = 10;
                    // continue
                    i++;
                } else {
                    temp = parseInt(dartResult[i]);
                }
            } else if (dartResult[i] == "S") {
                answer.push(temp);
            } else if (dartResult[i] == "D") {
                answer.push(temp ** 2);
            } else if (dartResult[i] == "T") {
                answer.push(temp ** 3);
            } else if (dartResult[i] == "*") {
                answer[answer.length - 1] *= 2;
                answer[answer.length - 2] *= 2;
            } else if (dartResult[i] == "#") {
                answer[answer.length - 1] *= -1;
            }
        }
        for (const value of answer) {
            result += value;
        }
        return result;
    }
    ```

### 2.1.3 캐시(18년)

-   링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17680?language=javascript
-   문제풀이

```js
// 캐시문제
// 키워드 : LRU 알고리즘, 페이지 교체 알고리즘
// 3	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	50
// 3	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]	21
// 2	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	60

testcase = [
    [
        3,
        [
            "Jeju",
            "Pangyo",
            "Seoul",
            "NewYork",
            "LA",
            "Jeju",
            "Pangyo",
            "Seoul",
            "NewYork",
            "LA",
        ],
    ],
    [
        3,
        [
            "Jeju",
            "Pangyo",
            "Seoul",
            "Jeju",
            "Pangyo",
            "Seoul",
            "Jeju",
            "Pangyo",
            "Seoul",
        ],
    ],
    [
        2,
        [
            "Jeju",
            "Pangyo",
            "Seoul",
            "NewYork",
            "LA",
            "SanFrancisco",
            "Seoul",
            "Rome",
            "Paris",
            "Jeju",
            "NewYork",
            "Rome",
        ],
    ],
];

for (const [cacheSize, cities] of testcase) {
    console.log(solution(cacheSize, cities));
}

// cacheSize : 3
// cities : ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]
function solution(cacheSize, cities) {
    let time = 0;
    let cache = [];
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase();
        let index = cache.indexOf(city);
        if (index !== -1) {
            //hit
            cache.splice(index, 1);
            cache.push(city);
            time += 1;
        } else {
            //miss
            cache.push(city);
            time += 5;
            if (cacheSize < cache.length) {
                cache.shift();
            }
        }
    }
    return time;
}
```

### 2.1.4 오픈채팅방(19년)

-   링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42888?language=javascript
-   입력레코드

```js
[
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
];
```

-   풀이를 위한 기본 문법

```js
let test = ["A 10 !", "B 20 !", "A 22", "B 20 @", "A 21 @"];

test.forEach((s) => console.log(s));

test.forEach((s) => {
    console.log(s);
    console.log(s.split(" "));
    console.log("---------");
});

test.forEach((s) => {
    console.log(s);
    const [a, b, c] = s.split(" ");
    console.log(a, b, c);
    console.log("---------");
});
```

-   step 별 풀이

```js
{
    '아이디': '닉네임',
    '아이디': '닉네임',
    '아이디': '닉네임',
    //...
}
// 풀이 방식
[
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

{
    'uid1234': 'Prodo',
    'uid4567': 'Ryan',
    //...
}

['uid1234', '님이 들어왔습니다.']
['uid4567', '님이 들어왔습니다.']
['uid1234', '님이 나갔습니다.']
['uid1234', '님이 들어왔습니다.']

[
    "Prodo님이 들어왔습니다.",
    "Ryan님이 들어왔습니다.",
    "Prodo님이 나갔습니다.",
    "Prodo님이 들어왔습니다."
]

// step 1
let record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
];

function solution(record){
    let answer = []
    let user = {}
    for (const i of record){
        const [상태, 아이디, 닉네임] = i.split(' ')
        answer.push([상태, 아이디, 닉네임])
    }
    return answer
}

solution(record)

// step 2
let record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
];

function solution(record){
    let answer = []
    let 유저정보 = {}
    for (const i of record){
        const [상태, 아이디, 닉네임] = i.split(' ')
        // answer.push([상태, 아이디, 닉네임])
        if (상태 === 'Enter'){
            유저정보[아이디] = 닉네임
            answer.push([아이디, '님이 들어왔습니다.'])
        } else if (상태 === 'Leave'){
            answer.push([아이디, '님이 나갔습니다.'])
        } else if (상태 === 'Change'){
            유저정보[아이디] = 닉네임
        }
    }
    //console.log(유저정보)
    answer = answer.map(item => 유저정보[item[0]] + item[1])
    return answer
}

solution(record)
```

### 2.1.5 오픈채팅방(19년)

-   링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42889

```js
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

// 실패율 === 아직 클리어 못한 플레이어의 수 / 도달한 플레이어 수
// 전체 스테이지의 개수 N
// 스테이지의 번호가 담긴 배열 stages가 매개변수

// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다. (오름차순)

// N	stages                  	result
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3, 4, 2, 1, 5]
// 4	[4, 4, 4, 4, 4]	            [4, 1, 2, 3]

// 스테이지에 도달한 사람의 수
// 1stage === 1
// 2stage === 3
// 3stage === 2
// 4stage === 1
// 5stage === 0

// 실패율
// 1stage === 1/8
// 2stage === 3/7 === 3/(8-1)
// 3stage === 2/4 === 2/(7-3)
// 4stage === 1/2 === 1/(4-2)
// 5stage === 0/1 === 0/(2-1)

// 문제 풀이를 위한 기본 메서드
[2, 1, 2, 6, 2, 4, 3, 3]
    .filter((user) => user === 3)
    [
        // (2) [3, 3]
        (2, 1, 2, 6, 2, 4, 3, 3)
    ].filter((user) => user === 3).length;
// 2

// step 1 스테이지에 머물고 있는 사람 리스트
function solution(N, stages) {
    let 실패율 = [];
    let 유저수 = stages.length;

    for (let i = 1; i < N; i++) {
        let 도달한사람수 = stages.filter((user) => user === i);
        실패율.push(도달한사람수);
    }
    return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// step 2 실패율
function solution(N, stages) {
    let 실패율 = [];
    let 유저수 = stages.length;

    for (let i = 1; i < N; i++) {
        let 도달한사람수 = stages.filter((user) => user === i).length;
        실패율.push(도달한사람수 / 유저수);
        유저수 -= 도달한사람수;
        console.log(유저수, 도달한사람수);
    }
    return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// step 3 정렬
function solution(N, stages) {
    let 실패율 = [];
    let 유저수 = stages.length;

    for (let i = 1; i <= N; i++) {
        let 도달한사람수 = stages.filter((user) => user === i).length;
        let 확률 = 도달한사람수 / 유저수;
        실패율.push({ 스테이지: i, 확률 });
        유저수 -= 도달한사람수;
        console.log(유저수, 도달한사람수);
    }

    // 정렬 기준 확인 필요
    실패율.sort((a, b) => {
        if (a.확률 < b.확률) return 1;
        if (a.확률 > b.확률) return -1;
        if (a.확률 === b.확률) return 0;
    });
    return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// step 4 스테이지만 출력
function solution(N, stages) {
    let 실패율 = [];
    let 유저수 = stages.length;

    for (let i = 1; i <= N; i++) {
        let 도달한사람수 = stages.filter((user) => user === i).length;
        let 확률 = 도달한사람수 / 유저수;
        실패율.push({ 스테이지: i, 확률 });
        유저수 -= 도달한사람수;
        console.log(유저수, 도달한사람수);
    }

    // 정렬 기준 확인 필요
    실패율.sort((a, b) => {
        if (a.확률 < b.확률) return 1;
        if (a.확률 > b.확률) return -1;
        if (a.확률 === b.확률) return 0;
    });
    return 실패율.map((object) => object.스테이지);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
```
