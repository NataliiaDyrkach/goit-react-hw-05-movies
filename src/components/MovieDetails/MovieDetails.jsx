import PropTypes from 'prop-types';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import posterCard from 'images/poster.jpg'
import css from './MovieDetails.module.css'

const MovieDetails = ({ movieInfo }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const subLocation = location.state;

  const {
    title,
    genres,
    description,
    poster,
    releaseDate,
    voteAverage,
    voteCount,
  } = movieInfo;

  const onGoBack = () => navigate(location?.state ?? '/');

  return (
    <div className={css.Contaier}>
      <button className={css.Button} type="button" onClick={onGoBack}>
                <span className={css.Label}>Go back</span>
      </button>

      <div className={css.MainWrapper}>
        <img className={css.Poster}
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : posterCard}
          alt={title}
        />
        <div>
          <div className={css.TitleWrapper}>
            <h2 className={css.Title}>{title}</h2>
            <p className={css.ReleaseDate}>{releaseDate}</p>
          </div>
          <h3>Genres</h3>
          <ul className={css.GenresList}>
            {genres &&
              genres.map(({ name, id }) => (
                <li className={css.GenresItem} key={id}>{name}</li>
              ))}
          </ul>
          <h3>Overview</h3>
          <p className={css.Description}>{description}</p>
          <div>
            <p className={css.VoteAverage}>
              Vote average: <span className={css.Value}>{voteAverage}</span>
            </p>
            <p className={css.VoteCount}>
              Vote count: <span className={css.Value}>{voteCount}</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className={css.AdditionalTitle}>Additional Information</p>
        <ul>
          <li className={css.NavigationsItem}>
            <NavLink className={css.Link} to="cast" state= {subLocation }>
               Cast
            </NavLink>
          </li>
          <li className={css.NavigationsItem}>
            <NavLink className={css.Link} to="reviews" state={ subLocation }>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

MovieDetails.protoType = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
    description: PropTypes.string,
    poster: PropTypes.string,
    releaseDate: PropTypes.string,
    voteAverage: PropTypes.number,
    voteCount: PropTypes.number,
  }),
};

export default MovieDetails;
