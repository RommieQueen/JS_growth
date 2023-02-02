//객체 만들기
console.log("객체 만들기")
const obj = {
    name : 'oliver',
    age : 30,
    gender : 'man',
    fav : 'food'
}

console.log(obj.name)
console.log(obj['age']) //이거기억
console.log(obj.gender)
console.log(obj.fav)

//프로퍼티 추가 등호 사용
console.log("프로퍼티 추가")
obj.country = "USA"
obj["state"] = "Arizona"
console.log(obj.country)
console.log(obj["state"])

//무슨 프로퍼티 있는지 반환
console.log("프로퍼티 종류 반환")
for(x in obj){
    console.log(x)
}
//프로퍼티에 대입된 값 반환
console.log("대입된 프로퍼티 종류")
for(y in obj){
    console.log(obj[y])
}
//프로퍼티 삭제
console.log("프로퍼티 삭제")
delete obj.fav 
console.log(obj)

//프로퍼티 존재여부 반환
console.log("프로퍼티 존재여부 반환")
console.log('age' in obj) //문자열로 해야했다.
console.log('hobby' in obj)

//함수로 객체반환
console.log("함수로 객체 반환")
function returnPrivacy(name, age, country, state){
    return{
        name : name,
        age : age,
        country : country,
        state : state
    }
}
const me = returnPrivacy('JES', 18, 'KOREA', 'Ilsan')
console.log(me)

//프로퍼티로 true또는 false 반환 함수
console.log("프로퍼티로 불 반환")
function isKorean(user){
    if('country' in user){
        if(user.country == "KOREA"){
            return true
        }
        else {
            return false
        }
    }
    else {
        return undefined //프로퍼티 존재하지 않음
    }
}
console.log(isKorean(me))
console.log(isKorean(obj))

