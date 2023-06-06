function solution(data) {
    let result = []
    data[0].forEach((v, i) => {
        for (let j = i + 1; j < data[0].length; j++) {
            if (v + data[0][j] == data[1]) {
                result.push(i, j)
            }
        }
    })
    return result
}

solution([[4, 9, 11, 2], 6])