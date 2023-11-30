import { useState } from 'react';
import { DatePicker, DatePickerProps } from '@mantine/dates';
import React from 'react';
import useMyContext from '@/context/my-context';
import classes from './SelectDate.module.css';
import '@mantine/dates/styles.css';
import DisplaySelectedDate from './DisplaySelectedDate';
import { useDate } from '@/context/date-context';



function SelectDate(props) {
    const contextValue = useMyContext();

    const { campus, stilling, lokale, tidspunkt, } = useMyContext(); 

    const {selectedDate, setSelectedDate} = useDate();

    const handleChangeDate = (date) => {
      setSelectedDate(date);
      console.log('Selected Date:', date);
    };

    function handleNext(){
        console.log("du har trykket på next")
        props.x.scrollNext();
      }
    function handleBack(){
        console.log("du har trykket på next")
        props.x.scrollPrev();
      }


  return (
    <div className={classes.slideContent}>
      <div className={classes.orangeSquare}>
        <div className={classes.leftInfo}>
          <label htmlFor="campus" className={classes.label}>
            <span className={classes.required}>*</span>Campus:
          </label>
          <select id='campus' className={classes.dropdown} disabled>
            <option value="" hidden>{campus}</option>
          </select>
          <label htmlFor="stilling" className={classes.label}>
            <span className={classes.required}>*</span>Stilling:
          </label>
          <select id='stilling' className={classes.dropdown} disabled>
            <option value="" hidden>{stilling}</option>
          </select>
          <label htmlFor="lokale" className={classes.label}>
            <span className={classes.required}></span>Lokale:
          </label>
          <select id='lokale' className={classes.dropdown} disabled>
            <option value="" hidden>{lokale}</option>
          </select>
          <label htmlFor="tidspunkt" className={classes.label}>
            <span className={classes.required}></span>Tidspunkt:
          </label>
          <select id='tidspunkt' className={classes.dropdown} disabled>
            <option value="" hidden>{tidspunkt}</option>
          </select>
          <label htmlFor="dato" className={classes.label}>
            <span className={classes.required}></span>Dato:
          </label>
          <select id='dato' className={classes.dropdown} >
            <option value="" hidden></option>
          </select>

            <button className={classes.button} onClick={handleBack}>Tilbage</button>
            <button className={classes.button} onClick={handleNext}>Næste</button>
        </div>

        <div className={classes.blueSquare}>
            <DatePicker allowDeselect value={selectedDate} onChange={handleChangeDate} size={'md'} className={classes.calendar}/>
            
        {/* <input type="date" value={contextValue.dato} onChange={handleChangeDato} size={'md'} className={classes.calendar}/> */}
        </div>
      </div>
    </div>
  );
}

export default SelectDate;

