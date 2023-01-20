function add(x,y){ //function으로 선언
    let res = x+y;
    return res;
}

add1 = (x1,y1) => { //이렇게도 선언 가능
    let res1 = x1+y1;
    return res1;
}

((x2, y2) => {return x2+y2;})(5,6) //함수 감추기

function showName(name) {
    const msg = `Hi, ${name}`; //백틱, 달러 이용
    console.log(msg)
}
showName('jes')
showName('bitch')
showName() //undefined
showName('')// Hi, 만 출력

// 이름이 입력되었으면 이름까지, 아니면 hello!만 출력
function showName2(name2){
    console.log(name2)
    let msg2 = `Hello!`;
    if(name2) { //undefined는 false다!
        msg2 += ' '+= name2
    }
    console.log(msg2)
}
showName2('zzizzi')