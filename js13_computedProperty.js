//계산된 프로퍼티
//객체의 변수명에 미리 계산된 변수명을 넣는 것
//프로퍼티를 키로 쓰러면 [대괄호]로 묶어야 한다.

let p = "price"

const item = {
    name : "soap",
    [p] : 3800 //키로 price가 대입된다.
}
console.log(item)

function makeObj(key,val){
    return {
        [key] : val //키로 쓰기위해!!
    }
}
const obj =makeObj("num", 76)
console.log(obj)