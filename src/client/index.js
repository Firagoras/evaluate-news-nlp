import './styles/base.scss';
import { handleSubmit } from './js/formHandler.js';

const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);