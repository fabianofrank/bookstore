import React from 'react';
import './App.css';

import BookAdd from './bookadd';
import BookUhelf from './bookunits';
import Navbar from './Navbar';

const App = () => (
  <Router>
    <div id="App">
      <Navbar />
      <Routes>
        <Route path="/categories" />
        <Route path="/" element={< />} />
      </Routes>
    </div>
  </Router>
);

export default App;