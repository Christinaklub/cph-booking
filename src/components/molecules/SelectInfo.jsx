// import { useState } from 'react';
// import { Carousel } from '@mantine/carousel';
// import classes from './SelectInfo.module.css';
// import useMyContext from '@/context/my-context';

import React, { useState, useEffect } from 'react';
import classes from './SelectInfo.module.css';
import useMyContext from '@/context/my-context';

function SelectInfo(props) {
  const contextValue = useMyContext();
  
  //sørger for at når du har valgt noget kommer det frem på næste side. 
  function handleChangeCampus(event) {
    contextValue.setCampus(event.target.value); 
  }
  function handleChangeStilling(event) {
    contextValue.setStilling(event.target.value); 
  }
  function handleChangeLokale(event) {
    contextValue.setLokale(event.target.value); 
  }

// ikke os der har kodet det, det er Mathias. Men denne funktion sørger bare for at vi henter den props der sørger for vi kan scroll når vi trykke på next knappen.
  function handleNext(){
    console.log("du har trykket på next")
    props.x.scrollNext();
  }

  return (
    <div className={classes.slideContent}>
      <div className={classes.orangeSquare}>
        <h2 className={classes.title}>Vælg venligst følgende informationer</h2>
        <div className={classes.dropdownContainer}>
          <label htmlFor="campus" className={classes.label}>
            <span className={classes.required}>*</span>Campus:
          </label>
          <select id="campus" className={classes.dropdown} value={contextValue.campus} onChange={handleChangeCampus}>
            <option value="Lyngby">Lyngby</option>
            <option value="Søerne">Søerne</option>
            <option value="City">City</option>
            <option value="Hillerød">Hillerød</option>
          </select>
        </div>
            <div className={classes.dropdownContainer}>
              <label htmlFor="stilling" className={classes.label}>
                <span className={classes.required}> *</span>Stilling:
              </label>
              <select id="stilling" className={classes.dropdown} value={contextValue.stilling} onChange={handleChangeStilling}>
                <option value="studerende">Studerende</option>
                <option value="undervisere">Undervisere</option>
              </select>
            </div>
            <div className={classes.dropdownContainer}>
              <label htmlFor="lokale" className={classes.label}>
                Lokale type:
              </label>
              <select id="lokale" className={classes.dropdown} value={contextValue.lokale} onChange={handleChangeLokale}>
                <option value="" disabled selected hidden>Vælg lokale</option>
                <option value="mødelokale">Mødelokale</option>
                <option value="undervisningslokale">Undervisningslokale</option>
                <option value="zoom-møde">Zoom-møde</option>
              </select>
            </div>
            <div className={classes.dropdownContainer}>
              <label htmlFor="tidspunkt" className={classes.label}>
                Tidsinterval:
              </label>
              <select id="tidspunkt" className={classes.dropdown}>
                <option value="" disabled selected hidden>Vælg tidspunkt</option>
                {/* husk at tilføje valg af tidspunkt */}
              </select>
            </div>
            <button className={classes.button} onClick={handleNext}>Næste</button>
          </div>
        </div>
  );
}

export default SelectInfo;
