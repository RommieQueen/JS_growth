//배열 선언
let student = ['jes', 'oliver', 'charlie', 'cat', 'doggy'] //인덱스 0~4
console.log(student[3])
console.log(student[0])
//배열 길이 구하기 .length
console.log("***** length")
console.log(student.length)

//배열 끝에 추가 .push(1)
console.log("***** push()")
student.push("lovey")
console.log(student[5])

//배열 끝 하나 삭제 .pop()
console.log("***** pop()")
student.pop()
for (x in student) {
    console.log(student[x])
}

console.log("***** pop() again.")
student.pop()
for (x in student) {
    console.log(student[x])
}

//배열 앞에 추가 .unshift(1)
student.unshift("lucas")
console.log(student[0])

//배열앞에 삭제 .shift(1)
console.log("**** shift()")
student.shift()
for (x in student){
    console.log(student[x])
}
console.log("**** 한번 더 shift")
student.shift()
for (x in student){
    console.log(student[x])
}

