let movies = [{
        id: 1,
        title: 'The Godfather',
        genre: 'Action',
        stock: 100,
        rate: 500
    },
    {
        id: 2,
        title: 'The Godfather 2',
        genre: 'Action',
        stock: 90,
        rate: 1500
    }, {
        id: 3,
        title: 'The Godfather 3',
        genre: 'Action',
        stock: 1100,
        rate: 2500
    },
    {
        id: 4,
        title: 'The Scent of a Woman',
        genre: 'Adventure',
        stock: 100,
        rate: 500
    }
];


export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find((movie) => {
        return movie.id === id;
    })
}