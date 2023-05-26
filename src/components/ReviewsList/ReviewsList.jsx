import PropTypes from 'prop-types';
import css from './ReviewsList.module.css'

function ReviewsList({ reviews }) {
    
return (
    <div className='Container'>
      <ul className={css.List}>
        {reviews.map(({ id, author, text }) => {
          return (
            <li className={css.Item} key={id}>
              <h2 className={css.Title}>{author}</h2>
              <p className={css.Text}>{text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ReviewsList.protoType = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default ReviewsList;