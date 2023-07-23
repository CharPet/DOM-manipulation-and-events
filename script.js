const container = document.querySelector('#container');

const p = document.createElement('p');
// p.classList.add('content');
p.style.cssText = 'color: red;';
p.textContent = "Hey I'm red!";

container.appendChild(p);
