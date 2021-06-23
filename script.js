var btn=document.querySelector('#click')
var inputTxt=document.querySelector('#dateIn')
var outputTxt=document.querySelector('#result')


btn.addEventListener('click',function clickHandler(){
    var inputValue=inputTxt.value
    
    if ((inputValue % 100 === 0) ? (inputValue % 400 === 0) : (inputValue % 4 === 0)) {
        // console.log(`${inputValue} is a leap year`);
        outputTxt.innerHTML=(`${inputValue} is a leap year`)
    } 
    else if(isNaN(inputValue)){
        outputTxt.innerHTML=("invalid input")
    }
    else {
        // console.log(`${inputValue} is not a leap year`);
        outputTxt.innerHTML=(`${inputValue} is not a leap year`)
    }
});