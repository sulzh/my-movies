import React from 'react';
import { Link } from 'react-router-dom';

// Constants
import { POSTER_URL } from '../../utils/constants';
// Models
import { Movie } from '../../utils/models';
// Components
import Like from '../Like/Like';
// Styles
import './styles.scss';

const MovieCard: React.FC<Movie> = (props) => {
  const { id, poster_path, original_title, release_date, vote_average } = props;

  return (
    <div className="movie-card">
      <div className="movie-card__container">
        {poster_path ? (
          <img
            className="movie-card__poster"
            src={`${POSTER_URL}${poster_path}`}
            alt={`${original_title} poster`}
          />
        ) : (
          <div className="movie-card__no-poster" />
        )}
        <div className="movie-card__info">
          <Link
            className="movie-card__link"
            to={{ pathname: '/movie', search: `id=${id}` }}
          >
            <h2 className="movie-card__title">{original_title}</h2>
          </Link>
          <div className="movie-card__block">
            <div className="movie-card__wrap">
              <span className="movie-card__rate">{`Rate: ${vote_average}`}</span>
              <span className="movie-card__date">{`Date: ${release_date}`}</span>
            </div>
            <Like id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieCard);
