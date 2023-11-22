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

  const { campus, stilling, lokale, tidspunkt } = useMyContext(); 

  //modal open og close
  const [opened, { open, close }] = useDisclosure(false);

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
                <p className={classes.bodyText}><span className={classes.bodyTextBold}>Tidsinterval: </span>{tidspunkt}</p>
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
                <button className={classes.button} onClick={open}>Bekræft</button>
            </div>
        </div>
    </div>
    
  )
}



