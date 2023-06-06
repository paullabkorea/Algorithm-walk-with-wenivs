data = `  + +-+ -+-  
++ -- +-+  
++-+ -+ -  
+ ++-+ -+  `

data.split('\n')

"  + +-+ -+-  ".replace(/ /g, '').replace(/\+/g, '1').replace(/\-/g, '0')

//////////////////

'A'.charCodeAt()

String.fromCharCode(65, 66, 67)

parseInt('1101010', 2)

String.fromCharCode(106)

for (let i of data.split('\n')) {
    console.log(i)
}


let result = ''
for (let i of data.split('\n')) {
    i = i.replace(/ /g, '').replace(/\+/g, '1').replace(/\-/g, '0')
    result += String.fromCharCode(parseInt(i, 2))
}

// 정답
function solution(data) {
    let result = ''
    for (i of data) {
        i = i.replace(/ /g, '').replace(/\+/g, '1').replace(/\-/g, '0')
        result += String.fromCharCode(parseInt(i, 2))
    }
    return result
}