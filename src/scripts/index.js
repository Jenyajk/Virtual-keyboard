import keys from './alert';

// import '../assets/styles/style.css';
// import '../assets/styles/style.scss';
// import oneJpg from '../assets/images/icon-phone.svg';

// const wrapper = document.getElementById('wrapper');
// const {createDiv, createImg } = helpers;
// const dogPng = require('../assets/images/footer-puppy.png');
// console.log (dogPng)


// createImg(oneJpg, wrapper);
// createDiv(wrapper);
import styles from '../assets/styles/style.css';

const body = document.body;
let ctrl = document.querySelector('.left-ctrl');
const alt = document.querySelector('.left-alt');



window.addEventListener('click', (e) => {
    console.log(e.target)
})


const html = `<div id="container">
<textarea id="textarea" rows="6" cols="60"></textarea>
<div id="keyboard">
    <div class="symbol"><span class="off">\`</span></div>
    <div class="symbol"><span class="off">1</span></div>
    <div class="symbol"><span class="off">2</span></div>
    <div class="symbol"><span class="off">3</span></div>
    <div class="symbol"><span class="off">4</span></div>
    <div class="symbol"><span class="off">5</span></div>
    <div class="symbol"><span class="off">6</span></div>
    <div class="symbol"><span class="off">7</span></div>
    <div class="symbol"><span class="off">8</span></div>
    <div class="symbol"><span class="off">9</span></div>
    <div class="symbol"><span class="off">0</span></div>
    <div class="symbol"><span class="off">-</span></div>
    <div class="symbol"><span class="off">=</span></div>
    <button class="back">Backspace</button>
    <button class="tab">Tab</button>
    <div class="letter">q</div>
    <div class="letter">w</div>
    <div class="letter">e</div>
    <div class="letter">r</div>
    <div class="letter">t</div>
    <div class="letter">y</div>
    <div class="letter">u</div>
    <div class="letter">i</div>
    <div class="letter">o</div>
    <div class="letter">p</div>
    <div class="symbol"><span class="off">[</span></div>
    <div class="symbol"><span class="off">]</span></div>
    <div class="symbol lastitem"><span class="off">\\</span></div>
    <button class="delete lastitem">DEL</button>
    <button class="capslock">Caps lock</button>
    <div class="letter">a</div>
    <div class="letter">s</div>
    <div class="letter">d</div>
    <div class="letter">f</div>
    <div class="letter">g</div>
    <div class="letter">h</div>
    <div class="letter">j</div>
    <div class="letter">k</div>
    <div class="letter">l</div>
    <div class="symbol"><span class="off">;</span></div>
    <div class="symbol"><span class="off">'</span></div>
    <button class="return lastitem">ENTER</button>
    <button class="left-shift">Shift</button>
    <div class="symbol">\\</div>
    <div class="letter">z</div>
    <div class="letter">x</div>
    <div class="letter">c</div>
    <div class="letter">v</div>
    <div class="letter">b</div>
    <div class="letter">n</div>
    <div class="letter">m</div>
    <div class="symbol"><span class="off">.</span></div>
    <div class="symbol"><span class="off">,</span></div>
    <div class="symbol"><span class="off">/</span></div>
    <button class="but-up">▲</button>
    <button class="right-shift lastitem">Shift</button>
    <button class="left-ctrl">Ctrl</button>
    <button class="fn">Win</button>
    <button class="left-alt">Alt</button>
    <button class="space lastitem">&nbsp;</button>
    <button class="right-alt">Alt</button>
    <button class="right-ctrl">Ctrl</button>
    <button class="but-left">◄</button>
    <button class="but-down">▼</button>
    <button class="but-right">►</button>
</div>
</div>`

body.innerHTML = html

let s2 = document.createElement('section');
s2.className = 'section2';
document.body.append(s2);

let div = document.createElement('div');
div.className = 'help';
s2.prepend(div); 

let display = document.getElementById('textarea');
const backs = document.querySelector('.back');

backs.onclick = function () {
    display.textContent = display.textContent.slice(0, -1)
}

let key = document.getElementById('keyboard').querySelectorAll('.letter');
for (let k of key) {
    k.onclick = function () {
        display.textContent = display.textContent + k.textContent;
    }
}

let number = document.querySelectorAll('.symbol');
for (let n of number) {
    n.onclick = function () {
        display.textContent = display.textContent + n.textContent;
    }
}

const lett = document.querySelectorAll('.letter');
const capslock1 = document.querySelector('.capslock');
capslock1.addEventListener( 'click', function () {
    if (capslock1.classList.toggle('active')) {    
        lett.forEach((el) => {
		el.textContent = el.textContent.toUpperCase()
	});}
    else  {    
        lett.forEach((el) => {
		el.textContent = el.textContent.toLowerCase()
	})}
} );

const t = document.querySelector('.tab');
t.onclick = function () {
    t.classList.toggle('anim');
    display.textContent += '    '
}





