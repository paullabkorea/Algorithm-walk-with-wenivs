// DFS와 BFS - 깊스너큐!

// * 깊이 우선 탐색(DFS)
//     * 동작 : 스택
//     * 사용 : 길이나 미로 찾기
//     * 적은 메모리로 돌릴 수 있음

// * 너비 우선 탐색(BFS)
//     * 동작 : 큐
//     * 사용 : 주변 시설 찾기, 최단경로 찾기
//     * 많은 메모리 사용

data = [[1, 3, '#'],
[0, '#', 2],
[0, 1, 1]]

data = [[0, '#', 1, 0],
[2, 1, 1, 2],
['#', 3, 0, 1],
[1, '#', '#', 3],
[0, 2, '#', 1]]

////

function solution(data) {
    // x: 행, y: 열
    // N: 행, M: 열
    function check(x, y) {
        if (y < 0 || y > M || x < 0 || x > N) {
            return false
        }
        if (data[x][y] === '#') {
            return false
        }
        return true
    }

    const N = data.length - 1
    const M = data[0].length - 1

    let queue = []
    queue.push([0, 0])
    let fish = data[0][0]
    data[0][0] = 0
    // let visited = new Set()
    let count = 0
    let goal = false

    while (queue) {
        console.log(JSON.stringify(queue))
        count += 1
        if (count == (N * M) ** 3) {
            if (goal) {
                return fish
            }
            return -1
        }
        let [x, y] = queue.shift()
        // visited.add([x, y])
        if (x == N && y == M) {
            fish += data[x][y]
            data[x][y] = 0
            goal = true
        }
        // 상
        if (check(x - 1, y)) {
            queue.push([x - 1, y])
            fish += data[x - 1][y]
            data[x - 1][y] = 0
        }
        // 하
        if (check(x + 1, y)) {
            queue.push([x + 1, y])
            fish += data[x + 1][y]
            data[x + 1][y] = 0
        }
        // 좌
        if (check(x, y - 1)) {
            queue.push([x, y - 1])
            fish += data[x][y - 1]
            data[x][y - 1] = 0
        }
        // 우
        if (check(x, y + 1)) {
            queue.push([x, y + 1])
            fish += data[x][y + 1]
            data[x][y + 1] = 0
        }
    }
}

data = [[1, 3, '#'],
[0, '#', 2],
[0, 1, 1]]

solution(data)
