import refs from './refs.js';
import imageCard from './../template/image-card.hbs';


export default function getImages(search, page) {
  const baseURL = 'https://pixabay.com/api/';
  const keyApi = '17975511-a1a75a89facdad63fcb9c5ee1';
  const params = `?image_type=photo&orientation=horizontal&q=${search}&page=${page}&per_page=12&key=${keyApi}`;

  function showImages(images) {
    const card = imageCard(images);
    refs.galleryRef.insertAdjacentHTML('beforeend', card);
  }

  return fetch(baseURL + params)
    .then(resp => resp.json())
    .then(galleryImg => {
      return showImages(galleryImg.hits);
    })
    .catch(err => err);
};