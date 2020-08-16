import './styles.css';
import './js/fetchCountries.js';
import './js/input.js';
import './js/pnotify.js';
import handleCountyInput from './js/input.js';
import refs from './js/refs.js';
import debounce from 'lodash.debounce';


refs.inputRef.addEventListener('input', debounce(handleCountyInput, 500));