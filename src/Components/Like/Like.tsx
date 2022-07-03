import React, { useMemo, useCallback } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

// Store
import { useAppDispatch, useAppSelector } from '../../app/store';
import {
  deleteMovie,
  setMovie,
} from '../../pages/Favorites/store/favoritesSlice';
import { getFavoriteMoviesIdsSelector } from '../../pages/Favorites/store/selectors';
// Styles
import './styles.scss';

type LikeTypes = {
  id: number;
};

const Like: React.FC<LikeTypes> = (props) => {
  const { id } = props;
  const dispatch = useAppDispatch();
  const favoriteMovies = useAppSelector(getFavoriteMoviesIdsSelector);
  const isLiked = useMemo(
    () => favoriteMovies.includes(`${id}`),
    [favoriteMovies, id]
  );

  const toggleLike = useCallback(() => {
    if (isLiked) {
      dispatch(deleteMovie(id));
    } else {
      dispatch(setMovie(id));
    }
  }, [id, isLiked, dispatch]);

  return (
    <button className="like" onClick={toggleLike}>
      {isLiked ? (
        <FaHeart size={24} color="#f44336" />
      ) : (
        <FaRegHeart size={24} color="#0006f5" />
      )}
    </button>
  );
};

export default React.memo(Like);
