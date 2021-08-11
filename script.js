var btn=document.querySelector('#click')
var inputTxt=document.querySelector('#dateIn')
var outputTxt=document.querySelector('#result')


btn.addEventListener('click',function clickHandler(){
    var inputValue=inputTxt.value
    // console.log(inputValue)
    var formattedValue=inputValue.split("-")
    // console.log(formattedValue)
    // console.log(formattedValue[0])

    
    if ((formattedValue[0] % 100 === 0) ? (formattedValue[0] % 400 === 0) : (formattedValue[0] % 4 === 0)) {
        // console.log(`${inputValue} is a leap year`);
        outputTxt.innerHTML=(`${formattedValue[0]} is a leap year`)
    } 
    else if(isNaN(formattedValue[0])){
        outputTxt.innerHTML=("invalid input")
    }
    else {
        // console.log(`${inputValue} is not a leap year`);
        outputTxt.innerHTML=(`${formattedValue[0]} is not a leap year`)
    }
});