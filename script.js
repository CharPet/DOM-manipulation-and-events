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

const div = document.createElement('div');
div.style.cssText = 'border: 2px solid black; background-color: pink;';
    const h1 = document.createElement('h1');
    h1.textContent = "I'm in a div";
    div.appendChild(h1);

    const pInDiv = document.createElement('p');
    pInDiv.textContent = "ME TOO!";
    div.appendChild(pInDiv);

container.appendChild(div);


// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     alert('Hello World');
// });

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', function (e) {
//     console.log(e.target);
//   });

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
e.target.style.background = 'blue';
  });  
