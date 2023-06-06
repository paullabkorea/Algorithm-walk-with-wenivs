// 카카오 2020년 공채문제 4번
// https://programmers.co.kr/learn/courses/30/lessons/60060


// -- section 1 --
words   : ["frodo", "front", "frost", "frozen", "frame", "kakao"]	
queries : ["fro??", "????o", "fr???", "fro???", "pro?"]
result  : [3, 2, 4, 1, 0]

"fro??"
["frodo", "front", "frost", "frozen", "frame", "kakao"] // -> 3

"????o"
["frodo", "front", "frost", "frozen", "frame", "kakao"] // -> 2

"fr???"
["frodo", "front", "frost", "frozen", "frame", "kakao"] // -> 4

"frodo".match(/fro../g)
// ['frodo']
"frodot".match(/fro../g)
// ['frodo']
"frotdot".match(/fro../g)
// ['frotd']
"ftrotdot".match(/fro../g)
// null
"aafrotdot".match(/fro../g)
// ['frotd']
"abcdo".match(/....o/g)
// ['abcdo']
"abcdok".match(/....o/g)
// ['abcdo']
"dok".match(/....o/g)
// null


// -- section 2 --
let 패턴 = new RegExp('fro..', 'g')
"frodo".match(패턴)
// ['frodo']
"ftrotdot".match(패턴)
// null

let 패턴 = new RegExp('fro..', 'g')
패턴.test("frodo") // 우리한테 필요한 것은 boolean 값
// true


// 코드 시작

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]	
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let q = queries[0].replaceAll('?', '.')
console.log(q)
let pattern = new RegExp(q, 'g')
let count = 0
for (let word of words){
    if (pattern.test(word)){
        count++
    }
}
console.log(count)

// 코드 끝

// true, false를 반복합니다.
pattern.test(words[0])
pattern.test(words[0])
pattern.test(words[0])
pattern.test(words[0])
pattern.test(words[0])
pattern.test(words[0])

// 따라서 아래 코드를 모두 판별하고 싶을 때에는
// 패턴을 동적으로 할당해줘야 합니다.
pattern.test(words[1])
pattern.test(words[2])
pattern.test(words[3])
pattern.test(words[4])
pattern.test(words[5])


// 코드 시작

// 따라서 길이도 체크를 해주어야 합니다.
function solution(words, queries){
    let q = queries[0].replaceAll('?', '.')
    let count = 0
    for (let word of words){
        const pattern = new RegExp(q, 'g')
        // 길이 체크를 안했을 경우 frozen이 true가 됩니다.
        if (pattern.test(word) && q.length === word.length){
            count++
        }
    }
    console.log(count)
}

solution(
    ["frodo", "front", "frost", "frozen", "frame", "kakao"], 
    ["fro??", "????o", "fr???", "fro???", "pro?"]
)

// 코드 끝


// -- section 3 --
function solution(words, queries){
    let result = []
    for (let q of queries){
        q = q.replaceAll('?', '.')
        let count = 0
        for (let word of words){
            const pattern = new RegExp(q, 'g')
            // 길이 체크를 안했을 경우 frozen이 true가 됩니다.
            if (pattern.test(word) && q.length === word.length){
                count++
            }
        }
        result.push(count)
    }
    return result
}

solution(
    ["frodo", "front", "frost", "frozen", "frame", "kakao"], 
    ["fro??", "????o", "fr???", "fro???", "pro?"]
)

// -- section 4 --
// 4번이니까, 난이도가 4/5니까, 정규표현식으로 풀리지 않을 것이다.
// 문자열 관련 알고리즘 검색 -> https://izmirprogramming.tistory.com/8 등
// 대부분은 class 형태의 링크드 리스트가 답
// '트라이 알고리즘'을 사용해야겠다!

/*
패턴 : 'fro..'
'frodo'
{'f' : 다음object} count : 1
{'r' : 다음object} count : 1
{'o' : 다음object} count : 1 // 여기까지만 보면 됩니다.
{'d' : 다음object} count : 1
{'o' : 다음object} count : 1
*/

// {
//     value : 'f'
//     count : 1
//     {
//         value : 'r'
//         count : 1
//         {
//             value : 'o'
//             count : 1
//             {
//                 value : 'd'
//                 count : 1
//                 {
//                     value : 'o'
//                     count : 1
//                 }
//             }
//         }
//     }
// }

/*
패턴 : 'fro..'
'frodo', 'front'
{'f' : 다음object} count : 2
{'r' : 다음object} count : 2
{'o' : 다음object} count : 2 // 여기까지만 보면 됩니다.
{'d' : 다음object} count : 1, {'n' : 다음object} count : 1
{'o' : 다음object} count : 1, {'t' : 다음object} count : 1
*/

// [{'f':2}, {'r':2}, {'o':2}, {'d':1, 'n':1}, {'o':1, 't':1}]
// [[{}], [{},{}], [{},{},{}], [{},{},{},{}], [{},{},{},{},{}]...

let 트라이 = []
for (let i = 0; i < 10; i++) {
    let insertArray = []
    for (let j = 0; j < i + 1; j++) {
        insertArray.push({})
    }
    트라이.push(insertArray)
}

트라이

// [{…}] -> 0번째 인덱스인데 1글자가 들어가니까요.
// [{…}, {…}]
// [{…}, {…}, {…}]
// [{…}, {…}, {…}, {…}]
// [{…}, {…}, {…}, {…}, {…}]
// [{…}, {…}, {…}, {…}, {…}, {…}]
// ... 중략 ...

function solution (words){
    let 트라이 = []
    for (let i = 0; i < 10; i++) {
        let insertArray = []
        for (let j = 0; j < i + 1; j++) {
            insertArray.push({})
        }
        트라이.push(insertArray)
    }

    for (const word of words) {
        for (const index in word) {
            let s = word[index]
            // console.log(s)
            if(s in 트라이[word.length-1][index]){
                트라이[word.length-1][index][s] += 1
            } else {
                트라이[word.length-1][index][s] = 1
            }
        }
    }
    return 트라이
}

solution(['frodo', 'front'])
solution(["frodo", "front", "frost", "frozen", "frame", "kakao"])


// -- section 5 --

// Tree로 해결하는 방법(대부분의 검색 효율성은 Tree 문제)
// 단어 문제이기 때문에 트라이라는 알고리즘 선택

// 하나의 레벨(층) 단위의 object 생성
{
    'f' : {
        '연결노드' : 다음노드,
        '개수' : 0
    }
}

// 하나의 레벨(층) 단위의 object 생성
// 레벨1 노드
{
    'f' : {
        '연결노드' : 다음노드,
        '개수' : 2,
        '현재레벨' : 1 //문자열의 개수
    }
}

// 레벨2 'f' 연결 노드
{
    'r' : {
        '연결노드' : 다음노드,
        '개수' : 2,
        '현재레벨' : 2
    }
}

// 레벨3 'r' 연결 노드
{
    'o' : {
        '연결노드' : 다음노드,
        '개수' : 2,
        '현재레벨' : 3
    }
}

// 레벨4 'o' 연결 노드
{
    'd' : {
        '연결노드' : 다음노드,
        '개수' : 1,
        '현재레벨' : 4
    },
    'n' : {
        '연결노드' : 다음노드,
        '개수' : 1,
        '현재레벨' : 4
    }
}

// 레벨5 'd' 연결 노드
{
    'o' : {
        '연결노드' : 다음노드,
        '개수' : 1,
        '현재레벨' : 5
    }
}

// 레벨5 'n' 연결 노드
{
    't' : {
        '연결노드' : 다음노드,
        '개수' : 1,
        '현재레벨' : 5
    }
}

class 노드 {
    constructor(){
        this.children = {}
        this.count = 0
    }
}

class 트라이 {
    constructor(){
        this.root = new 노드()
    }

    insertData(word){
        // 'frodo'
        let current = this.root
        current.count += 1
        for (const s of word) {
            //let child = current.children['f']
            let child = current.children[s]

            if(!child) {
                child = new 노드()
                current.children[s] = child
            }

            child.count += 1
            current = child
        }
    }

    search(query){
        let current = this.root
        for (const q of query) {
            if(q === '?') {
                return current.count
            } else if (!current.children[q]){
                return 0;
            }
            current = current.children[q]
        }
    }
}

function solution(words, queries){
    answer = []

    const 트라이배열 = Array(11)
    const 트라이역배열 = Array(11)

    for (const word of words) {
        const 단어길이 = word.length
        const 트라이1 = 트라이배열[단어길이] ? 트라이배열[단어길이] : new 트라이()
        const 트라이2 = 트라이역배열[단어길이] ? 트라이역배열[단어길이] : new 트라이()
        트라이1.insertData(word)
        트라이2.insertData([...word].reverse().join(''))
        트라이배열[단어길이] = 트라이1
        트라이역배열[단어길이] = 트라이2
    }

    console.log(트라이배열)
    console.log(트라이역배열)

    return answer
}

solution(
    ["frodo", "front", "frost", "frozen", "frame", "kakao"], 
    ["fro??", "????o", "fr???", "fro???", "pro?"]
)

// -- section 6 --

class 노드 {
    constructor(){
        this.children = {}
        this.count = 0
    }
}

class 트라이 {
    constructor(){
        this.root = new 노드()
    }

    insertData(word){
        let current = this.root
        current.count += 1
        for (const s of word) {
            let child = current.children[s]

            if(!child) {
                child = new 노드()
                current.children[s] = child
            }

            child.count += 1
            current = child
        }
    }

    search(query){
        // 'fro??'
        let current = this.root
        for (const q of query) {
            if(q === '?') {
                return current.count
            } else if (!current.children[q]){
                return 0;
            }
            current = current.children[q]
        }
    }
}

function solution(words, queries){
    answer = []
    
    const 트라이배열 = Array(11)
    const 트라이역배열 = Array(11)

    for (const word of words) {
        const 단어길이 = word.length
        const 트라이1 = 트라이배열[단어길이] ? 트라이배열[단어길이] : new 트라이()
        const 트라이2 = 트라이역배열[단어길이] ? 트라이역배열[단어길이] : new 트라이()
        트라이1.insertData(word)
        트라이2.insertData([...word].reverse().join(''))
        트라이배열[단어길이] = 트라이1
        트라이역배열[단어길이] = 트라이2
    }

    // console.log(트라이배열)
    // console.log(트라이역배열)

    for (const query of queries) {
        if (!트라이배열[query.length]){
            answer.push(0)
            continue
        }

        let count

        if(query[0] !== '?'){
            count = 트라이배열[query.length].search(query)
        } else {
            count = 트라이역배열[query.length].search([...query].reverse().join(''))
        }
        answer.push(count)
    }

    return answer
}

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]	
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

solution(words, queries)