//나머지 매개변수 = 가변 매개변수

function restParameters(...items){
    console.log(items)
}
console.log(restParameters(1,23,88,4,12,3))
console.log(restParameters(2,2,2,2,2,2))