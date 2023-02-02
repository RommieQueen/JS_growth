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

let me = {
    name : "JES",
    sayThis : function(){ //화살표 함수면 에러
        console.log(this)
    }
}

