/**
 * написать класс поля, будет давать позиционирование
 * написать класс клетки
 * частным случаем класса клетки будет змей
 */


class FieldBlock {
    /**
     * 
     * @param {'empty'|'eat'|'snake'} state 
     */
    constructor(state) {
        this.state = 'empty'   
    }
    setState(state){
        this.state = state
    }
    isEmpty(){
        return this.state === 'empty'
    }
    isEat(){
        return this.state === 'eat'
    }
    isSnake(){
        return this.state === 'snake'
    }
}

class Field {
    constructor(fieldLength) {
        this.fieldLength = fieldLength
        this.field = []
        this.interval = 1000
        this.direction = 'top'
        this.snakePosition = [0, 0]
        for (let index = 0; index < this.fieldLength; index++) {
           this.field.push(Array(this.fieldLength).fill().map(()=> new FieldBlock('empty')))
            
        }
        this.intervalId = setInterval(this.game.bind(this), this.interval)
    }
    game(){
        this.field[this.snakePosition[0]][this.snakePosition[1]].setState('empty')
        // console.log(this.field,this.field[this.snakePosition[0]],this.field[this.snakePosition[0]][this.snakePosition[1]])
        const newPosition = this.snakePosition[1]+1 === this.fieldLength?0:this.snakePosition[1]+1
        this.field[this.snakePosition[0]][newPosition].setState('snake')
        this.snakePosition = [this.snakePosition[0], newPosition]
        console.log(this.field[this.snakePosition[0]].map(elem=>elem.isSnake()))
    }
}

/**
 * сделать появление змея
 * прикрутить управление змеем
 * сделать визуал
 * сделать старт, стоп и сброс
 */
