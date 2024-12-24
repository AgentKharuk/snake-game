export function addArrowHandler () {
    const snakeHead = document.querySelector('#snake-head')
    const arrowHandler = (event) => {
        if (event.key === "ArrowUp") {
            console.log(event.key);   
        } else if (event.key === "ArrowRight") {
            console.log(event.key);  
        } else if (event.key === "ArrowDown") {
            console.log(event.key);  
        } else if (event.key === "ArrowLeft") {
            console.log(event.key);  
        } 
    }
    document.addEventListener('keydown', arrowHandler) 
}
addArrowHandler()
