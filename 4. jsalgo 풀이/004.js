data = ['10 - A. 20 - B. 30 - A.', '1 - A. 1 - A. 1 - A. 1 - A. 2 - B. 1 - A. 1 - B.']

data[0].split('.')

data = ['빙키는 10만큼 A를 훈련했다. 빙키는 날씨가 안 좋은데도 불구하고 20만큼 B를 했다. 빙키는 비가 내리는 가운데서도 10만큼 B를 훈련했다.', '빙키는 A를 30만큼 고민했다. 40만큼 B를 고민했다. 빙키는 A를 70만큼 참 오랜 시간 고민했다. 빙키는 놀랍게도 C를 10만큼 고민했다.']

data[0].match(/[a-zA-Z]/g)
data[0].match(/\d+/g)

let zip = (a, b) => a.map((v, i) => [v, b[i]])

let a = data[0].match(/[a-zA-Z]/g)
let b = data[0].match(/\d+/g)
new Map(zip(a, b))

test = new Map()
test['one'] = '하나' // 이렇게 넣으시면 안되고 set으로 넣으셔야 합니다.
'one' in 훈련수치 // 이렇게 확인하면 안되고 has로 확인해야 합니다.

// 1번 시도
const map = new Map([
    ['num1', 1],
    ['num2', 3],
    ['num3', 5],
]);

const min = Math.min(...map.values());
min // 1

// 2번 시도(이렇게 넣으면 안됩니다. map.size도 0입니다. 이렇게 넣으면 map이라는 인스턴스에 값을 넣게 되는 것입니다.)
const map = new Map()
map['num1'] = 1
map['num2'] = 3
map['num3'] = 5

const min = Math.min(...map.values());
min // Infinity

// 3번 시도
const map = new Map()
map.set('num1', 1)
map.set('num2', 3)
map.set('num3', 4)

const min = Math.min(...map.values());
min // 1



function solution(data) {
    let 훈련수치 = new Map()
    let 고민수치 = new Map()
    let 원래미래 = 0
    let 바뀐미래 = 0

    // 훈련수치
    for (const i of data[0].split('.').slice(0, -1)) {
        key = i.match(/[a-zA-Z]/g)[0]
        value = i.match(/\d+/g)[0]
        // console.log(i)
        if (훈련수치.has(key)) {
            훈련수치.set(key, 훈련수치.get(key) + parseInt(value))
        } else {
            훈련수치.set(key, parseInt(value))
        }
    }

    // 고민수치
    for (const i of data[1].split('.').slice(0, -1)) {
        key = i.match(/[a-zA-Z]/g)[0]
        value = i.match(/\d+/g)[0]
        // console.log(i)
        if (고민수치.has(key)) {
            고민수치.set(key, 고민수치.get(key) + parseInt(value))
        } else {
            고민수치.set(key, parseInt(value))
        }
    }

    // 원래미래
    for (const i of 훈련수치.keys()) {
        if (고민수치.has(i)) {
            원래미래 += 훈련수치.get(i) * 고민수치.get(i)
        }
    }
    if (원래미래 === 0) {
        return '미래가 보이지 않습니다.'
    }

    console.log(훈련수치, 고민수치)

    let 훈련수치중가장큰값 = Math.max(...훈련수치.values())
    let 고민수치중가장큰값 = Math.max(...고민수치.values())
    console.log(훈련수치중가장큰값, 고민수치중가장큰값)

    for (const i of 훈련수치) {
        console.log(i[1])
        console.log(훈련수치.get(i[1]))
        if (i[1] === 훈련수치중가장큰값) {
            훈련수치.set(i[0], i[1] + 100)
        }
    }

    for (const i of 고민수치) {
        if (i[1] === 고민수치중가장큰값) {
            고민수치.set(i[0], i[1] + 100)
        }
    }

    console.log(훈련수치, 고민수치)

    // 바뀐미래
    for (const i of 훈련수치.keys()) {
        if (고민수치.has(i)) {
            바뀐미래 += 훈련수치.get(i) * 고민수치.get(i)
        }
    }

    return `최종 꿈의 설계는 원래 미래 ${원래미래}, 바뀐 미래 ${바뀐미래}입니다. 이 수치대로 Vision을 만듭니다.`

}

solution(['10 - A. 20 - B. 30 - A.', '1 - A. 1 - A. 1 - A. 1 - A. 2 - B. 1 - A. 1 - B.'])