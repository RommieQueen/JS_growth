function add(x,y){ //function으로 선언
    let res = x+y;
    return res;
}

add1 = (x1,y1) => { //이렇게도 선언 가능
    let res1 = x1+y1;
    return res1;
}

((x2, y2) => {return x2+y2;})(5,6) //함수 감추기