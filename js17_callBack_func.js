function callBackTimes(callBack){
    for (let i = 0; i<5; i++){
        callBack(i)
    }
}

function print(i){
    console.log(`${i}번 째 함수 추가`)
}

callBackTimes(print)