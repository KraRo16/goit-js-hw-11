import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const axios = require('axios').default;

const searchQuery = document.querySelector('input[name="searchQuery"]');
const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');
const gallerySelector = document.querySelector('.gallery');

//pixabayAPI

const pixabayAPI = {
  baseUrl: 'https://pixabay.com/api/',
  key: '30805136-5107e54db1ae50bd847caa337',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  order: 'popular',
  page: '1',
  per_page: '40',
};

//let variables

let searchQueryResult = '';
let q = '';
let pageN = 1;
let gallery = new SimpleLightbox('.gallery a', {
  /* options */ enableKeyboard: true,
});
