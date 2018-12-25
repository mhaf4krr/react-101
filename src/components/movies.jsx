import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    console.log(movie);
    let movies = this.state.movies.filter(film => {
      return film.id !== movie.id;
    });

    this.setState({ movies });
    /* the above statement is same as this.setState({movies:movies}) */
  };
  render() {
    const { length: count } = this.state.movies;
    /* assigns the length property of movies to variable count */
    if (count === 0) return <p> There are no Movies </p>;
    return (
      <React.Fragment>
        <p>There are {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Title</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {/* we use map method for looping over the movies */
            this.state.movies.map(movie => (
              <tr scope="row" key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.stock}</td>
                <td>{movie.rate}</td>
                <td>
                  <button
                    /* since we need to pass an argument hence onClick needs to have a arrow function */
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
