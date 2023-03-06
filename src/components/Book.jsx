import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBooks, getBooks } from '../redux/books/books';

const Book = ({
  title, author, category, item_id: itemId,
}) => {
  const dispatch = useDispatch();

  const handleDelete = async (itemId) => {
    await dispatch(deleteBooks(itemId));
    await dispatch(getBooks());
  };
  return (
    <article className="single-book">
      <div className="card">
        <div className="card-header">
          <h5>{category}</h5>
        </div>
        <div className="card-body">
          <h4 className="book-title">{title}</h4>
          <p>{author}</p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn">
            comments
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => handleDelete(itemId)}
          >
            remove
          </button>
          <button type="button" className="btn">
            edit
          </button>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar" />
        <div className="progress-info">
          <h4>64%</h4>
          <p> completed</p>
        </div>
      </div>
      <div className="chapter">
        <p className="current-chapter-title"> Current Chapter</p>
        <p className="current-chapter"> Chapter 1</p>
        <button type="button" className="btn btn-primary">
          update progress
        </button>
      </div>
    </article>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default Book;
