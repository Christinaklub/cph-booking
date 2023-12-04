import React from 'react'
import classes from './Confirm.module.css';
import Image from 'next/image';
import profilpicture from '/public/profilpicture.jpeg'
import lokaleTwo from '/public/lokaleTwo.svg'
import addBooking from './/SupabaseTables'; 
import useMyContext from '@/context/my-context';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import Link from 'next/link';
import DisplaySelectedDate from './DisplaySelectedDate';
import { useDate } from '@/context/date-context';

export default function Confirm(props) {
  

  // Funksjonen skal legge ind en bestiling av data til databasen 
  const handleSubmit = async (event) => {
    
    // brukes await til å vente på resultatet av addbooking før den kan gå videre 
    try {
      await addBooking(
        campus,
        stilling,
        new Date(),                 
        tidspunkt,
        lokale,
      );
      
      // Oppdaterer tilstanden til addBooking, og tilbakestiller feltene etter booking 
      setBookingInfo({ 
        Campus: '',
        Stilling: '',
        Dato: '',
        Tidspunkt: '',
        Lokaletype: '',
      });
      // håndterer feil 
    } catch (error) {
      console.error('Feil under innsending av booking:', error.message);
    }
  };


  // Vi henter variablerne der fanger de specifikke properties fra vores object og retunere det i useMyContext.
  const { campus, stilling, lokale, tidspunkt, selectedDate } = useMyContext(); 

  //modal open og close taget fra Mantine
  const [opened, { open, close }] = useDisclosure(false);


// Tilbage knap
  function handleBack(){
    console.log("du har trykket på tilbage")
    props.x.scrollPrev();
  }

  return (
    <div className={classes.slideContent}>
        <div className={classes.orangeSquare}>
            <div className={classes.leftSideInfo}>
                <h2 className={classes.title}>Reservation af lokale</h2>
                <Image className={classes.proImg} src={profilpicture}/>
                <p className={classes.bodyText}>Nønne Jansdorf</p>
                <p className={classes.headerTwo}>Informationer</p>
                <p className={classes.bodyText}><span className={classes.bodyTextBold}>Campus: </span>{campus}</p>
                <p className={classes.bodyText}><span className={classes.bodyTextBold}>Stilling: </span> {stilling}</p>
                <p className={classes.bodyText}><span className={classes.bodyTextBold}>Lokale Type: </span> {lokale}</p>
                {/* Da DatePicker dato værdi er et DATE tilføjer vi "toString("") for at lave dataen om til string så vi kan læse det */}
                <p className={classes.bodyText}><span className={classes.bodyTextBold}>Dato: </span> {selectedDate.toString("")} kl:{tidspunkt}</p>
                
            </div>

            <Modal opened={opened} onClose={close} className={classes.modal}>
                <p className={classes.headerTwo}>Tak!</p>
                <p className={classes.bodyText}>For at booke et lokale. Din bekræftigelse af bookingen vil blive sendt til dig på mail. </p>
                <Link href="/">
                    <button className={classes.buttonBlue} onClick={close}>Forside</button>
                </Link>
            </Modal>

            
            
            <div className={classes.rightSideInfo}>
                <Image className={classes.img} src={lokaleTwo}/>
                <button className={classes.button} onClick={handleBack}>Tilbage</button>
                {/* onClick har to actions der både submitter vores data til vores database og åbner vores modal. Det er gjort ved at når et event sker så udfører den de to handlinger */}
                <button className={classes.button} onClick={event => {handleSubmit(); open()}}> bekræft </button>
            </div>
        </div>
    </div>
    
  )
}



