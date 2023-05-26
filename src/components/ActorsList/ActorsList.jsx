import PropTypes from 'prop-types';
import noActors from 'images/gangster-actor.png';
import css from './ActorsList.module.css'

function ActorsList({ actors }) {
return (
 
      <ul className={css.List}>
        {actors.map(({ id, name, photo }) => {
          return (
            <li className={css.Item} key={id}>
              <div className={css.PhotoWrapper}>
                <img className={css.Photo}
                  src={
                    photo ? `https://image.tmdb.org/t/p/w500/${photo}` : noActors
                  }
                  alt={name}
                />
              </div>
              <p className={css.Name}>{name}</p>
            </li>
          );
        })}
      </ul>
   
  );
}

ActorsList.protoType = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      photo: PropTypes.string,
    }),
  ).isRequired,
};

export default ActorsList;