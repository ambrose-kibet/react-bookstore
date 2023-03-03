import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SharedLayout = () => (
  <main className="main">
    <Navbar />
    <Outlet />
  </main>
);
export default SharedLayout;
