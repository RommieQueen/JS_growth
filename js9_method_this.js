//메서드
let someone = {
    name : "Mike",
    showName : function(){
        console.log(someone.name)
    }
}

let boy = someone
boy.name = "Tom"
boy.showName()

//this
/*
boy = null
boy.showName() ---> 에러남 */

let somebody = {
    name : "kitty",
    callName : function(){
        console.log(this.name)
    }
};

//this
let girl = somebody
somebody = null
girl.callName() //제대로 출력이 된다.
//this의 개념을 계속 공부하도록 하자.

