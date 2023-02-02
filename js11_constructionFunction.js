//생성자 함수 : 비슷한 객체 여러개 만드는 함수 , 구조는 일반함수와 동
//첫글자 대문자 국룰
//new 연산자 사용, return 문없이도 반
function User(name, age, city) {
    this.name = name
    this.age = age
    this.city = city
    this.sayName = function(){ //메서드
        console.log(`그(녀)의 이름은 ${this.name}입니다.`)
    }
}

let User1 = new User('JES', 18, 'Goyang')
let User2 = new User('Oliver', 23, 'Toronto')
let User3 = new User('Tom', 30, 'NewYork')
let User4 = new User('Jason', 55, 'Sydney')

User1.sayName()

//상품 생성자 함수
function Item(name, price, isSale) {
    this.name = name
    this.price = price
    this.isSale = isSale
    this.Inform = function(){
        console.log(`상품명 : ${this.name} \ 가격 : ${this.price}$ \ 판매여부 : ${this.isSale}`)
    }
}

//가격은 달러입니다!!
let Item1 = new Item("soap", "299", "O")
let Item2 = new Item("apple", "0.99", "O")
let Item3 = new Item("ramen", "2", "X")

Item1.Inform()
Item2.Inform()
Item3.Inform()
