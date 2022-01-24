import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import DisplayShelf from './bookshelf';
import DisplayCategories from './bookcategories';
import Navbar from '../components/navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<DisplayShelf />} />
      <Route exact path="/categories" element={<DisplayCategories />} />
    </Routes>
  </Router>
);

export default App;
