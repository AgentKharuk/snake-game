export function addArrowHandler () {
    const snakeHead = document.querySelector('#snake-head')
    const arrowHandler = (event) => {
        if (event.key === "ArrowUp" || event.key === "w") {
            console.log("змея двигается вверх");   
        } else if (event.key === "ArrowRight" || event.key === "d") {
            console.log("змея двигается вправо");  
        } else if (event.key === "ArrowDown" || event.key === "s") {
            console.log("змея двигается вниз");  
        } else if (event.key === "ArrowLeft" || event.key === "a") {
            console.log("змея двигается влево");  
        }
    }
    document.addEventListener('keydown', arrowHandler) 
}
addArrowHandler()
