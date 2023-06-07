// https://github.com/trekhleb/javascript-algorithms 여기에 대부분의 알고리즘이 구현되어 있으니 참고해주세요. 여기서는 위 프로젝트에서 언급된 순열과 조합 코드만 남겨놓습니다.

// 순열
function getPermutation(elements) {
    if (elements.length === 1) return [elements];
    const permutations = [];

    const smallerPermutations = getPermutation(elements.slice(1));

    const fisrtElement = elements[0];
    smallerPermutations.forEach(permutation => {
        for (let positionIndex = 0; positionIndex <= permutation.length; positionIndex++) {
            const prefix = permutation.slice(0, positionIndex);
            const suffix = permutation.slice(positionIndex);
            permutations.push(prefix.concat([fisrtElement], suffix));
        }
    });

    return permutations;
}

// 조합
function getCombination(elements, pick) {
    if (pick === 1) return elements.map(elem => [elem]);

    const combinations = [];
    elements.forEach((element, index) => {
        const smallerCombinations = getCombination(elements.slice(index + 1), pick - 1);
        smallerCombinations.forEach(combination => {
            combinations.push([element].concat(combination));
        });
    });
    return combinations;
}