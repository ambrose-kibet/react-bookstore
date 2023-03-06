import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getBooks } from '../redux/books/books';

const BoksPage = () => {
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <section className="section-container">
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          item_id={book.item_id}
          category={book.category}
        />
      ))}
      <Form />
    </section>
  );
};
export default BoksPage;
