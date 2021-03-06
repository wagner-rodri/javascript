const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');


const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');
        
    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter 
    ? movies 
    : movies.filter(movie => movie.info.title.includes(filter));
    
    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        const {info,...otherProps} = movie;
        console.log(otherProps);
        // const {title: movieTitle} = info;
        // const {getForamattedTitle} = movie;
        let text = movie.getForamattedTitle() + ' - ';
        for (const key in info) {
            if (key !== 'title' && key !== '_title') {
                text += `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl)
    });
};

const AddMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return
    }

    const newMovie = {
        info: {
            set title(val) {
                if (val.trim(0 === '')) {
                    this._title = 'DEFAULT';
                }
                this._title = val;    
            },
            get title() {
                return this._title;
            },
            [extraName]: extraValue
        },
        id: Math.random(),
        getForamattedTitle() {
            return this.info.title.toUpperCase();
        }
    };

    newMovie.info.title = title

    movies.push(newMovie);
    renderMovies();
}


const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', AddMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);