const getData = (url) => fetch(url)
.then((res) => res.json())
.then(json => {
    if (json.Search) return json.Search;
    throw Error('Серевер вернул неправелниый объект');
});

let searchLast = null;

inputSearch.addEventListener('keyup', (e) => {
delay(() => {
    const searchString = e.target.value;

    if (searchString && searchString.length > 3 && searchString !== searchLast) {

        if(!triggerMode) clearMoviesMarkup();

    getData(`https://www.omdbapi.com/?s=${searchString}&apikey=7101093e&`)
    .then((movies) => movies.forEach((movie) => addMovieToList(movie)))
    .catch((err) => console.log(err));
    }
     searchLast = searchString;

}, 1000);
});


// let search1 = 'Iron man';
// let search2 = 'Superman';
// let search3 = 'Batman';


// let ironman = getData(`http://www.omdbapi.com/?s=${search1}&apikey=7101093e&`);
// let superman = getData(`http://www.omdbapi.com/?s=${search2}&apikey=7101093e&`);
// let batman = getData(`http://www.omdbapi.com/?s=${search3}&apikey=7101093e&`);


// Promise.all([ironman, superman, batman])
// .then((res) => res.forEach(
//     (movies) => movies.forEach((movie) => addMovieToList(movie))
// ))
// .catch((err) => console.log(err));

