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
console.log(Object.assign(user2, info, info1, info2))

//.assign() 복사만 하기
console.log("**** 자기자신만 복사 ****")
const user3 = {
    name : "brown",
    age : "18",
    fav : "game"
}
const user4 = Object.assign({}, user3)
user4.name = "Minty" //유저3의 이름엔 대입되지 않는다.
console.log(user3.name) //brown 출력
console.log(user4.name) //minty 출력

const user5 = user3;
user5.name = "molly" //user3의 name에 대입돼서
console.log(user3.name) //brown이 molly 로 바뀐다.