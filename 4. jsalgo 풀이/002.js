'a10b9r1ce33uab8wc918v2cv11v9'.match(/[0-9]/g)


'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g)

//10이었을 때 인식 못함
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g)


'a10b9r10ce33uab8wc918v2cv11v9'.match(/([rev])([0-9]|10)/g)

'a10b9r10ce33uab8wc918v2cv11v9'.match(/([rev])(10|[0-9])/g)


// ?<변수명> 으로 그루핑 가능
const regex = /(?<one>[rev])(?<two>10|[0-9])/g;
const replacedString = 'a10b9r10ce33uab8wc918v2cv11v9'.replace(regex, "[$<one>]($<two>)");
replacedString


const regex2 = /([rev])(10|[0-9])/g;
regex2.exec('a10b9r10ce33uab8wc918v2cv11v9') // global 옵션이 있어도 하나만 줌
// 다만 계속해서 실행시키면 다음 값을 줌
regex2.exec('a10b9r10ce33uab8wc918v2cv11v9')
regex2.exec('a10b9r10ce33uab8wc918v2cv11v9')
// 이러한 특징을 이용해서 아래와 같은 구문을 만들 수 있음

let myString = "a10b9r10ce33uab8wc918v2cv11v9"
let myRegex = /([rev])(10|[0-9])/g
let result = undefined

while (result = myRegex.exec(myString)) {
    console.log(result, myRegex.lastIndex);
}


function solution(data) {
    let result = 0
    data = data.match(/([rev])(10|[0-9])/g)
    for (let i of data) {
        result += parseInt(i.slice(1))
    }
    result = result.toString()
    return `${result[0]}월 ${result[1]}일`
}

solution('a10b9r1ce33uab8wc918v2cv11v9')