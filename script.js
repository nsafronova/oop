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
            elem.classList.add(input.value.slice(1));
            elem.style.cssText = 'height: 50px; width: 50px; font-size: 20px; background: blue';
            console.log(elem);
            document.querySelector('div').innerHTML = '<div>' + input.value.slice(1) + '</div>';

         } else if (this.selector.charAt(0) === '#') {
            const p = document.createElement('p');
            p.id = input.value.slice(1);
            p.style.color = 'height: 50px; width: 50px; font-size: 20px; background: blue;';
            console.log(p);
            document.querySelector('p').innerHTML = '<p>' + input.value.slice(1) + '</p>';

         } else {
            console.log('Неверный символ!');
         }
      };
};

todoControl.addEventListener('submit', function (event) {
   event.preventDefault();
   console.log(input.value);
   const text1 = new DomElement(input.value);

   console.log(text1);

   text1.createElement();
});