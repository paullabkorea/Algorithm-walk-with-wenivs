// 그리디 + 힙
[46, 26, 37, 32, 10].filter(v => v >= 30)
[46, 26, 37, 32, 10].filter(v => v < 30)

// 최소 무게가 안되어 여러 사람을 함께 태울 때, 
// 가장 무거운 사람과 가장 가벼운 사람, 
// 가장 무거운 사람, 가장 가벼운 사람의 조합으로 태울 수 있지 않습니다.

// 가장 무거운 사람과 가장 가벼운 사람을 함께 태워도 비효율적인 경우가 있으며, 
// 가장 무거운 사람을 태워도 비효율적인 경우가 있습니다. 

// 힙이나 이진트리로 풀 수 있는 문제가 아니고 전수 조사를 해야 합니다. 
// 47에 가까운 조합으로 태워야 해요.(조합의 갯수도 적어야 합니다.)

function solution(data) {
    if (data[0].reduce((a, c) => a + c, 0) < data[1]) {
        return -1
    }
    let count = 0
    let temp = 0
    data[0].sort((a, b) => b - a)
    console.log(data[0])
    for (const i of data[0]) {
        if (i >= data[1]) {
            count += 1
        } else if (i < data[1]) {
            temp += i
        }
        if (temp >= data[1]) {
            count += 1
            temp = 0
        }
    }
    return count
}

solution([[46, 26, 37, 32, 10], 30]) // 정답
solution([[7, 36, 25, 12, 22], 47]) // 오답
// (36, 25) => 1대, (22, 12, 7) => 0대
// (36, 12), (25, 22, 7)



// 정답 - step1

function solution(data) {
    if (data[0].reduce((a, c) => a + c, 0) < data[1]) {
        return -1
    }
    let count = 0

    let copydata = data[0].slice()
    for (const i of copydata) {
        if (i >= data[1]) {
            count += 1
            data[0].splice(data[0].indexOf(i), 1)
        }
    }
    console.log(data[0])
}

solution([[46, 26, 37, 32, 10], 30])

// 정답 - step2

function combinations(arr, num) {
    const result = [];
    if (num === 1) return arr.map(v => [v]);
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinationsArr = combinations(rest, num - 1);
        const attached = combinationsArr.map(v => [fixed, ...v]);
        result.push(...attached);
    });
    return result;
}

function solution(data) {
    if (data[0].reduce((a, c) => a + c, 0) < data[1]) {
        return -1
    }
    let count = 0

    copydata = data[0].slice()
    for (const i of copydata) {
        if (i >= data[1]) {
            count += 1
            data[0].splice(data[0].indexOf(i), 1)
        }
    }
    console.log(data[0])

    while (data[0].length !== 0) {
        if (data[0].length === 1) {
            return count
        }
        let 조합 = []
        for (let i = 2; i < data[0].length + 1; i++) {
            for (const comb of (combinations(data[0], i))) {
                // console.log(comb)
                let sum = comb.reduce((a, c) => a + c, 0)
                if (sum >= data[1]) {
                    조합.push([sum, comb])
                }
            }
        }
        if (조합.toString() == '') {
            return count
        }
        console.log(`조합 : ${JSON.stringify(조합)}`)
        let 정렬값 = 조합.sort((a, b) => a[0] - b[0]) // 어떤 수에 가까운수 순서대로
        console.log(`정렬값 : ${JSON.stringify(정렬값)}`)
        console.log(data[0])
        if (정렬값[0][0] >= data[1]) {
            count += 1
            for (const i of 정렬값[0][1]) {
                console.log(i)
                data[0].splice(data[0].indexOf(i), 1)
            }
        }
        else {
            return count
        }
    }
    return count
}

// solution([[46, 26, 37, 32, 10, 10, 20, 21, 11, 12, 13, 14, 15], 30])
solution([[7, 36, 25, 12, 22], 47]) // 오답

// 다듬어진 정답
function combinations(arr, num) {
    const result = [];
    if (num === 1) return arr.map(v => [v]);
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinationsArr = combinations(rest, num - 1);
        const attached = combinationsArr.map(v => [fixed, ...v]);
        result.push(...attached);
    });
    return result;
}

function solution(data) {
    if (data[0].reduce((a, c) => a + c, 0) < data[1]) {
        return -1
    }
    let count = 0
    let copydata = data[0].slice()
    for (let i of copydata) {
        if (i >= data[1]) {
            count += 1
            data[0].splice(data[0].indexOf(i), 1)
        }
    }
    console.log(data[0])

    while (data[0].length !== 0) {
        if (data[0].length === 1) {
            return count
        }
        let 조합 = []
        for (let i = 2; i < data[0].length + 1; i++) {
            for (const comb of (combinations(data[0], i))) {
                let sum = comb.reduce((a, c) => a + c, 0)
                if (sum >= data[1]) {
                    조합.push([sum, comb])
                }
            }
        }
        if (조합.toString() == '') {
            return count
        }
        조합.sort((a, b) => a[0] - b[0])
        count += 1
        for (let i of 조합[0][1]) {
            data[0].splice(data[0].indexOf(i), 1)
        }
    }
    return count
}
// solution([[46, 26, 37, 32, 10], 30])
solution([[7, 36, 25, 12, 22], 47])