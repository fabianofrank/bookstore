import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import BookDisplay from './bookdisplay';
import BookCategories from './bookcategories';
import Navbar from '../components/navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BookDisplay />} />
      <Route exact path="/categories" element={<BookCategories />} />
    </Routes>
  </Router>
);

export default App;
