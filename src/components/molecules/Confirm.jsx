import React from 'react'
import classes from './Confirm.module.css';
import Image from 'next/image';
import profilpicture from '/public/profilpicture.jpeg'
import lokaleTwo from '/public/lokaleTwo.svg'
import addBooking from '/SupabaseTables'; 

export default function Confirm() {

  //Når man trykker på confirm knappen vil det sendes til databasen 
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await addBooking(
        bookingInfo.Navn,
        bookingInfo.Email,
        bookingInfo.Lokaletype,
        bookingInfo.Dato,
        bookingInfo.Tidspunkt
      );
      
      setBookingInfo({
        Navn: '',
        Email: '',
        Lokaletype: '',
        Dato: '',
        Tidspunkt: '',
      });
    } catch (error) {
      console.error('Feil under innsending av booking:', error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className={classes.slideContent}>
        <div className={classes.orangeSquare}>
            <div>
            <h2 className={classes.title}>Resevertion af lokale</h2>
            <Image className={classes.proImg} src={profilpicture}/>
            <p className={classes.bodyText}>Nønne Jansdorf</p>
            <p className={classes.headerTwo}>Informationer</p>
            <p className={classes.bodyText}>Mødelokale</p>
            <p className={classes.bodyText}>tid</p>
            </div>
            <Image src={lokaleTwo}/>
            <div>

            </div>
        </div>
    </div>
  )
}
