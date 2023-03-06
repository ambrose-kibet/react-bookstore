import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const BoksPage = () => {
  const { books } = useSelector((store) => store.books);
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
