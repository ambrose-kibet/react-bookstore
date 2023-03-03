import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  BooksPage, Categories, ErrorPage, SharedLayout,
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<BooksPage />} />
          <Route path="categories" element={<Categories />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
