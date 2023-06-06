let data = [[0, 0, '#', '#'], ['#', '#', 0, '#'], [0, '#', '#', 0]]
data = data.flat()
data[0 + 4]

let data = [[0, 0, '#', '#'], ['#', '#', 0, '#'], [0, '#', '#', 0]]
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[0].length; j++) {
        console.log(data[i][j])
        if (data[i][j] == '#') {
            // 상
            if (i != 0) {
                if (data[i - 1][j] != '#') {
                    data[i - 1][j] += 1
                }
            }
            // 하
            if (i != data.length - 1) {
                if (data[i + 1][j] != '#') {
                    data[i + 1][j] += 1
                }
            }
            // 좌
            if (j != 0) {
                if (data[i][j - 1] != '#') {
                    data[i][j - 1] += 1
                }
            }
            // 우
            if (j != data[0].length - 1) {
                if (data[i][j + 1] != '#') {
                    data[i][j + 1] += 1
                }
            }
            // (왼쪽 대각선) 좌 대각선 상
            if (j != 0 && i != 0) {
                if (data[i - 1][j - 1] != '#') {
                    data[i - 1][j - 1] += 1
                }
            }
            // (왼쪽 대각선) 우 대각선 하
            if (j != data[0].length - 1 && i != data.length - 1) {
                if (data[i + 1][j + 1] != '#') {
                    data[i + 1][j + 1] += 1
                }
            }
            // (오른쪽 대각선) 우 대각선 상
            if (j != data[0].length - 1 && i != 0) {
                if (data[i - 1][j + 1] != '#') {
                    data[i - 1][j + 1] += 1
                }
            }
            // (오른쪽 대각선) 좌 대각선 하
            if (j != 0 && i != data.length - 1) {
                if (data[i + 1][j - 1] != '#') {
                    data[i + 1][j - 1] += 1
                }
            }
        }
    }
}

data


data.flat().filter(v => !isNaN(v)).reduce((a, c) => a + c, 0)



//////////////////////


function solution(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[0].length; j++) {
            console.log(data[i][j])
            if (data[i][j] == '#') {
                // 상
                if (i != 0) {
                    if (data[i - 1][j] != '#') {
                        data[i - 1][j] += 1
                    }
                }
                // 하
                if (i != data.length - 1) {
                    if (data[i + 1][j] != '#') {
                        data[i + 1][j] += 1
                    }
                }
                // 좌
                if (j != 0) {
                    if (data[i][j - 1] != '#') {
                        data[i][j - 1] += 1
                    }
                }
                // 우
                if (j != data[0].length - 1) {
                    if (data[i][j + 1] != '#') {
                        data[i][j + 1] += 1
                    }
                }
                // (왼쪽 대각선) 좌 대각선 상
                if (j != 0 && i != 0) {
                    if (data[i - 1][j - 1] != '#') {
                        data[i - 1][j - 1] += 1
                    }
                }
                // (왼쪽 대각선) 우 대각선 하
                if (j != data[0].length - 1 && i != data.length - 1) {
                    if (data[i + 1][j + 1] != '#') {
                        data[i + 1][j + 1] += 1
                    }
                }
                // (왼쪽 대각선) 우 대각선 상
                if (j != data[0].length - 1 && i != 0) {
                    if (data[i - 1][j + 1] != '#') {
                        data[i - 1][j + 1] += 1
                    }
                }
                // (왼쪽 대각선) 좌 대각선 하
                if (j != 0 && i != data.length - 1) {
                    if (data[i + 1][j - 1] != '#') {
                        data[i + 1][j - 1] += 1
                    }
                }
            }
        }
    }
    return [data.flat().filter(v => isNaN(v)).length, data.flat().filter(v => !isNaN(v)).reduce((a, c) => a + c, 0)]
}


