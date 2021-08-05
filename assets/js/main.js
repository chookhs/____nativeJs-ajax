let movieList = null;
let inputSearch = null;
let triggerMode = false;

const createStyle = () => {
  const headStyle = document.createElement('style');

    headStyle.innerHTML = `
    * {
    box-sizing: border-box;
  }
 
  body {
    margin: 0;
  }
 
  .container {
    padding: 20px;
  }
 
  .movies {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
 
  .movie {
    display: flex;
    justify-content: center;
    align-content: center;
  }
 
 .movie__image {
   width: 100%;
   object-fit: cover;
 }
 .searh {
  margin-bottom: 30px;
}

.search__label-input {
margin-bottom: 7px;
display: block;
}

.search__input {
  padding: 10px 15px;
  width: 400px;
  display: block;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin-bottom: 10px;
}

.search__label-input {
  font-weight: bold;
  font-style: 12px;
  letter-spacing: 7px;
  display: block;
  margin-top: -17px;
  margin-left: 25px;
}

    `;
    document.querySelector('head').appendChild(headStyle);

};

const setAttribute = (el, attrs) => {
for (let key in attrs) el.setAttribute(key, attrs[key]);
};

const triggerModeHandler = () => triggerMode = !triggerMode;


const createSearchBox = (container) => {

  const searchBox = document.createElement('div');
  const input = document.createElement('input');
  const labelForInput = document.createElement('label');
  const checkbox = document.createElement('input');
  const labelForCheckbox = document.createElement('label');

  searchBox.setAttribute('class', 'search');

  setAttribute(input, {
    class: 'search__input',
    id: 'search',
    placeholder: 'Начните воодить текст',
    type: 'text'
  });

  labelForInput.innerText = 'Поиск фильмов'

  setAttribute(labelForInput, {
    class: 'search__label-input',
    for: 'search'
  })

  setAttribute(checkbox, {
    class: 'search__checkbox',
    id: 'checkbox',
    type: 'checkbox'
  });
  checkbox.addEventListener('click', triggerModeHandler);

  setAttribute(labelForCheckbox, {
    class: 'search__label-checkbox',
    for: 'checkbox'
  })

labelForCheckbox.innerText = 'Добавить фильм в список'


searchBox.append(labelForInput, input, labelForCheckbox, checkbox);




  container.appendChild(searchBox);
};

const createHeader = (container) => {
   const header = document.createElement('h1');

   header.innerText = 'Приложение для поиска фильмов';

   container.appendChild(header);
};
 
const createMarkup = () => {
  const container = document.createElement('div');

  container.classList.add('container');

  createHeader(container);
  createSearchBox(container);

  const movies = document.createElement('div');

  movies.classList.add('movies');

  container.appendChild(movies);

  document.querySelector('body').prepend(container);

  movieList = document.querySelector('.movies');
  inputSearch = document.querySelector('#search');
}

const addMovieToList = (movie) => {
  const item = document.createElement('div');
  const img = document.createElement('img');

  img.src = movie.Poster;
  img.classList.add('movie__image');

  item.classList.add('movie');
  item.appendChild(img);
  movieList.appendChild(item);
};

const clearMoviesMarkup = () => movieList && (movieList.innerHTML = '');

const delay = (() => {
let timer = 0;

return (callback, ms) => {
  clearTimeout(timer);
  timer = setInterval(callback, ms);
};
})();

createStyle();
createMarkup();