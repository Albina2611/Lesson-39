let inputWidth = document.querySelector(".input_width")
let inputHeight = document.querySelector(".input_height")
let inputColor = document.querySelector(".input_color")
let inputRadius = document.querySelector(".isRadius")
let container = document.querySelector(".box")
let btnClear = document.querySelector(".btnn")
let btnCreate = document.querySelector('.btn')
let btnUp = document.querySelector(".top")
let btnDown = document.querySelector(".bottom")
let btnLeft = document.querySelector(".left")
let btnRight = document.querySelector(".left")

let newDiv;
let mTop = 0;
let mLeft = 0;
let iwValue;
let ihValue;
let icValue;
let isRadius;
let isDiv = false;

const createDiv = () =>{
    if (!isDiv){
        iwValue = inputWidth.value
        ihValue = inputHeight.value
        icValue = inputColor.value
        isRadius = inputRadius.checked
    
        if(iwValue >= 50 && ihValue >= 50 && iwValue <= 500 && ihValue <= 500){
          newDiv = document.createElement('div')
          newDiv.style.width = iwValue+'px'
          newDiv.style.height = ihValue+'px'
          newDiv.style.backgroundColor = icValue


          if (isRadius){
              newDiv.style.borderRadius = iwValue/2+'px'
          }

          container.prepend(newDiv)
          inputHeight.setAttribute('readonly', 1)
          inputWidth.setAttribute('readonly', 1)
          isDiv = true
    }
  }
}

const clearDiv = () =>{
    container.firstChild.remove()
    isDiv = false
    inputHeight.removeAttribute('readonly', 1)
    inputWidth.removeAttribute('readonly', 1)
}

btnCreate.addEventListener('click', createDiv)
btnClear.addEventListener('click', clearDiv)

const blockUp = () =>{
    if (mTop - 10 >= 0){
        mTop -= 10
        newDiv.style.marginTop = mTop + 'px'
    }
    
}
const blockDown = () =>{
    if(500 - (mTop*1 + ihValue*1 + 10) >= 0){
        mTop += 10
        newDiv.style.marginTop = mTop + 'px'
    }
    
}
const blockRight = () =>{
    if (mLeft - 10 >= 0){
        mLeft -= 10
        newDiv.style.marginLeft = mTop + 'px'
    }
}
const blockLeft = () =>{
    if(500 - (mLeft*1 + iwValue*1 + 10) >= 0){
        mLeft += 10
        newDiv.style.marginLeft = mTop + 'px'
    }
    
}



btnUp.addEventListener('click', blockUp)
btnDown.addEventListener('click', blockDown)
btnLeft.addEventListener('click', blockLeft)
btnRight.addEventListener('click', blockRight)