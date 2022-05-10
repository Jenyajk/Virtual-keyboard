import { lette } from './alert';
import styles from '../assets/styles/style.css';


let html = `<div id="container">
<textarea id="textarea" rows="6" cols="60"></textarea>
<div class="keyboard">
    <button class="symbol but" data-key="Backquote">\`</button>
    <button class="symbol but" data-key="Digit1" code="Digit1">1</button>
    <button class="symbol but" data-key="Digit2">2</button>
    <button class="symbol but" data-key="Digit3">3</button>
    <button class="symbol but" data-key="Digit4">4</button>
    <button class="symbol but" data-key="Digit5">5</button>
    <button class="symbol but" data-key="Digit6">6</button>
    <button class="symbol but" data-key="Digit7">7</button>
    <button class="symbol but" data-key="Digit8">8</button>
    <button class="symbol but" data-key="Digit9">9</button>
    <button class="symbol but" data-key="Digit0">0</button>
    <button class="symbol but" data-key="Minus">-</button>
    <button class="symbol but" data-key="Equal">=</button>
    <button class="back" data-key="Backspace">Backspace</button>
    <button class="tab" data-key="Tab">Tab</button>
    <button class="letter but" data-key="KeyQ">q</button>
    <button class="letter but" data-key="KeyW">w</button>
    <button class="letter but" data-key="KeyE">e</button>
    <button class="letter but" data-key="KeyR">r</button>
    <button class="letter but" data-key="KeyT">t</button>
    <button class="letter but" data-key="KeyY">y</button>
    <button class="letter but" data-key="KeyU">u</button>
    <button class="letter but" data-key="KeyI">i</button>
    <button class="letter but" data-key="KeyO">o</button>
    <button class="letter but"data-key="KeyP">p</button>
    <button class="symbol but" data-key="BracketLeft">[</button>
    <button class="symbol but" data-key="BracketRight">]</button>
    <button class="symbol but" data-key="Backslash">\\</button>
    <button class="delete lastitem" data-key="Delete">DEL</button>
    <button class="capslock" data-key="CapsLock">Caps lock</button>
    <button class="letter but" data-key="KeyA" >a</button>
    <button class="letter but" data-key="KeyS">s</button>
    <button class="letter but" data-key="KeyD">d</button>
    <button class="letter but" data-key="KeyF">f</button>
    <button class="letter but" data-key="KeyG">g</button>
    <button class="letter but" data-key="KeyH">h</button>
    <button class="letter but" data-key="KeyJ">j</button>
    <button class="letter but" data-key="KeyK">k</button>
    <button class="letter but" data-key="KeyL">l</button>
    <button class="symbol but" data-key="Semicolon">;</button>
    <button class="symbol but" data-key="Quote">'</button>
    <button class="return lastitem" data-key="Enter">ENTER</button>
    <button class="left-shift" data-key="ShiftLeft">Shift</button>
    <button class="letter but" data-key="KeyZ">z</button>
    <button class="letter but" data-key="KeyX">x</button>
    <button class="letter but" data-key="KeyC">c</button>
    <button class="letter but" data-key="KeyV">v</button>
    <button class="letter but" data-key="KeyB">b</button>
    <button class="letter but" data-key="KeyN">n</button>
    <button class="letter but" data-key="KeyM">m</button>
    <button class="symbol but" data-key="NumpadDecimal">,</button>
    <button class="symbol but" data-key="Period">.</button>
    <button class="symbol but" data-key="Slash">/</button>
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
const letter = document.querySelectorAll('.letter');
const capslock1 = document.querySelector('.capslock');
const number = document.querySelectorAll('.symbol');
const tab = document.querySelector('.tab');
const space = document.querySelector('.space');
const shift = document.querySelector('.left-shift');
let textarea = document.getElementById('textarea');
let button = document.querySelectorAll('.button');
const enter = document.querySelector('.return');
const backspace = document.querySelector('.back');
const del = document.querySelector('.delete');
const but = document.querySelectorAll('.but');

let s2 = document.createElement('section');
s2.className = 'section2';
document.body.append(s2);

let info = document.createElement('div');
info.className = 'help';
info.textContent = 'The keyboard was created in the Windows operating system. To switch the language combination: ctrl + alt'
s2.prepend(info);

body.addEventListener('mousedown', (e) => {
    e.preventDefault();
    if (e.target === capslock1) {
        if (capslock1.classList.toggle('active')) {
            letter.forEach((el) => {
                el.textContent = el.textContent.toUpperCase()
            });
        }
        else {
            letter.forEach((el) => {
                el.textContent = el.textContent.toLowerCase()
            })
        };
    }

    if (e.target === backspace) {
        backspace.classList.toggle('active');
        textarea.value = textarea.value.substring(0, textarea.value.length - 1)
    }
    if (e.target === del) {
        del.classList.toggle('active');
        textarea.value = textarea.value.substring(0, textarea.value.length + 1)
    }
    if (e.target === space) {
        space.classList.toggle('active');
        textarea.value += ' '
    }
    if (e.target === enter) {
        enter.classList.toggle('active');
        textarea.value += '\n'
    }
    if (e.target === tab) {
        tab.classList.toggle('active');
        textarea.value += '    '
    }
    letter.forEach(item => {
        if (e.target.innerHTML === item.innerHTML) {
            item.classList.add('active')
            textarea.value = textarea.value += item.innerHTML
        }
    });
    number.forEach(item => {
        if (e.target.innerHTML === item.innerHTML) {
            item.classList.add('active')
            textarea.value = textarea.value += item.innerHTML
        }
    });
})
body.addEventListener('mouseup', (e) => {
    e.preventDefault();
    if (e.target === backspace) {
        backspace.classList.remove('active');
    }
    if (e.target === del) {
        del.classList.remove('active');
    }
    if (e.target === space) {
        space.classList.remove('active');
    }
    if (e.target === enter) {
        enter.classList.remove('active');
    }
    if (e.target === tab) {
        tab.classList.remove('active');
    }
    letter.forEach(item => {
        if (e.target.innerHTML === item.innerHTML) {
            item.classList.remove('active')
        }
    });
    number.forEach(item => {
        if (e.target.innerHTML === item.innerHTML) {
            item.classList.remove('active')
        }
    });
})

body.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.code === 'ControlLeft') {
        document.querySelector('.left-ctrl').classList.add('active');
    }
    if (e.code === 'AltLeft') {
        document.querySelector('.left-alt').classList.add('active');
    }
    if (e.code === 'AltRight') {
        document.querySelector('.right-alt').classList.add('active');
    }
    if (e.key === 'Tab') {
        textarea.value += '    ';
        tab.classList.toggle('active');
    }
    if (e.key === 'Enter') {
        enter.classList.toggle('active');
        textarea.value += '\n'
    }
    if (e.key === 'CapsLock') {
        if (capslock1.classList.toggle('active')) {
            letter.forEach((el) => {
                el.textContent = el.textContent.toUpperCase()
            });
        }
        else {
            letter.forEach((el) => {
                el.textContent = el.textContent.toLowerCase()
            })
        };
    }
    if (e.key === 'Backspace') {
        textarea.value = textarea.value.substring(0, textarea.value.length - 1)
        backspace.classList.add('active')
    }
    document.querySelectorAll('.letter').forEach(item => {
        if (item.dataset.key === e.code) {
            item.classList.add('active')
            textarea.value = textarea.value += e.key
        }

    });
});

body.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.code === 'ControlLeft') {
        document.querySelector('.left-ctrl').classList.remove('active');
    }
    if (e.code === 'AltLeft') {
        document.querySelector('.left-alt').classList.remove('active');
    }
    if (e.code === 'AltRight') {
        document.querySelector('.right-alt').classList.remove('active');
    }
    if (e.key === 'Tab') {
        tab.classList.remove('active');
    }
    if (e.key === 'Enter') {
        enter.classList.remove('active');
    }
    if (e.key === 'Backspace') {
        backspace.classList.remove('active')
    }
    document.querySelectorAll('.letter').forEach(item => {
        if (item.dataset.key === e.code) {
            item.classList.remove('active')
        }

    });
});

body.addEventListener("keydown", (e) => {
    e.preventDefault();
    document.querySelectorAll('.symbol').forEach(item => {
        if (item.dataset.key === e.code) {
            item.classList.add('active')
            textarea.value = textarea.value += e.key
        }

    });
});
body.addEventListener("keyup", (e) => {
    e.preventDefault();
    document.querySelectorAll('.symbol').forEach(item => {
        if (item.dataset.key === e.code) {
            item.classList.remove('active')
        }
    });
});


body.addEventListener("click", (e) => {
    const target = e.target;
    button.forEach(item => {
        if (item == target) {
            textarea.value = textarea.value += item.textContent
        }
    });
});

function runOnKeys(func, ...codes) {
    let pressed = new Set();
    body.addEventListener('keydown', function (event) {
        pressed.add(event.code);
        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();
        func();
    });

    body.addEventListener('keyup', function (event) {
        pressed.delete(event.code);
    });
}
runOnKeys(
    () => {
        lette.forEach(key => {
            let lt = key.code;
            but.forEach(item => {
                let it = item.dataset.key
                if (it === lt) {
                    if (item.textContent === key.ru) {
                        item.textContent = key.eng
                    } else {
                        item.textContent = key.ru
                    }
                }
            })
        })
    },
    "ControlLeft",
    "AltLeft"
);

shift.addEventListener('mousedown', (e) => {
    e.preventDefault();
    if (e.target === shift) {
        shift.classList.toggle('active');
        lette.forEach(key => {
            let lt = key.code;
            number.forEach(item => {
                let it = item.dataset.key
                if (it === lt) {
                    if (item.textContent === key.ru) {
                        item.textContent = key.shift
                    } else {
                        item.textContent = key.shift
                    }
                }
            })
        })
    }
})

shift.addEventListener('mouseup', (e) => {
    e.preventDefault();
        shift.classList.remove('active');
        lette.forEach(key => {
            let lt = key.code;
            number.forEach(item => {
                let it = item.dataset.key
                if (it === lt) {
                    if (item.textContent === key.shift) {
                        item.textContent = key.eng
                    } else {
                        item.textContent = key.ru
                    }
                }
            })
        })



})
