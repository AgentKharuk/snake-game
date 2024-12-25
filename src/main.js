import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { addArrowHandler } from './arrowHandler.js'

document.querySelector('#app').innerHTML = `
  <div id="snakeHead" style="position:absolute; left:0px; top:0px">
    
  </div>
`
addArrowHandler()
