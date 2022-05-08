// import helpers from './alert';

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

const d = document.createElement('div');
const sp = document.createElement('span');
const body = document.body;

const html = `<div id="container">
<textarea id="textarea" rows="6" cols="60"></textarea>
<div id="keyboard">
    <div class="symbol"><span class="off">\`</span><span class="on">~</span></div>
    <div class="symbol"><span class="off">1</span><span class="on">!</span></div>
    <div class="symbol"><span class="off">2</span><span class="on">@</span></div>
    <div class="symbol"><span class="off">3</span><span class="on">#</span></div>
    <div class="symbol"><span class="off">4</span><span class="on">$</span></div>
    <div class="symbol"><span class="off">5</span><span class="on">%</span></div>
    <div class="symbol"><span class="off">6</span><span class="on">^</span></div>
    <div class="symbol"><span class="off">7</span><span class="on">&amp;</span></div>
    <div class="symbol"><span class="off">8</span><span class="on">*</span></div>
    <div class="symbol"><span class="off">9</span><span class="on">(</span></div>
    <div class="symbol"><span class="off">0</span><span class="on">)</span></div>
    <div class="symbol"><span class="off">-</span><span class="on">_</span></div>
    <div class="symbol"><span class="off">=</span><span class="on">+</span></div>
    <div class="back">Backspace</div>
    <div class="tab">Tab</div>
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
    <div class="symbol"><span class="off">[</span><span class="on">{</span></div>
    <div class="symbol"><span class="off">]</span><span class="on">}</span></div>
    <div class="symbol lastitem"><span class="off">\\</span><span class="on">|</span></div>
    <div class="delete lastitem">DEL</div>
    <div class="capslock">Caps lock</div>
    <div class="letter">a</div>
    <div class="letter">s</div>
    <div class="letter">d</div>
    <div class="letter">f</div>
    <div class="letter">g</div>
    <div class="letter">h</div>
    <div class="letter">j</div>
    <div class="letter">k</div>
    <div class="letter">l</div>
    <div class="symbol"><span class="off">;</span><span class="on">:</span></div>
    <div class="symbol"><span class="off">'</span><span class="on">&quot;</span></div>
    <div class="return lastitem">ENTER</div>
    <div class="left-shift">Shift</div>
    <div class="symbol">\\</div>
    <div class="letter">z</div>
    <div class="letter">x</div>
    <div class="letter">c</div>
    <div class="letter">v</div>
    <div class="letter">b</div>
    <div class="letter">n</div>
    <div class="letter">m</div>
    <div class="symbol"><span class="off">.</span><span class="on">&gt;</span></div>
    <div class="symbol"><span class="off">,</span><span class="on">&lt;</span></div>
    <div class="symbol"><span class="off">/</span><span class="on">?</span></div>
    <div class="but-up">▲</div>
    <div class="right-shift lastitem">Shift</div>
    <div class="left-ctrl">Ctrl</div>
    <div class="fn">Fn</div>
    <div class="left-alt">Alt</div>
    <div class="space lastitem">&nbsp;</div>
    <div class="right-alt">Alt</div>
    <div class="right-ctrl">Ctrl</div>
    <div class="but-left">◄</div>
    <div class="but-down">▼</div>
    <div class="but-right">►</div>
</div>
</div>`

body.innerHTML = html


// let s = document.createElement('section');
// s.className = 'section';
// document.body.prepend(s);


let s2 = document.createElement('section');
s2.className = 'section2';
document.body.append(s2);

// let f = document.createElement('textarea');
// f.className = 'form';
// s.prepend(f);

let div = document.createElement('div');
div.className = 'help';
s2.prepend(div); 

// let keyb = document.createElement('div')
// keyb.className = 'keyb';
// s.append(keyb);

// let first = document.createElement('div');
// first.className = 'ul';
// keyb.prepend(first);

// let sym = document.createElement('div');
// sym.className = 'symbol';
// first.prepend(sym)

// let symspan = document.createElement('span');
// symspan.className = 'off';
// sym.prepend(symspan);
// symspan.textContent = '`'

// let symspan1 = document.createElement('span');
// symspan1.className = 'on';
// sym.prepend(symspan1);
// symspan1.textContent = '~';

// let sym1 = document.createElement('div');
// sym1.className = 'symbol';
// first.append(sym1)

// let sym1span = document.createElement('span');
// sym1span.className = 'off';
// sym1.prepend(sym1span);
// sym1span.textContent = '1'

// let sym1span1 = document.createElement('span');
// sym1span1.className = 'on';
// sym1.prepend(sym1span1);
// sym1span1.textContent = '!';

// let sym2 = document.createElement('div');
// sym2.className = 'symbol';
// first.append(sym2)

// let sym2span = document.createElement('span');
// sym2span.className = 'off';
// sym2.prepend(sym2span);
// sym2span.textContent = '2'

// let sym2span1 = document.createElement('span');
// sym2span1.className = 'on';
// sym2.prepend(sym2span1);
// sym2span1.textContent = '@';

// let sym3 = document.createElement('div');
// sym3.className = 'symbol';
// first.append(sym3)

// let sym3span = document.createElement('span');
// sym3span.className = 'off';
// sym3.prepend(sym3span);
// sym3span.textContent = '3'

// let sym3span1 = document.createElement('span');
// sym3span1.className = 'on';
// sym3.prepend(sym3span1);
// sym3span1.textContent = '#';

// let sym4 = document.createElement('div');
// sym4.className = 'symbol';
// first.append(sym4)

// let sym4span = document.createElement('span');
// sym4span.className = 'off';
// sym4.prepend(sym4span);
// sym4span.textContent = '4'

// let sym4span1 = document.createElement('span');
// sym4span1.className = 'on';
// sym4.prepend(sym4span1);
// sym4span1.textContent = '$';

// let sym5 = document.createElement('div');
// sym5.className = 'symbol';
// first.append(sym5)

// let sym5span = document.createElement('span');
// sym5span.className = 'off';
// sym5.prepend(sym5span);
// sym5span.textContent = '5'

// let sym5span1 = document.createElement('span');
// sym5span1.className = 'on';
// sym5.prepend(sym5span1);
// sym5span1.textContent = '%';

// let sym6 = document.createElement('div');
// sym6.className = 'symbol';
// first.append(sym6)

// let sym6span = document.createElement('span');
// sym6span.className = 'off';
// sym6.prepend(sym6span);
// sym6span.textContent = '6'

// let sym6span1 = document.createElement('span');
// sym6span1.className = 'on';
// sym6.prepend(sym6span1);
// sym6span1.textContent = '^';

// let sym7 = document.createElement('div');
// sym7.className = 'symbol';
// first.append(sym7)

// let sym7span = document.createElement('span');
// sym7span.className = 'off';
// sym7.prepend(sym7span);
// sym7span.textContent = '7'

// let sym7span1 = document.createElement('span');
// sym7span1.className = 'on';
// sym7.prepend(sym3span1);
// sym7span1.textContent = '&';

// let sym8 = document.createElement('div');
// sym8.className = 'symbol';
// first.append(sym8)

// let sym8span = document.createElement('span');
// sym8span.className = 'off';
// sym8.prepend(sym8span);
// sym8span.textContent = '8'

// let sym8span1 = document.createElement('span');
// sym8span1.className = 'on';
// sym8.prepend(sym8span1);
// sym8span1.textContent = '*';

// let sym9 = document.createElement('div');
// sym9.className = 'symbol';
// first.append(sym9)

// let sym9span = document.createElement('span');
// sym9span.className = 'off';
// sym9.prepend(sym9span);
// sym9span.textContent = '9'

// let sym9span1 = document.createElement('span');
// sym9span1.className = 'on';
// sym9.prepend(sym9span1);
// sym9span1.textContent = '(';

// let sym0 = document.createElement('div');
// sym0.className = 'symbol';
// first.append(sym0)

// let sym0span = document.createElement('span');
// sym0span.className = 'off';
// sym0.prepend(sym0span);
// sym0span.textContent = '0'

// let sym0span1 = document.createElement('span');
// sym0span1.className = 'on';
// sym0.prepend(sym0span1);
// sym0span1.textContent = ')';

// let sym11 = document.createElement('div');
// sym11.className = 'symbol';
// first.append(sym11)

// let sym11span = document.createElement('span');
// sym11span.className = 'off';
// sym11.prepend(sym11span);
// sym11span.textContent = '-'

// let sym11span1 = document.createElement('span');
// sym11span1.className = 'on';
// sym11.prepend(sym11span1);
// sym11span1.textContent = '_';

// let sym12 = document.createElement('div');
// sym12.className = 'symbol';
// first.append(sym12)

// let sym12span = document.createElement('span');
// sym12span.className = 'off';
// sym12.prepend(sym12span);
// sym12span.textContent = '='

// let sym12span1 = document.createElement('span');
// sym12span1.className = 'on';
// sym12.prepend(sym12span1);
// sym12span1.textContent = '+';

// let back = document.createElement('div');
// back.className = 'delete';
// back.textContent ='Backspace'
// first.append(back);


// (function () {for (var btns = document.getElementById ('keyboard').getElementsByTagName ('div'),
//                           j = 0, J = btns.length; j < J; j++) 
// onclick = function () {document.getElementById ('textarea').innerHTML += this.innerHTML}}) ();


let keys = document.getElementById('keyboard').getElementsByTagName('div');
let display = document.getElementById('textarea');
let clear = document.querySelector('.delete');
let backs = document.querySelector('.back')

for (let key of keys) {
  key.onclick = function () {
  display.textContent = display.textContent + key.textContent;
  }
};

clear.onclick = function () {
  display.textContent = '';
};

backs.onclick = function () {
    display.textContent = display.textContent.slice(0, -1)
}





