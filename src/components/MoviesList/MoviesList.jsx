import MovieCard from 'components/MovieCard/MovieCard';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css'

function MoviesList({ movies }) {
  return (
    <ul className={ css.List}>
      {movies.map(({ id, title, poster, voteAverage, voteCount }) => {
        return (
          <MovieCard
            key={id}
            id={id}
            title={title}
            poster={poster}
            voteAverage={voteAverage}
            voteCount={voteCount}
          />
        );
      })}
    </ul>
  );
}

MoviesList.protoType = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster: PropTypes.string,
      voteAverage: PropTypes.number,
      voteCount: PropTypes.number,
    })
  ).isRequired,
};

export default MoviesList;
