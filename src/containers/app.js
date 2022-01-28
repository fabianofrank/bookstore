import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { loadBook } from '../redux/books/books';
import BookDisplay from './bookDisplay';
import BookCategories from './bookCategories';
import Navbar from '../components/navbar';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBook());
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookDisplay />} />
        <Route exact path="/categories" element={<BookCategories />} />
      </Routes>
    </Router>
  );
};
export default App;
