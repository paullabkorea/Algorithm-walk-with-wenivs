// python에서는 순열과 조합을 모듈로 제공합니다.
// js에서 순열과 조합문제를 내고, Python 모듈로도 풀 수 있게 했다면
// 형평성에 어긋납니다. 
// 검색 가능하게 하고, 스니펫 사용할 수 있게 했다면 동일 조건이고요.

// f([1, 2, 3, 4, 5], 3)
// [1] + f([2, 3, 4, 5], 2)
// [1] + [2] + f([3, 4, 5], 1)
// [1] + [2] + [[3], [4], [5]]

// f([2, 3, 4, 5], 3)
// [2] + f([3, 4, 5], 2)
// [2] + [3] + f([4, 5], 1)
// [2] + [3] + [[4], [5]]

// 같은 작업 반복
// ...

// combinations([1, 2, 3, 4], 2):
//      arr.forEach(fixed, index, origin)
//          rest = origin.slice(index + 1);
//                      -> fixed는 1, rest는 1을 제외한 값(origin.slice(1))
//          combinationsArr = combinations(rest, 1); 
//                      -> 재귀인데 num값이 1이니 rest를 잘개 쪼갬
//                      -> [[2], [3], [4]]
//          attached = combinationsArr.map(v => [1, ...v])
//                      -> 고정된 1의 값에다가 나머지 값들을 합침
//          results.push(...attached)



function combinations(arr, num) {
    const result = [];

    // 1이면 반환
    if (num === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        // 현재값 이후 배열 추출
        const rest = origin.slice(index + 1);

        // 추출한 배열로 다시 재귀
        // 기준값(fixed)이 있기에 num - 1
        const combinationsArr = combinations(rest, num - 1);

        // 기준값(fixed)에 돌아온 조합을 합침
        const attached = combinationsArr.map(v => [fixed, ...v]);

        // 붙인 값을 결과 값에 추가
        result.push(...attached);
    });

    return result;
}

combinations([1, 2, 3, 4], 2)
combinations([1, 1, 1, 1, 1], 2)


///

function solution(data) {
    function combinations(arr, num) {
        const results = [];
        if (num === 1) return arr.map(v => [v]);
        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinationsArr = combinations(rest, num - 1);
            const attached = combinationsArr.map(v => [fixed, ...v]);
            results.push(...attached);
        });

        return results;
    }
    function 인접한값삭제(arr, n) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < n - 1; j++) {
                if ((arr[i][j] + 1) == arr[i][j + 1]) {
                    arr[i] = []
                    break
                }
            }
        }
    }

    let 인덱스 = [0, 1, 2, 3, 4, 5, 6, 7]
    let 조합4 = combinations(인덱스, 4)
    let 조합3 = combinations(인덱스, 3)

    인접한값삭제(조합3, 3)
    인접한값삭제(조합4, 4)

    console.log(조합3)
    console.log(조합4)

    조합3 = 조합3.filter(v => v.toString() !== '')
    조합4 = 조합4.filter(v => v.toString() !== '')

    console.log(조합3)
    console.log(조합4)

}

solution([2, 4, 1, 3, 5, 8, 8, 6])

///

function solution(data) {
    function combinations(arr, num) {
        const results = [];
        if (num === 1) return arr.map(v => [v]);
        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinationsArr = combinations(rest, num - 1);
            const attached = combinationsArr.map(v => [fixed, ...v]);
            results.push(...attached);
        });

        return results;
    }
    function 인접한값삭제(l, n) {
        for (let i = 0; i < l.length; i++) {
            for (let j = 0; j < n - 1; j++) {
                if ((l[i][j] + 1) == l[i][j + 1]) {
                    l[i] = []
                    break
                }
            }
        }
    }

    인덱스 = [0, 1, 2, 3, 4, 5, 6, 7]
    let 조합4 = combinations(인덱스, 4)
    let 조합3 = combinations(인덱스, 3)

    인접한값삭제(조합3, 3)
    인접한값삭제(조합4, 4)

    console.log(조합3)
    console.log(조합4)

    조합3 = 조합3.filter(v => v.toString() !== '')
    조합4 = 조합4.filter(v => v.toString() !== '')

    console.log(조합3)
    console.log(조합4)

    // console.log(조합3.concat(조합4))
    let 조합 = 조합3.concat(조합4)
    조합 = 조합.map((v) => v.reduce((a, c) => a + data[c], 0))

    return Math.max(...조합)
}

solution([2, 4, 1, 3, 5, 8, 8, 6])