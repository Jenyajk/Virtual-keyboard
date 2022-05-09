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

const html = `<div id="container">
<textarea id="textarea" rows="6" cols="60"></textarea>
<div class="keyboard">
    <button class="symbol" data-key="Backquote">\`</button>
    <button class="symbol" data-key="Digit1">1</button>
    <button class="symbol" data-key="Digit2">2</button>
    <button class="symbol" data-key="Digit3">3</button>
    <button class="symbol" data-key="Digit4">4</button>
    <button class="symbol" data-key="Digit5">5</button>
    <button class="symbol" data-key="Digit6">6</button>
    <button class="symbol" data-key="Digit7">7</button>
    <button class="symbol" data-key="Digit8">8</button>
    <button class="symbol" data-key="Digit9">9</button>
    <button class="symbol" data-key="Digit0">0</button>
    <button class="symbol" data-key="Minus">-</button>
    <button class="symbol" data-key="Equal">=</button>
    <button class="back" data-key="Backspace">Backspace</button>
    <button class="tab" data-key="Tab">Tab</button>
    <button class="letter" data-key="KeyQ">q</button>
    <button class="letter" data-key="KeyW">w</button>
    <button class="letter" data-key="KeyE">e</button>
    <button class="letter" data-key="KeyR">r</button>
    <button class="letter" data-key="KeyT">t</button>
    <button class="letter" data-key="KeyY">y</button>
    <button class="letter" data-key="KeyU">u</button>
    <button class="letter" data-key="KeyI">i</button>
    <button class="letter" data-key="KeyO">o</button>
    <button class="letter"data-key="KeyP">p</button>
    <button class="symbol" data-key="BracketLeft">[</button>
    <button class="symbol" data-key="BracketRight">]</button>
    <button class="symbol " data-key="Backslash">\\</button>
    <button class="delete lastitem" data-key="Delete">DEL</button>
    <button class="capslock" data-key="CapsLock">Caps lock</button>
    <button class="letter" data-key="KeyA" >a</button>
    <button class="letter" data-key="KeyS">s</button>
    <button class="letter" data-key="KeyD">d</button>
    <button class="letter" data-key="KeyF">f</button>
    <button class="letter" data-key="KeyG">g</button>
    <button class="letter" data-key="KeyH">h</button>
    <button class="letter" data-key="KeyJ">j</button>
    <button class="letter" data-key="KeyK">k</button>
    <button class="letter" data-key="KeyL">l</button>
    <button class="symbol" data-key="Semicolon">;</button>
    <button class="symbol" data-key="Quote">'</button>
    <button class="return lastitem" data-key="Enter">ENTER</button>
    <button class="left-shift" data-key="ShiftLeft">Shift</button>
    <button class="symbol" data-key="Backslash">\\</button>
    <button class="letter" data-key="KeyZ">z</button>
    <button class="letter" data-key="KeyX">x</button>
    <button class="letter" data-key="KeyC">c</button>
    <button class="letter" data-key="KeyV">v</button>
    <button class="letter" data-key="KeyB">b</button>
    <button class="letter" data-key="KeyN">n</button>
    <button class="letter" data-key="KeyM">m</button>
    <button class="symbol" data-key="Comma">,</button>
    <button class="symbol" data-key="Period">.</button>
    <button class="symbol" data-key="Slash">/</button>
    <button class="but-up" data-key="ArrowUp">▲</button>
    <button class="right-shift lastitem" data-key="ShiftRight">Shift</button>
    <button class="left-ctrl" data-key="ControlLeft">Ctrl</button>
    <button class="fn" data-key="MetaLeft">Win</button>
    <button class="left-alt" data-key="AltLeft">Alt</button>
    <button class="space" data-key="Space">&nbsp;</button>
    <button class="right-alt" data-key="AltRight">Alt</button>
    <button class="right-ctrl" data-key="ControlRight">Ctrl</button>
    <button class="but-left" data-key="ArrowLeft">◄</button>
    <button class="but-down" data-key="ArrowDown">▼</button>
    <button class="but-right" data-key="ArrowRight">►</button>
</div>
</div>`


const body = document.body;
body.innerHTML = html;
const lett = document.querySelectorAll('.letter');
const capslock1 = document.querySelector('.capslock');
let number = document.querySelectorAll('.symbol');
let display = document.getElementById('textarea');
const backs = document.querySelector('.back');
const t = document.querySelector('.tab');
const sp = document.querySelector('.space');
const sh = document.querySelector('.left-shift');
let textarea = document.getElementById('textarea');
let ctrl = document.querySelector('.left-ctrl');
const alt = document.querySelector('.left-alt');




window.addEventListener('keyup', (e) => {
    console.log(e.code)
})


let s2 = document.createElement('section');
s2.className = 'section2';
document.body.append(s2);

let info = document.createElement('div');
info.className = 'help';
info.textContent = 'The keyboard was created in the Windows operating system. To switch the language combination: ctrl + alt'
s2.prepend(info); 



backs.onclick = function () {
    display.textContent = display.textContent.slice(0, -1)
}

let key = document.querySelectorAll('.letter');
for (let k of key) {
    k.onclick = function () {
        display.textContent = display.textContent + k.textContent;
    }
}


for (let n of number) {
    n.onclick = function () {
        display.textContent = display.textContent + n.textContent;
    }
}

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


t.onclick = function () {
    t.classList.toggle('anim');
    display.textContent += '    '
}


sp.onclick = function () {
    display.textContent += ' '
}

sh.addEventListener ('click', function () {
    if (sh.classList.toggle('active')) {    
        lett.forEach((el) => {
		el.textContent = el.textContent.toUpperCase()
	});}
    else  {    
        lett.forEach((el) => {
		el.textContent = el.textContent.toLowerCase()
	})};
})

body.addEventListener("keydown", (e)=>{
    e.preventDefault();
    document.querySelectorAll('.letter').forEach(item=>{
        if(item.dataset.key === e.code){
            item.classList.add('active')
            textarea.value = textarea.value += e.key
            // write(item.tag);
            // if(item.tag.textContent === "ctrl"){
            //     obj.ctrl = true;
                
            // }else if(item.tag.textContent == "Shift"){
            //     if(!obj.shift){
            //         obj.shift = true;
            //         shiftActive();
            //     }
            // }
        }
        
    });
});

body.addEventListener("keyup", (e)=>{
    e.preventDefault();
    document.querySelectorAll('.letter').forEach(item=>{
        if(item.dataset.key === e.code){
            item.classList.remove('active')
            // write(item.tag);
            // if(item.tag.textContent === "ctrl"){
            //     obj.ctrl = true;
                
            // }else if(item.tag.textContent == "Shift"){
            //     if(!obj.shift){
            //         obj.shift = true;
            //         shiftActive();
            //     }
            // }
        }
        
    });
});

body.addEventListener("keydown", (e)=>{
    e.preventDefault();
    document.querySelectorAll('.symbol').forEach(item=>{
        if(item.dataset.key === e.code){
            item.classList.add('active')
            textarea.value = textarea.value += e.key
        }
        
    });
});
body.addEventListener("keyup", (e)=>{
    e.preventDefault();
    document.querySelectorAll('.symbol').forEach(item=>{
        if(item.dataset.key === e.code){
            item.classList.remove('active')
        }
    });
});



