var user = {
    name : "kitty",
    age : 17,
    gender : "female",
    fav : "food"
}

//오브젝트 키 -> 배열 Object.keys()
console.log("****키->배열 변환****")
var array = Object.keys(user)
console.log(array)

//오브젝트 값 -> 배열 Object.valuse()
console.log("****값->배열 변환****")
var array = Object.values(user)
console.log(array)

//키/값 - > 배열 Object.entries()
console.log("****키/값->배열 변환 ****")
var array = Object.entries(user)
console.log(array)

//배열 - > 키/값 Object.fromEntries()
console.log("****배열->키/값****")
const user1 = [ //배열안에 배열
    ["name","lulu"],
    ["age","7"],
    ["gender","female"]
]
var keyAndvalue = Object.fromEntries(user1)
console.log(keyAndvalue)

//오브젝트 복사(합치기,..?) Object.assign()
console.log("****오브젝트 복사*****")
const user2 = {
    name : "Mike"
}
const info = {
    age : "14"
}
const info1 = {
    gender : "male"
}
const info2 = {
    fav : "computer"
}

const assign = Object.assign(user2, info, info1, info2)
console.log(assign)

