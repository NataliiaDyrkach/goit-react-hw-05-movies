import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import posterCard from 'images/poster.jpg'
import css from './MovieCard.module.css'

function MovieCard({ id, title, poster, voteAverage, voteCount }) {
  const location = useLocation();

     return (
    <li className={ css.Item}>
      <Link to={`/movies/${id}`} state={location }>
        <p className={ css.Title}>{title ? title : 'Movie without a title'}</p>
        <img className={ css.Image}
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : posterCard}
          alt={title}
        />
        <div className={ css.Wrapper}>
          <p className={ css.Text}>
            Vote average: <span>{voteAverage}</span>
          </p>
          <p className={ css.Text}>
            Vote count:<span> {voteCount}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}



MovieCard.protoType = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  voteAverage: PropTypes.number,
  voteCount: PropTypes.number,
};

export default MovieCard;