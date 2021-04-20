'use strict';

const  domElement  = function (selector, height, width, bg, fontSize, text) {
      this.selector = selector;
      this.height = height;
      this.width = width;
      this.bg =  bg;
      this.fontSize = fontSize;
      this.text = text;
      
  };

  domElement.prototype.createEl = function () {
      let body = document.querySelector('body');
      let newElem;
          if (this.selector.startsWith('.')) {
            newElem = document.createElement('div');
            newElem.classList = this.selector;
            body.appendChild(newElem);
          
      } else if (this.selector.startsWith('#')) {
             newElem = document.createElement('p');
             newElem.id = this.selector;
             body.appendChild(newElem);
         }
     
         newElem.style.cssText = `
             height: ${this.height}px;
             width: ${this.width}px;
             background: ${this.bg};
             font-size: ${this.fontSize}px;
         `;
         newElem.innerText = this.text;
     };

  
  let newDiv = new domElement('.block', 250, 255, 'green', 45, prompt('Введите любой текст'));
  let newParag = new domElement('#best', 130, 220, 'yellow', 12, prompt('Введите любой текст'));
  
  console.log('newElDiv: ', newDiv);
  console.log('newElParagraph: ', newParag);
  newDiv.createEl();
  newParag.createEl();
     
  