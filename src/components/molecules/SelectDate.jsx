import { useState } from 'react';
import { DatePicker, DatePickerProps } from '@mantine/dates';
import React from 'react';
import useMyContext from '@/context/my-context';
import classes from './SelectDate.module.css';
import '@mantine/dates/styles.css';

function SelectDate(props) {
    // const contextValue = useMyContext();

    const [value, setValue] = useState("")
    const { campus, stilling, lokale, tidspunkt, } = useMyContext(); 

    function handleNext(){
        console.log("du har trykket på next")
        props.x.scrollNext();
      }
    function handleBack(){
        console.log("du har trykket på next")
        props.x.scrollPrev();
      }


    //   function handleChangeDato(event) {
    //     contextValue.setDato(event.target.value)
    //   }

  return (
    <div className={classes.slideContent}>
      <div className={classes.orangeSquare}>
        <div className={classes.leftInfo}>
            <p className={classes.bodyText}><span className={classes.bodyTextBold}>Campus: </span>{campus}</p>
            <p className={classes.bodyText}><span className={classes.bodyTextBold}>Stilling: </span> {stilling}</p>
            <p className={classes.bodyText}><span className={classes.bodyTextBold}>Lokale Type: </span> {lokale}</p>
            <p className={classes.bodyText}><span className={classes.bodyTextBold}>Tidsinterval: </span>{tidspunkt}</p>
            <button className={classes.button} onClick={handleBack}>Tilbage</button>
            <button className={classes.button} onClick={handleNext}>Næste</button>
        </div>

        <div className={classes.blueSquare}>
            <DatePicker allowDeselect value={value} onChange={setValue} size={'md'} className={classes.calendar}/>
        </div>
      </div>
    </div>
  );
}

export default SelectDate;

