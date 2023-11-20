import { Carousel } from '@mantine/carousel';
import classes from './SelectInfo.module.css';

function SelectInfo() {
  return (
    <Carousel height={400} classNames={classes.carousel}>
      <Carousel.Slide>
        <div className={classes.slideContent}>
          <div className={classes.orangeSquare}>
            <h2 className={classes.title}>Vælg venligst følgende informationer</h2>
            <div className={classes.dropdownContainer}>
            <label htmlFor="campus" className={classes.label}>
            <span className={classes.required}>*</span>Campus:
            </label>
              <select id="campus" className={classes.dropdown}>
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
              <select id="stilling" className={classes.dropdown}>
                <option value="studerende">Studerende</option>
                <option value="undervisere">Undervisere</option>
              </select>
            </div>
            <div className={classes.dropdownContainer}>
              <label htmlFor="lokale" className={classes.label}>
                Lokale type:
              </label>
              <select id="lokale" className={classes.dropdown}>
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
            <button className={classes.button}>Næste</button>
          </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
    </Carousel>
  );
}

export default SelectInfo;
