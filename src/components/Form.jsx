import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [inputData, setInputData] = useState({
    title: '',
    author: '',
    item_id: '',
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.title || !inputData.author) return;
    const tempId = new Date().getTime();
    inputData.item_id = tempId.toString();
    dispatch(addBook(inputData));
    setInputData({
      title: '',
      author: '',
      item_id: '',
    });
  };
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4 className="form-title">ADD NEW BOOK</h4>
      <div className="form-control">
        <input
          type="text"
          placeholder="Book title"
          className="form-input"
          name="title"
          value={inputData.title}
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          placeholder="Author"
          className="form-input"
          name="author"
          value={inputData.author}
          onChange={(e) => handleChange(e)}
        />

        <button type="submit" className="btn btn-primary">
          ADD BOOK
        </button>
      </div>
    </form>
  );
};
export default Form;
