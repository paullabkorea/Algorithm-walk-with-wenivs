// https://www.notion.so/paullabworkspace/javascript-sort-compare-function-1b35e365e3db4c889464150ee15ec7d5

data = [1, 2, 10, 20, 30, 40, 11, 22]
data.sort()
data


data = [1, 2, 10, 20, 30, 40, 11, 22]
data.sort((a, b) => a - b)
data


data = [
    [6, 'a', 'hello'],
    [3, 'f', 'hello world'],
    [7, 'b', 'hello a'],
    [8, 'g', 'hello world hello'],
    [4, 'e', 'hello world hello world'],
    [2, 'c', 'hello aa'],
    [1, 'd', 'hello abc'],
]
data.sort((a, b) => a[2].length - b[2].length)
data


data = [
    [6, 'a', 'hello'],
    [3, 'f', 'hello world'],
    [7, 'b', 'hello a'],
    [8, 'g', 'hello world hello'],
    [4, 'e', 'hello world hello world'],
    [2, 'c', 'hello aa'],
    [1, 'd', 'hello abc'],
]
data.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    if (a[1] === b[1]) return 0;
})
data

data = [['A', 25, 25, 25, 25], ['B', 10, 12, 13, 11], ['C', 24, 22, 23, 21], ['D', 13, 22, 16, 14]]
data.sort((a, b) =>
    a.slice(1).reduce((x, y) => x + y, 0) -
    b.slice(1).reduce((x, y) => x + y, 0)
)
data


data = [['A', 25, 25, 25, 25], ['B', 10, 12, 13, 11], ['C', 24, 22, 23, 21], ['D', 13, 22, 16, 14]]
data.sort((a, b) =>
    b.slice(1).reduce((x, y) => x + y, 0) -
    a.slice(1).reduce((x, y) => x + y, 0)
)
data


data = [['A', 25, 25, 25, 25], ['B', 10, 12, 13, 11], ['C', 24, 22, 23, 21], ['D', 13, 22, 16, 14]]
function solution(data) {
    let 길이 = data.length
    let 선발인원 = parseInt((길이 * 3) / 10)
    data.sort((a, b) =>
        b.slice(1).reduce((x, y) => x + y, 0) -
        a.slice(1).reduce((x, y) => x + y, 0)
    )
    return data.slice(0, 선발인원)
}
solution(data)


// 아래와 같은 형태로 저장해야 함
d = {
    100: ['A', 'B'],
    80: ['C'],
    70: ['D', 'E']
}




data = [['A', 25, 25, 25, 25], ['B', 10, 12, 13, 11], ['C', 24, 22, 23, 21], ['D', 13, 22, 16, 14]]
function solution(data) {
    let 길이 = data.length
    let 선발인원 = parseInt((길이 * 3) / 10)
    let 선발된인원 = 0
    let 점수모음 = {}
    for (let i of data) {
        let 합 = i.slice(1).reduce((x, y) => x + y, 0)
        if (합 in 점수모음) {
            점수모음[합] = 점수모음[합] + [i[0]]
        }
        else {
            점수모음[합] = [i[0]]
        }
    }
    return 점수모음
}
solution(data)


data = [['A', 25, 25, 25, 25],
['B', 10, 12, 13, 11],
['C', 24, 22, 23, 21],
['D', 13, 22, 16, 14],
['E', 25, 25, 25, 25],
]
function solution(data) {
    let 길이 = data.length
    let 선발인원 = parseInt((길이 * 3) / 10)
    let 선발된인원 = 0
    let 점수모음 = {}
    for (let i of data) {
        let 합 = i.slice(1).reduce((x, y) => x + y, 0)
        if (합 in 점수모음) {
            점수모음[합].push(i[0])
        }
        else {
            점수모음[합] = [i[0]]
        }
    }
    return 점수모음
}
solution(data)



data = [['A', 25, 25, 25, 25],
['B', 10, 12, 13, 11],
['C', 24, 22, 23, 21],
['D', 13, 22, 16, 14],
]
data = [['A', 25, 25, 25, 25], ['B', 10, 12, 13, 11], ['C', 24, 22, 23, 21], ['D', 13, 22, 16, 14], ['E', 25, 25, 25, 25]]

function solution(data) {
    let 길이 = data.length
    let 선발해야하는인원 = parseInt(길이 * 0.3)
    if (선발해야하는인원 === 0) {
        return []
    }
    let 선발된인원 = 0
    let 점수모음 = {}
    let 선발인원 = []
    for (let i of data) {
        let 합 = i.slice(1).reduce((x, y) => x + y, 0)
        if (합 in 점수모음) {
            점수모음[합].push(i[0])
        } else {
            점수모음[합] = [i[0]]
        }
    }

    점수모음 = Object.entries(점수모음)
    점수모음.sort((a, b) => b[0] - a[0])
    for (let i of 점수모음) {
        if (선발된인원 < 선발해야하는인원 && i[1].length <= 선발해야하는인원) {
            선발인원.push(...i[1])
            선발된인원 += i[1].length
        }
        else if (i[1].length > 선발해야하는인원) {
            return 선발인원
        }
    }
    선발인원.sort().reverse()
    return 선발인원
}
solution(data)
solution(data)