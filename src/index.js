import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './redux/configureStore'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

store.dispatch({
  type: "bookAdded",
  payload: {
    description: "Book1"
  }
});

console.log(store.getState());