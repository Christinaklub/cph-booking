import React from 'react';
import classes from './SelectDate.module.css';
import useMyContext from '@/context/my-context';

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
