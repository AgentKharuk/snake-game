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

