import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <section className="section-container">
      <button
        className="btn status-btn btn-primary"
        type="button"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
    </section>
  );
};
export default Categories;
