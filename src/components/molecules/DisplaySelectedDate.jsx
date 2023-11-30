
import React from 'react';
import classes from './DisplaySelectedDate.module.css';

function DisplaySelectedDate({ selectedDate }) {
  return (
    <div>
      {selectedDate && <p>{selectedDate.toLocaleDateString('en-US')}</p>}
    </div>
  );
}

export default DisplaySelectedDate;