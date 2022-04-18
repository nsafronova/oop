'use strict';
const todoControl = document.querySelector('.todo-control');
const input = document.querySelector('.header-input');

const DomElement = function (selector) {
   this.selector = selector,
      this.height,
      this.width,
      this.fontSize,
      this.background,
      this.createElement = function () {

         if (this.selector.charAt(0) === '.') {
            let elem = document.createElement('div');
            elem.className = input.value.slice(1);
            elem.innerHTML = input.value.slice(1);
            document.body.append(elem);
            elem.style.cssText = ' font-size: 20px; background: #7B68EE;';

         } else if (this.selector.charAt(0) === '#') {
            const p = document.createElement('p');
            p.id = input.value.slice(1);
            document.body.append(p);
            p.style.cssText = 'font-size: 40px; background: #98FB98;';
            document.querySelector('p').innerHTML = input.value.slice(1);

         } else {
            console.log('Неверный символ!');
         }
      };
};

todoControl.addEventListener('submit', function (event) {
   event.preventDefault();
   const text1 = new DomElement(input.value);

   text1.createElement();
});