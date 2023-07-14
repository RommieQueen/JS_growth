//익명함수
const f = function(){
    console.log('함수 1')
    console.log('함수 2')
    console.log('함수 3')
}

f()

console.log(typeof p)
console.log(f) // undifined
console.log('')

//선언적 함수
function f1(){
    console.log('함수4')
    console.log('함수 5')
    console.log('함수 6')
}

f1()
console.log(typeof f1) //function
console.log(f1)