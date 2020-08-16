import refs from "./refs";
import countriesList from './../template/countriesList.hbs';
import aloneCountry from './../template/aloneCountry.hbs';
import myError from './pnotify.js';

const baseUrl = 'https://restcountries.eu/rest/v2';

export default function fetchCountries(searchQuery){
  
  return fetch(baseUrl + `/name/${searchQuery}`)
  .then(response => response.json())
  .then(countries => checkingCountries(countries) )
  .catch(err => err)
};

function showCountries(countries){
  const countriesListItem = countriesList(countries);
  // console.log(countriesListItem);
  return refs.countriesListRef.insertAdjacentHTML('beforeend', countriesListItem);
}

function showAloneCountry(countries){
  const countryItem = aloneCountry(...countries);
  // console.log(countryItem);
  return refs.countryContainerRef.insertAdjacentHTML('beforeend', countryItem);
}

function checkingCountries(countries){
  if(countries.length === 1){
    showAloneCountry(countries)
  }else if(countries.length > 1  && countries.length <= 10){
    showCountries(countries)
  }else {
    // console.log('Put correct country name, please!');
    myError();
  }
}