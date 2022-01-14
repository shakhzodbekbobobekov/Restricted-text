const container = document.querySelector('.container')
const myText = document.querySelector('#my-text')
const result = document.querySelector('#result')
const maxElement = document.querySelector('.max-element')
const loaderAnim = document.querySelector('.loader')

let leader = setTimeout( () => {
    loaderAnim.style.display = 'none'
    container.style.display = 'block'
}, 1000)


let limit = 50
result.textContent = 0 + '/' + limit

myText.addEventListener('input', () => {
    let textLenght = myText.value.length 
    result.textContent = textLenght + '/' + limit
    if( textLenght > limit){
        myText.style.borderColor = 'red'
        result.style.color = 'red'
        maxElement.style.display = 'block'
    }else{
        myText.style.borderColor = 'rgb(14, 190, 14)'
        result.style.color = 'rgb(14, 190, 14)'
        maxElement.style.display = 'none'
    }
})