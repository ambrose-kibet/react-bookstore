import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <nav className="nav">
    <ul className="links-container">
      <li>
        <h2 className="nav-title">Bookstore CMS</h2>
      </li>
      <li>
        <NavLink
          className="nav-link"
          to="/"
          style={({ isActive }) => (isActive
            ? { color: 'black', fontWeight: 'bold' }
            : { color: 'grey' })}
        >
          Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav-link"
          to="/categories"
          style={({ isActive }) => (isActive
            ? { color: 'black', fontWeight: 'bold' }
            : { color: 'grey' })}
        >
          Categories
        </NavLink>
      </li>
    </ul>
    <button type="button" className="user">
      <FaUser />
    </button>
  </nav>
);
export default Navbar;
