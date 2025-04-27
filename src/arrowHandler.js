export function addArrowHandler () {
    const snakeHead = document.querySelector('#snakeHead')
    const goDown = (element) => {
        const topOffset = parseInt(element.style.top)
        element.style.top = topOffset + 100 + 'px';
    }
    const goUp = (element) => {
        const topOffset = parseInt(element.style.top)
        element.style.top = topOffset - 100 + 'px';
    }
    const goLeft = (element) => {
        const leftOffset = parseInt(element.style.left)
        element.style.left = leftOffset - 100 + 'px';
    }
    const goRight = (element) => {
        const leftOffset = parseInt(element.style.left)
        element.style.left = leftOffset + 100 + 'px';
    }
    const arrowHandler = (event) => {
        if (event.key === "ArrowUp" || event.key === "w") {
            goUp(snakeHead)  
        } else if (event.key === "ArrowRight" || event.key === "d") {
            goRight(snakeHead) 
        } else if (event.key === "ArrowDown" || event.key === "s") {
            goDown(snakeHead) 
        } else if (event.key === "ArrowLeft" || event.key === "a") {
            goLeft(snakeHead) 
        }
    }
    document.addEventListener('keydown', arrowHandler) 
}

