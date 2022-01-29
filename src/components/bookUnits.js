/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import circle from '../circle.png';

const BookUnits = ({ item_id, title, category }) => {
  const dispatch = useDispatch();

  const removeHandler = (e) => {
    dispatch(removeBook(e.target.parentElement.parentElement.id));
  };

  return (
    <div className="unit">
      <div id={item_id} className="unit-main">
        <p className="unit-category">{category}</p>
        <p className="unit-title">{title}</p>
        <p className="unit-author">Author</p>
        <div className="remove-div">
          <button className="remove-bttn" type="button">Comments</button>
          <button className="remove-bttn" type="button" onClick={removeHandler}>Remove</button>
          <button className="remove-bttn" type="button">Edit</button>
        </div>
      </div>
      <div className="unit-graph">
        <div className="graph">
          <img className="circle" src={circle} alt="% of reading completed" />
          <p className="percentages">
            {Math.floor(Math.random() * 100)}
            %
            <span>Completed</span>
          </p>
        </div>
        <div className="chapter-div">
          <p className="current">CURRENT CHAPTER</p>
          <p className="chapter">
            Chapter #
            {Math.floor(Math.random() * 10)}
          </p>
          <button className="update-bttn" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

BookUnits.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookUnits;
