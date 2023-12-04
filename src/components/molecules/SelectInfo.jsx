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

  function handleChangeTidspunkt(event) {
    contextValue.setTidspunkt(event.target.value)
  }

// ikke os der har kodet det, det er Mathias. Men denne funktion sørger bare for at vi henter den props der sørger for vi kan scroll når vi trykke på next knappen.
  // function handleNext(){
  //   console.log("du har trykket på next")
  //   props.x.scrollNext();
  // }

  function handleNext() {
    // tjekker om alle dropdowns har valg
    if (
      contextValue.campus !== '' &&
      contextValue.stilling !== '' &&
      contextValue.lokale !== '' &&
      contextValue.tidspunkt !== ''
    ) {
      // hvis alle dropdowns er valgt så fortsætter vi til næste trin
      console.log("du har trykket på next");
      props.x.scrollNext();
    } else {
      console.log("Vælg alle dropdowns");
      // hvis ikke alle dropdowns er valgt vises dette i konsolen
    }
  }

  // state bliver brugt her for at se om de første to dropdowns er valgt
  const [areFirstTwoSelected, setAreFirstTwoSelected] = useState(false);

  // funktion for at tjekke om begge de første to dropdowns er valgt
  useEffect(() => {
    // hvis både campus og stilling ikke er tomme
    if (contextValue.campus !== '' && contextValue.stilling !== '') {
      setAreFirstTwoSelected(true); // så sæt variablen til true
    } else {
      setAreFirstTwoSelected(false); // ellers, så sæt den til false
    }
  }, [contextValue.campus, contextValue.stilling]);

  return (
    <div className={classes.slideContent}>
      <div className={classes.orangeSquare}>
        <h2 className={classes.title}>Vælg venligst følgende informationer</h2>
        <div className={classes.dropdownContainer}>
          <label htmlFor="campus" className={classes.label}>
            <span className={classes.required}>*</span>Campus:
          </label>
          <select id="campus" className={classes.dropdown} value={contextValue.campus} onChange={handleChangeCampus}>
          <option value="" disabled selected hidden>Vælg Campus</option>
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
              <option value="" disabled selected hidden>Vælg Stilling</option>
                <option value="studerende">Studerende</option>
                <option value="undervisere">Undervisere</option>
              </select>
            </div>
            <div className={classes.dropdownContainer}>
              <label htmlFor="lokale" className={classes.label}>
                Lokale type:
              </label>
              {/* lokale-vælgeren er kun aktiv, når 'campus' og 'stilling' er valgt. Når både 'campus' og 'stilling' er valgt, bliver variablen areFirstTwoSelected sat til 'true'. */}
              <select id="lokale" className={classes.dropdown} value={contextValue.lokale} onChange={handleChangeLokale} disabled={!areFirstTwoSelected}>
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
              {/* tidspunkt-vælgeren er kun aktiv, når 'campus' og 'stilling' er valgt. Når både 'campus' og 'stilling' er valgt, bliver variablen areFirstTwoSelected sat til 'true'. */}
              <select id="tidspunkt" className={classes.dropdown} value={contextValue.tidspunkt} onChange={handleChangeTidspunkt} disabled={!areFirstTwoSelected}>
                <option value="" disabled selected hidden>Vælg tidspunkt</option>
                <option value="08.00-10.00">08.00-10.00</option>
                <option value="10.00-12.00">10.00-12.00</option>
                <option value="12.00-14.00">12.00-14.00</option>
                <option value="14.00-15.00">14.00-15.00</option>
              </select>
            </div>
            <button className={classes.button} onClick={handleNext}>Næste</button>
          </div>
        </div>
  );
}

export default SelectInfo;
