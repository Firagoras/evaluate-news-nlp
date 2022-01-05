import './styles/base.scss';
import { postData } from './js/formHandler.js';

const form = document.getElementById('form');

form.addEventListener('submit', postData);