import './styles/base.scss'

function component() {
  const element = document.createElement('div');


  element.innerHTML = 'Hello webpack form innerHTML Blue';

  return element;
}

document.body.appendChild(component());

console.log('Hello, Webpack!');

// alert('Hello, webpack!');