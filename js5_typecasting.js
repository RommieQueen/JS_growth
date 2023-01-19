//형 변환 String() Number() Boolean()
//잘못된 예시
let korean = prompt("국어 점수 : ")
let math = prompt("수학 점수 : ")
let eng = prompt("영어 점수 : ")
let result = (korean+math+eng) / 3

console.log(result)
//위의 결과는 엉뚱하게 나온다. prompt는 string형태로 입력받기 때문이다.

console.log(
    String(3),
    String(true),
    String(null),
    String(undefined)
)

console.log(
    Number("1234"), //1234
    Number("hihi"),//부정적인표현 NaN 출력
    Number(true), // 1
    Number(false), //0
    Number(null), //0
    Number(undefined)//NaN --> 외우자. **********
)
console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN), //모두 0 출력된다. false니까
    Boolean(123), //1
    Boolean(' ')
)
