import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <section className="section-container">
    <h1>Error 404 Page not found</h1>
    <Link to="/" className="btn btn-primary error-btn">
      Back Home
    </Link>
  </section>
);
export default ErrorPage;
