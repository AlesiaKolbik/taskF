


function countLet(arr, ind) {
    var counter;
    var vovel = ['у','е','ы','а','о','э','я','и','ю'];
    if(ind === arr.length)return 0;
    return counter = (vovel.includes(arr[ind])?1:0) + countLet(arr,ind+1);
}
while(!arrayLetters){
    var arrayLetters =(prompt('Введите строку','')).toLowerCase().split('');
}

console.log(countLet(arrayLetters,0));