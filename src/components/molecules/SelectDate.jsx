

import React from 'react';
import useMyContext from '@/context/my-context';
import classes from './SelectDate.module.css';

function SelectDate() {
    const { campus, stilling, lokale, tidspunkt } = useMyContext(); 
  return (
    <div className={classes.slideContent}>
      <div className={classes.orangeSquare}>
        <p>Campus: {campus}</p>
        <p>Stilling: {stilling}</p>
        <p>Lokale Type: {lokale}</p>
        <p>Tidsinterval: {tidspunkt}</p>
      </div>
    </div>
  );
}

export default SelectDate;
