//while, do while, break, continue
    //while
while(true) {
    let ans = confirm('continue?')
    if(!ans){ //confirm이 취소(false)될 때까지!! ***************
        break;
    }
}

    //do
let a = 1
do{
    a++
    console.log("a=" +a)
} while(a!=10) //a가 10일때까지 

    //continue
for(let i=0; i<10;i++){
    if(i%2){
        continue;
    }
    console.log("i="+i)
}