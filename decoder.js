const decoder = code => {
    let codeArr = code.split('')
    let uncoded = [];
    let i = 0;
    
    while(i < codeArr.length){
        if (!isNaN(codeArr[i])){
            i += Number(codeArr[i]) + 1
        }else{
            uncoded.push(codeArr[i])
            i++
        }
    }
    return uncoded.join('')
}

console.log(decoder('0h2xce5ngbrdy'))