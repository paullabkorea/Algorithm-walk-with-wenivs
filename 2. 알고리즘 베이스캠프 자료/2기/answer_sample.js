// 여기를 채워주세요.
// Your code goes here
// 1
function solution1(data) {
    return data.filter((x) => x % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
  }
  
// 2
function solution2(data) {
  if (data.length === 0) return 0;
  return data.reduce((acc, curr) => acc * curr, 1);
}

// 3
function solution3(data) {
  return data.filter((x) => x % 3 !== 0 && x % 5 !== 0).reduce((acc, curr) => acc + curr, 0);
}

// 4
function solution4(data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    const number = parseInt(data[i].split(" ")[1].replace("개", ""));
    result += number * (i + 1);
  }
  return result;
}

// 5
function solution5(data) {
  return data.join("").split("1").length - 1;
}

// 6
function solution6(data) {
  return data.split("").filter((x) => !isNaN(x)).reduce((acc, curr) => acc + parseInt(curr), 0);
}

// 7
function solution7(data) {
  return data.sort((a, b) => a[1] - b[1]).map((x) => x[0]);
}

// 8
function solution8(data) {
  return data
      .map((x, i) => [x, data[i + 1]])
      .filter((x) => x[1] !== undefined)
      .sort((a, b) => (a[1] - a[0])-(b[1] - b[0]))[0];
}


// 9
function solution9(data) {
  return data.sort((a, b) => b["수"] - a["수"])[0]["이름"];
}

// 10
function solution10(data) {
  return data
    .filter((x) => x.slice(1).reduce((acc, curr) => acc + curr, 0) > 350)
    .map((x) => x[0])
    .sort();
}

// 11
function solution11(data) {
  return data.filter((x) => x.reduce((acc, curr) => acc + curr, 0) > 240).length;
}

// 12
function solution12(data) {
  return data[0].sort((a, b) => data[1][a.split(" ")[1]] - data[1][b.split(" ")[1]]);
}

// 13
function solution13(data) {
  const books = data[0];
  const publishYears = data[1];
  return books.sort((a, b) => {
    if (publishYears[a] === publishYears[b]) {
      return a.localeCompare(b);
    } else {
      return publishYears[a] - publishYears[b];
    }
  });
}

// 14
// * 기존 구현코드에서 에러 수정 필요 *
function solution14(data) {
  const sorted_data = Object.keys(data).sort();
  return sorted_data.map(i => data[i]);
}
  

// 15
function solution15(times) {
  function convertTime(time) {
    const [hh, mm, ampm] = time.split(" ")[0].split(":").concat(time.split(" ")[1]);
    if (ampm === "PM" && hh !== "12") {
      return `${parseInt(hh) + 12}:${mm} ${ampm}`;
    } else if (ampm === "AM" && hh === "12") {
      return `00:${mm} ${ampm}`;
    } else {
      return `${hh}:${mm} ${ampm}`;
    }
  }
  return times.sort((a, b) => convertTime(a).localeCompare(convertTime(b)));
}

// 16
function solution16(dates) {
  // 날짜를 연/월/일 형식으로 변환하는 함수
  function convertDate(date) {
    let year = '', month = '', day = ''; // 기본값 할당
    if (date.includes("-")) {
      [day, month, year] = date.split("-");
    } else if (date.includes("/")) {
      [month, day, year] = date.split("/");
    } else {
      [year, month, day] = date.split(".");
    }
    return [year, month, day];
  }

  // 날짜들을 연/월/일 형식으로 변환
  const convertedDates = dates.map(convertDate);

  // 변환된 날짜들을 오름차순으로 정렬
  const sortedDates = convertedDates.sort((a, b) => {
    const [yearA, monthA, dayA] = a;
    const [yearB, monthB, dayB] = b;
    if (yearA !== yearB) return yearA - yearB;
    if (monthA !== monthB) return monthA - monthB;
    return dayA - dayB;
  });

  // 정렬된 날짜들을 '연/월/일' 형식으로 다시 변환
  return sortedDates.map(([year, month, day]) => `${year}/${month}/${day}`);
}

// 17
function solution17(schedules) {
  const allSchedules = [];
  for (const day in schedules) {
    for (const date of schedules[day]) {
      allSchedules.push([date, day]);
    }
  }
  allSchedules.sort((a, b) => new Date(b[0]) - new Date(a[0]));
  return allSchedules.slice(0, 3).map((schedule) => {
    const [date, day] = schedule;
    const formattedDate = new Date(date).toLocaleDateString("ko-KR", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    }).replaceAll(".","-").replaceAll(" ","").slice(0,-1);
    return `${formattedDate} ${day}`;
  });
}

// 18
function solution18(temperatureData) {
  const sortedData = Object.entries(temperatureData).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    } else {
      return b[1] - a[1];
    }
  });
  return sortedData.map((data) => `${data[0].slice(2)}: ${data[1]}`).slice(0, 3);
}
// 19
function solution19(data) {
return data.map(i => typeof i);
}

// 20
function solution20(data) {
return data.every(([className, instance]) => typeof instance === className.toLowerCase());
}

// 21
function solution21(data) {
const [arr, target] = data;
return arr.indexOf(target) !== -1 ? arr.indexOf(target) : false;
}

// 22
function solution22(data) {
const [s, target] = data;
return s.indexOf(target) !== -1 ? s.indexOf(target) : false;
}

// 23
function solution23(data) {
const [matrix, target] = data;
for (const row of matrix) {
  if (row.includes(target)) {
    return true;
  }
}
return false;
}

// function solution(data) {
// const [matrix, target] = data;
// return matrix.some(row => row.includes(target));
// }

// function solution(data) {
// const [matrix, target] = data;
// return [].concat(...matrix).includes(target);
// }

// 24
function solution24(data) {
if (!data.length) return 0;

let maxSum = data[0];
let currentSum = data[0];

for (let i = 1; i < data.length; i++) {
  const num = data[i];
  currentSum = Math.max(num, currentSum + num);
  maxSum = Math.max(maxSum, currentSum);
}

return maxSum;
}

// 25
function solution25(data) {
data = Number(data)
const prime = new Array(data + 1).fill(true);
prime[0] = prime[1] = false;

for (let p = 2; p * p <= data; p++) {
  if (prime[p]) {
    for (let i = p * p; i <= data; i += p) {
      prime[i] = false;
    }
  }
}

return prime.filter(Boolean).length;
}

// 26
function solution26(data) {
const [nums, k] = data;
let windowSum = nums.slice(0, k).reduce((sum, num) => sum + num, 0);
let maxSum = windowSum;

for (let i = k; i < nums.length; i++) {
  windowSum = windowSum - nums[i - k] + nums[i];
  maxSum = Math.max(maxSum, windowSum);
}

return maxSum;
}

// 27
function solution27(data) {
  const [nums, s] = data;
  let minLength = Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];

    // 윈도우의 합이 s 이상이 되면 시작점을 이동시키면서 최소 길이를 갱신
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= nums[windowStart];
      windowStart += 1;
    }
  }

  return minLength !== Infinity ? minLength : 0;
}

// 28
function solution28(data) {
  const [nums, target] = data;
  let closestSum = Infinity;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const currentSum = nums[left] + nums[right];
    // 타겟 값에 더 가까운 합을 찾으면 업데이트
    if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
      closestSum = currentSum;
    }

    // 포인터 이동
    if (currentSum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return closestSum;
}

// 29
function solution29(nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}

// 30
function solution30(n) {
  const binaryString = n.toString(2);
  let resultString = '';
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '1') {
      resultString += 'A';
    } else {
      resultString += 'B';
    }
  }
  return resultString;
}

// 31
function solution31(n) {
  // 10자리 이진수로 변환
  let binaryStr = n.toString(2).padStart(10, '0');
  console.log(binaryStr);
  // 비트 반전
  const invertedBinaryStr = binaryStr.split('').map(bit => bit === '0' ? '1' : '0').join('');
  // 반전된 이진수를 다시 정수로 변환
  return parseInt(invertedBinaryStr, 2);
}

// 32
function solution32(nums) {
  if (!nums.length) return [0, 0];

  let bitAnd = nums[0];
  let bitOr = nums[0];

  for (let i = 1; i < nums.length; i++) {
    bitAnd &= nums[i];
    bitOr |= nums[i];
  }

  return [bitAnd, bitOr];
}

// 33
function solution33(data) {
  const pattern = /^[a-zA-Z0-9._+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(data);
}

// 34
function solution34(data) {
  const pattern = /(\d{4})-(\d{2})-(\d{2})/g;
  const matches = data.matchAll(pattern);
  return [...matches].map(match => [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])]);
}

// 35
function solution35(data) {
  const pattern = /<[^>]+>/g;
  return data.replace(pattern, '');
}

// 36
function solution36(data) {
  const pattern = /(\d{3})(\d{3,4})(\d{4})/;
  return data.replace(pattern, '$1-$2-$3');
}

// 37
function solution37(data) {
  const pattern = /\[(?<time>\d{2}:\d{2}:\d{2})\] (?<message>.+)/;
  const match = data.match(pattern);
  if (match) {
    const groups = match.groups;
    return { time: groups.time, message: groups.message };
  } else {
    return null;
  }
}

// 38
function solution38(data) {
  const pattern = /(?<protocol>https?|ftp):\/\/(?<domain>[^/\s]+)(?<path>\/[^?]*|)(\?(?<query>[^#\s]*))?/;
  const match = data.match(pattern);
  if (match) {
    const { protocol, domain, path, query } = match.groups;
    return {
      protocol,
      domain,
      path: path || '',
      query: query || '',
    };
  } else {
    return null;
  }
}

// 39
function solution39(data) {
  const match = data.match(/\.([^./]+)$/);
  return match ? match[1] : '';
}

// 40
function solution40(data) {
  const numbersAndCommas = data.match(/[\d,]+/g);
  const extractedNumbers = numbersAndCommas ? numbersAndCommas.join('').replace(/,/g, '') : '';
  return extractedNumbers;
}

// 41
function solution41(data) {
  const stack = [];
  const bracketMap = { '(': ')', '{': '}', '[': ']' };

  for (const char of data) {
    if (bracketMap[char]) {
      stack.push(char);
    } else if (stack.length && char === bracketMap[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return !stack.length;
}

// 42
function solution42(data) {
  const { size, requests } = data;
  const queue = [];
  for (const request of requests) {
    queue.push(request);
    if (queue.length > size) {
      queue.shift();
    }
  }
  return queue;
}

// 43
function solution43(data) {
  const { size, pages } = data;
  const cache = new Map();

  for (const page of pages) {
    if (cache.has(page)) {
      cache.delete(page);
    } else if (cache.size >= size) {
      cache.delete(cache.keys().next().value);
    }
    cache.set(page, true);
  }

  return [...cache.keys()];
}

// 44
function solution44(data) {
  const words = data.toLowerCase().split(/\s+/);
  const frequency = {};
  for (const word of words) {
    const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
    if (cleanedWord) {
      frequency[cleanedWord] = (frequency[cleanedWord] || 0) + 1;
    }
  }
  return frequency;
}

// 45
function solution45(data) {
  const { queue1, queue2 } = data;
  let sum1 = queue1.reduce((sum, num) => sum + num, 0);
  let sum2 = queue2.reduce((sum, num) => sum + num, 0);
  const totalSum = sum1 + sum2;
  let operations = 0;

  if (totalSum % 2 !== 0) {
    return -1;
  }

  while (sum1 !== sum2) {
    if (sum1 > sum2) {
      const value = queue1.shift();
      sum1 -= value;
      sum2 += value;
      queue2.push(value);
    } else {
      const value = queue2.shift();
      sum2 -= value;
      sum1 += value;
      queue1.push(value);
    }
    operations += 1;

    if (operations > queue1.length + queue2.length) {
      return -1;
    }
  }

  return operations;
}

// 46
function solution46(data) {
  class CircularQueue {
    constructor(size) {
      this.queue = [];
      this.size = size;
    }

    insert(element) {
      this.queue.push(element);
      if (this.queue.length > this.size) {
        this.queue.shift();
      }
    }

    delete() {
      if (this.queue.length) {
        this.queue.shift();
      }
    }

    search(element) {
      return this.queue.includes(element);
    }
  }

  const { size, commands } = data;
  const cq = new CircularQueue(size);
  const result = [];

  for (const command of commands) {
    if (command.startsWith('insert')) {
      const [, element] = command.split(' ');
      cq.insert(element);
      result.push(null);
    } else if (command === 'delete') {
      cq.delete();
      result.push(null);
    } else if (command.startsWith('search')) {
      const [, element] = command.split(' ');
      result.push(cq.search(element));
    }
  }

  return result;
}

// 47
function solution47(data) {
  function findMaxDepth(tree, index = 0) {
    if (index >= tree.length || tree[index] === null) {
      return 0;
    }
    const leftDepth = findMaxDepth(tree, 2 * index + 1);
    const rightDepth = findMaxDepth(tree, 2 * index + 2);
    return Math.max(leftDepth, rightDepth) + 1;
  }

  return findMaxDepth(data);
}

// 48
function solution48(data) {
  const { tree } = data;
  if (!tree) {
    return [];
  }

  const stack = [[tree, tree.value]];
  const pathSums = [];

  while (stack.length) {
    const [current, currentSum] = stack.pop();

    // 현재 노드가 리프 노드인 경우, 경로 합을 결과에 추가
    if (!current.left && !current.right) {
      pathSums.push(currentSum);
    }

    // 오른쪽 자식이 있으면 스택에 추가
    if (current.right) {
      stack.push([current.right, currentSum + current.right.value]);
    }

    // 왼쪽 자식이 있으면 스택에 추가
    if (current.left) {
      stack.push([current.left, currentSum + current.left.value]);
    }
  }

  return pathSums;
}

// 49
function solution49(data) {
  const { graph, start, end } = data;
  const bfsShortestPath = (graph, start, end) => {
    const visited = new Set();
    const queue = [[start, 0]]; // [current node, distance]

    while (queue.length) {
      const [current, distance] = queue.shift();
      if (current === end) {
        return distance;
      }

      if (!visited.has(current)) {
        visited.add(current);
        const neighbors = graph[current] || [];
        for (const neighbor of neighbors) {
          queue.push([neighbor, distance + 1]);
        }
      }
    }

    return -1; // Path not found
  };

  return bfsShortestPath(graph, start, end);
}

// 50
function solution50(data) {
  const { graph } = data;
  const hasCycle = (graph) => {
    const visited = new Set();
    const recStack = new Set();

    for (const node of Object.keys(graph)) {
      if (!visited.has(node) && dfs(graph, node, visited, recStack)) {
        return true;
      }
    }

    return false;
  };

  const dfs = (graph, current, visited, recStack) => {
    if (!visited.has(current)) {
      visited.add(current);
      recStack.add(current);

      const neighbors = graph[current] || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor) && dfs(graph, neighbor, visited, recStack)) {
          return true;
        } else if (recStack.has(neighbor)) {
          return true;
        }
      }
    }

    recStack.delete(current);
    return false;
  };

  return hasCycle(graph);
}

// 51
function solution51(data) {
  const { coins, amount } = data;
  const minCoins = (coins, amount) => {
    coins.sort((a, b) => b - a);
    let count = 0;
    for (const coin of coins) {
      count += Math.floor(amount / coin);
      amount %= coin;
      if (amount === 0) {
        break;
      }
    }
    return count;
  };

  return minCoins(coins, amount);
}

// 52
function solution52(data) {
  const totalCost = data * 700;
  let change = 10000 - totalCost;

  const denominations = [10000, 5000, 1000, 500, 100];
  const changeList = new Array(5).fill(0);

  for (let i = 0; i < denominations.length; i++) {
    const denom = denominations[i];
    changeList[i] = Math.floor(change / denom);
    change %= denom;
  }

  return changeList;
}

// 53
function solution53(data) {
  let [investments, capital] = data;
  investments.sort((a, b) => a[0] - b[0]); // 투자 금액 기준으로 정렬

  const selectedCompanies = [];
  for (const [cost, company] of investments) {
    if (capital >= cost) {
      selectedCompanies.push(company);
      capital -= cost;
    }
  }

  return selectedCompanies;
}

// 54
function solution54(data) {
  const [room, path] = data;
  const rows = room.length;
  const cols = room[0].length;
  const directions = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  let cleanedCount = 0;
  let x = 0;
  let y = 0;

  if (room[0][0] === 1) {
    cleanedCount += 1;
    room[0][0] = 0;
  }

  for (const step of path) {
    const [dx, dy] = directions[step];
    const nx = x + dx;
    const ny = y + dy;

    // 경로가 방 안에 있고, 아직 청소되지 않은 칸이라면 청소
    if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && room[nx][ny] === 1) {
      cleanedCount += 1;
      room[nx][ny] = 0; // 청소된 상태로 표시
    }

    // 로봇 위치 업데이트
    if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
      x = nx;
      y = ny;
    }
  }

  return cleanedCount;
}

// 55
function solution55(matrix) {
  let mineCount = 0;
  for (const row of matrix) {
    mineCount += row.filter(value => value === 1).length;
  }
  return mineCount;
}

// 56
function solution56(matrix) {
const mineLocations = [];
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    if (matrix[row][col] === 1) {
      mineLocations.push([row, col]);
    }
  }
}
return mineLocations;
}

// 57
function solution57(data) {
const [matrix, div] = data;
const condition = (x) => x % div === 0;
for (const row of matrix) {
  if (!row.every(condition)) {
    return false;
  }
}
return true;
}

// 58
function solution58(matrix) {
if (!matrix || matrix.length !== matrix[0].length) {
  return "Error";
}
return matrix[0].map((_, colIndex) =>
  matrix.map((row) => row[colIndex]).reverse()
);
}

// 59
function solution59(data) {
const [matrix, condition] = data;
let count = 0;
let totalSum = 0;
for (const row of matrix) {
  for (const item of row) {
    if (item >= condition) {
      count++;
      totalSum += item;
    }
  }
}
return [count, totalSum];
}

// 60
function solution60(data) {
const [matrix, rangeValues] = data;
const [lowerBound, upperBound] = rangeValues;
let minValue = Infinity;
let maxValue = -Infinity;

for (const row of matrix) {
  for (const item of row) {
    if (lowerBound <= item && item <= upperBound) {
      minValue = Math.min(minValue, item);
      maxValue = Math.max(maxValue, item);
    }
  }
}

return minValue === Infinity ? [null, null] : [maxValue, minValue];
}

// 61
function solution61(data) {
const [dequeData, commands] = data;
const dq = dequeData.slice();
for (const [direction, count] of commands) {
  if (direction === "왼쪽") {
    dq.splice(0, Math.min(count, dq.length));
  } else if (direction === "오른쪽") {
    dq.splice(-Math.min(count, dq.length));
  }
}
return dq;
}

// 62
function solution62(data) {
const [maxSize, nums] = data;
const dq = [];
const result = [];

for (const num of nums) {
  dq.push(num);
  if (dq.length > maxSize) {
    dq.shift();
  }
  result.push(dq.slice());
}

return result;
}

// 63
function solution63(data) {
const [text, n] = data;
if (text.length < n) {
  return [];
}
const result = [];
for (let i = 0; i <= text.length - n; i++) {
  result.push(text.slice(i, i + n));
}
return result;
}

// 64
function solution64(data) {
const [text, pattern] = data;
let count = 0;
let i = 0;

while (i <= text.length - pattern.length) {
  if (text.slice(i, i + pattern.length) === pattern) {
    count++;
  }
  i++;
}

return count;
}

// 65
function solution65(data) {
const [text, n] = data;
const shiftCount = n % text.length;
return text.slice(text.length - shiftCount) + text.slice(0, text.length - shiftCount);
}

// 66
function solution66(data) {
const text = data[0];
const compressed = [];
let count = 1;

for (let i = 1; i < text.length; i++) {
  if (text[i] === text[i - 1]) {
    count++;
  } else {
    compressed.push(text[i - 1] + count);
    count = 1;
  }
}
compressed.push(text[text.length - 1] + count);

return compressed.join("");
}

// 67
function solution67(data) {
const [s, pattern] = data;
const findallIndex = [];
const regex = new RegExp(pattern, "g");
let match;
while ((match = regex.exec(s)) !== null) {
  findallIndex.push(match.index);
}
return findallIndex;
}

// 68
function solution68(numbers) {
const numbersStr = numbers.map(String);
numbersStr.sort((a, b) => (b + a) - (a + b));
return Number(numbersStr.join(""))+"";
}

// 69
function solution69(data) {
  const [numbers, target] = data
   const result = [];
   
   for (let i = 0; i < numbers.length - 1; i++) {
       for (let j = i + 1; j < numbers.length; j++) {
           if (numbers[i] + numbers[j] === target) {
               const pair = [numbers[i], numbers[j]].sort((a, b) => a - b);
               const existingPair = result.find(([a, b]) => a === pair[0] && b === pair[1]);
               if (!existingPair) {
                   result.push(pair);
               }
           }
       }
   }
   
   return result;
}

// 70
function solution70(data) {
const [nums, A, B] = data;
let count = 0;

const combinations = (arr, r) => {
  const result = [];
  const combine = (current, start) => {
    if (current.length === r) {
      result.push(current.slice());
      return;
    }
    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      combine(current, i + 1);
      current.pop();
    }
  };
  combine([], 0);
  return result;
};

for (let r = 1; r <= nums.length; r++) {
  const combos = combinations(nums, r);
  for (const combo of combos) {
    const sum = combo.reduce((acc, val) => acc + val, 0);
    if (A <= sum && sum <= B) {
      count++;
    }
  }
}

return count;
}

// 71
function solution71(string) {
const seen = new Set();
const result = [];

for (const char of string) {
  if (!seen.has(char)) {
    seen.add(char);
    result.push(char);
  }
}

return result.join("");
}

// 72
function solution72(data) {
const [str1, str2] = data;
const set1 = new Set(str1);
const set2 = new Set(str2);
const commonChars = [...new Set([...set1].filter((char) => set2.has(char)))];
return commonChars.sort();
}

// 73
function solution73(data) {
const [str1, str2] = data;
const set1 = new Set(str1);
const set2 = new Set(str2);
const remainingChars = [...new Set([...set1].filter((char) => !set2.has(char)))];
return remainingChars.sort();
}

// 74
function solution74(data) {
const [str1, str2] = data;
const set1 = new Set(str1);
const set2 = new Set(str2);
const uniqueElements = [...[...set1].filter(char => !set2.has(char)), ...[...set2].filter(char => !set1.has(char))];
return uniqueElements.sort();
}

// 75
function solution75(data) {
const [nums, n, m] = data;
const fullSet = new Set(Array.from({ length: m - n + 1 }, (_, i) => n + i));
const numsSet = new Set(nums);
const missingNumbers = [...fullSet].filter((num) => !numsSet.has(num)).sort((a, b) => a - b);
return missingNumbers;
}

// 76
function solution76(data) {
const [arr1, arr2] = data;
const merged = [];
let i = 0;
let j = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    merged.push(arr1[i]);
    i++;
  } else {
    merged.push(arr2[j]);
    j++;
  }
}

while (i < arr1.length) {
  merged.push(arr1[i]);
  i++;
}
while (j < arr2.length) {
  merged.push(arr2[j]);
  j++;
}

return merged;
}

// 77
function solution77(data) {
const [line, point] = data;
return line[0] <= point && point <= line[1];
}

// 78
function solution78(data) {
// Create an array to represent the line segments
const lineArray = new Array(101).fill(0);

// Mark the intervals covered by each line segment as true
for (const line of data) {
  for (let i = line[0]; i < line[1]; i++) {
    lineArray[i]++;
  }
}

// Calculate the length of overlapping line segments
let overlappingLength = 0;
for (const count of lineArray) {
  if (count >= 2) {
    overlappingLength++;
  }
}

return overlappingLength;
}

// 79
function solution79(data) {

const maxX = Math.max(...data.map(([x]) => x));
const minX = Math.min(...data.map(([x]) => x));
const maxY = Math.max(...data.map(([, y]) => y));
const minY = Math.min(...data.map(([, y]) => y));
console.log(maxX, minX, maxY, minY);
console.log((maxX - minX) * (maxY - minY));
return (maxX - minX) * (maxY - minY);
}

// 80
function solution80(points) {
let maxDistance = 0;

for (let i = 0; i < points.length; i++) {
  for (let j = i + 1; j < points.length; j++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[j];
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    maxDistance = Math.max(maxDistance, distance);
  }
}

return Math.floor(maxDistance);
}

// // 81

function solution81(nums) {
const midIndex = Math.round(nums.length / 2);
return nums[nums.length % 2 === 0 ? midIndex : midIndex-1];
}

// 이 JavaScript 함수는 주어진 배열을 링크드 리스트로 변환한 후, 
// 두 개의 포인터(slow와 fast)를 사용하여 링크드 리스트의 중간 노드를 찾습니다.
// arrayToLinkedList(nums)를 호출하여 주어진 배열을 링크드 리스트로 변환하고, 그 결과를 head에 저장합니다.
// 두 개의 포인터 slow와 fast를 초기화하여 링크드 리스트의 첫 번째 노드를 가리키게 합니다.
// fast가 링크드 리스트의 끝에 도달하거나 링크드 리스트의 마지막 노드를 가리키게 될 때까지 다음을 반복합니다:
// slow를 한 단계씩 이동시킵니다.
// fast를 두 단계씩 이동시킵니다.
// 반복이 끝나면, slow는 링크드 리스트의 중간 노드를 가리키게 됩니다. 따라서 slow.val을 반환하여 중간 노드의 값을 얻습니다.
// 이 함수는 링크드 리스트의 길이가 짝수인 경우 두 중간 노드 중 두 번째 노드의 값을 반환합니다. 이는 fast가 두 단계씩 이동하므로, 
// fast가 링크드 리스트의 끝에 도달했을 때 slow는 항상 중간 지점을 한 칸 넘어서게 되기 때문입니다.
function ListNode(val, next) {
this.val = (val===undefined ? 0 : val)
this.next = (next===undefined ? null : next)
}

function arrayToLinkedList(nums) {
let dummyHead = new ListNode(0);
let currentNode = dummyHead;
nums.forEach(num => {
    currentNode.next = new ListNode(num);
    currentNode = currentNode.next;
});
return dummyHead.next;
}

function solution(nums) {
let head = arrayToLinkedList(nums);
let slow = head;
let fast = head;
while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
}
return slow.val;
}


// 82
function solution82(inputString) {
const elements = inputString.split(" ").map(Number);
const reversedElements = elements.slice().reverse();
return reversedElements.join(" ");
}

// 83
function solution83(lectures) {
// 강의를 종료 시간이 빠른 순서대로 정렬하되, 종료 시간이 같을 경우 학점이 높은 강의를 우선적으로 선택
const sortedLectures = lectures.sort((a, b) => a.end.localeCompare(b.end) || b.credit - a.credit);

let selectedLectures = [];
let lastEndTime = "00:00";

for (const lecture of sortedLectures) {
  // 이전에 선택한 강의의 종료 시간과 현재 강의의 시작 시간을 비교
  if (lecture.start >= lastEndTime) {
    // 겹치지 않는 강의 중 학점이 가장 높은 강의를 선택
    selectedLectures.push(lecture.name);
    lastEndTime = lecture.end;
  } else {
    // 겹치는 강의 중 학점이 더 높은 강의를 선택
    if (selectedLectures.length > 0 && lecture.credit > lectures.find(l => l.name === selectedLectures[selectedLectures.length - 1]).credit) {
      selectedLectures.pop();
      selectedLectures.push(lecture.name);
      lastEndTime = lecture.end;
    }
  }
}

return selectedLectures;
}

// 84
function solution84(flights) {
class Flight {
  constructor(name, start, end) {
    this.name = name;
    this.start = start;
    this.end = end;
  }

  static compareFlights(a, b) {
    return a.end.localeCompare(b.end);
  }
}

const flightObjects = flights.map(flight => {
  const [name, start, end] = flight.split(",");
  return new Flight(name, start, end);
});

flightObjects.sort(Flight.compareFlights);

return flightObjects[0].name;
}

// 85
function solution85(data) {
  // 다시 푸신다고 적혀있는 문제
  const [airportData, patientData] = data;
  const sortedAirports = airportData.sort((a, b) => a.distance - b.distance);

  const treatableAirports = [];
  for (const disease of patientData) {
    for (const airport of sortedAirports) {
      if (airport.treatableDiseases.includes(disease)) {
        if (!treatableAirports.includes(airport.name)) {
          treatableAirports.push(airport.name);
        }
        break;
      }
    }
  }

  return treatableAirports;
}

// 86
function solution86(s) {
const frequency = {};
for (const char of s) {
  if (/[a-zA-Z]/.test(char)) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
}

const sortedAlphabets = Object.entries(frequency).sort(
  (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
);

return sortedAlphabets.map(([char]) => char).join("");
}

// 87
function solution87(data) {
const [a, b] = data;
return [b, a];
}

// 88
function solution88(data) {
const units = ["", "십", "백", "천"];
const nums = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
let result = "";
const strData = data.toString().split("").reverse().join("");

for (let i = 0; i < strData.length; i++) {
  const digit = parseInt(strData[i], 10);
  if (digit > 0) {
    result = nums[digit] + units[i] + result;
  }
}

return result;
}

// 89
function solution89(data) {
const [line1, line2] = data;
const [[x1, y1], [x2, y2]] = line1;
const [[x3, y3], [x4, y4]] = line2;

const a1 = y2 - y1;
const b1 = x1 - x2;
const c1 = a1 * x1 + b1 * y1;

const a2 = y4 - y3;
const b2 = x3 - x4;
const c2 = a2 * x3 + b2 * y3;

const determinant = a1 * b2 - a2 * b1;

if (determinant === 0) {
  return [0, 0]; // parallel lines
} else {
  const x = (b2 * c1 - b1 * c2) / determinant;
  const y = (a1 * c2 - a2 * c1) / determinant;
  return [x, y];
}
}

// 90
function solution90(data) {
const [a, b, c] = data;
return a ** 2 + b ** 2 === c ** 2;
}

// 91
function solution91(n) {
  if(n == 0 || n == 1) {
    return 1;
  } else {
    return n * solution91(n - 1);
  }
}

// 92
function solution92(n) {
if (n == 0) {
  return 0;
} else if (n == 1) {
  return 1;
} else {
  return solution92(n - 1) + solution92(n - 2);
}
}

// 93
function solution93(nums) {
if (nums.length === 1) {
  return nums[0];
} else {
  return nums[0] + solution93(nums.slice(1));
}
}

// 94
function solution94(data) {
const [a, b] = data;
if (b === 0) {
  return a;
} else {
  return solution94([b, a % b]);
}
}

// 95
function solution95(s) {
if (s.length <= 1) {
  return s;
} else {
  return solution95(s.slice(1)) + s[0];
}
}

// 96
function solution96(num) {
if (num < 1000) {
  return num.toString();
} else {
  return solution96(Math.floor(num / 1000)) + "," + (num % 1000).toString().padStart(3, "0");
}
}

// 97
function solution97(n) {
if (n === 0) {
  return "0";
} else if (n === 1) {
  return "1";
} else {
  return solution97(Math.floor(n / 2)) + (n % 2).toString();
}
}
// 정답 코드 없음
function solution98(data) {
  return undefined
}
// 99
function solution99(data) {
const [nums, target] = data;
let count = 0;

function backtrack(index, currSum) {
  if (currSum === target) {
    count++;
    return;
  }
  if (currSum > target || index === nums.length) {
    return;
  }

  backtrack(index + 1, currSum + nums[index]);
  backtrack(index + 1, currSum);
}

backtrack(0, 0);
return count;
}

// 100
function solution100(s) {
let result = "";

for (let i = 0; i < s.length; i++) {
  if (/[a-zA-Z]/.test(s[i])) {
    const char = s[i];
    let count = "";
    let j = i + 1;
    while (j < s.length && /\d/.test(s[j])) {
      count += s[j];
      j++;
    }
    result += char.repeat(parseInt(count, 10) || 1);
    i = j - 1;
  }
}

return result;
}

// 정답 코드 오브젝트
const answerSamples = {
  1: solution1,
  2: solution2,
  3: solution3,
  4: solution4,
  5: solution5,
  6: solution6,
  7: solution7,
  8: solution8,
  9: solution9,
  10: solution10,
  11: solution11,
  12: solution12,
  13: solution13,
  14: solution14,
  15: solution15,
  16: solution16,
  17: solution17,
  18: solution18,
  19: solution19,
  20: solution20,
  21: solution21,
  22: solution22,
  23: solution23,
  24: solution24,
  25: solution25,
  26: solution26,
  27: solution27,
  28: solution28,
  29: solution29,
  30: solution30,
  31: solution31,
  32: solution32,
  33: solution33,
  34: solution34,
  35: solution35,
  36: solution36,
  37: solution37,
  38: solution38,
  39: solution39,
  40: solution40,
  41: solution41,
  42: solution42,
  43: solution43,
  44: solution44,
  45: solution45,
  46: solution46,
  47: solution47,
  48: solution48,
  49: solution49,
  50: solution50,
  51: solution51,
  52: solution52,
  53: solution53,
  54: solution54,
  55: solution55,
  56: solution56,
  57: solution57,
  58: solution58,
  59: solution59,
  60: solution60,
  61: solution61,
  62: solution62,
  63: solution63,
  64: solution64,
  65: solution65,
  66: solution66,
  67: solution67,
  68: solution68,
  69: solution69,
  70: solution70,
  71: solution71,
  72: solution72,
  73: solution73,
  74: solution74,
  75: solution75,
  76: solution76,
  77: solution77,
  78: solution78,
  79: solution79,
  80: solution80,
  81: solution81,
  82: solution82,
  83: solution83,
  84: solution84,
  85: solution85,
  86: solution86,
  87: solution87,
  88: solution88,
  89: solution89,
  90: solution90,
  91: solution91,
  92: solution92,
  93: solution93,
  94: solution94,
  95: solution95,
  96: solution96,
  97: solution97,
  99: solution99,
  100: solution100
};

function test(func, input) {
  let funcString = ""
  // try {
  //   funcString = func.toString();
  // } catch (error) {
  //   console.error(error, func)
  // }
  funcString = func.toString();

  const funcName = funcString.slice(9, funcString.indexOf("("));
  let result
  if (typeof input === 'object') {
    result = eval(`${funcString} \n`+funcName+`(${JSON.stringify(input)})`);
  }else{
    result = eval(`${funcString} \n`+funcName+`(${(typeof input)=="number"?input:"'"+input+"'"})`);
  }
  return result;
}