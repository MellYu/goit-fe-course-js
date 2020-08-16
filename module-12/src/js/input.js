import refs from './refs.js';
import fetchCountries from './fetchCountries.js';

export default function handleCountyInput(event) {
  const searchQuery = event.target.value;
  if (searchQuery.length === 0) {
    return;
  }
  fetchCountries(searchQuery);
}
