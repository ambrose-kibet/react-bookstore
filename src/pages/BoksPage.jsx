import Book from '../components/Book';
import Form from '../components/Form';

const BoksPage = () => (
  <section className="section-container">
    <Book title="title" author="author" />
    <Book title="another book" author=" another author" />
    <Book title="some book" author=" some author" />
    <Form />
  </section>
);
export default BoksPage;
