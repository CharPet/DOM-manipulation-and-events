const container = document.querySelector('#container');

const p = document.createElement('p');
// p.classList.add('content');
p.style.cssText = 'color: red;';
p.textContent = "Hey I'm red!";

container.appendChild(p);


const h3 = document.createElement('h3');
h3.style.cssText = 'color: blue;';
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);