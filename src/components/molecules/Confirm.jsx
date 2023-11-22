import React from 'react'
import classes from './Confirm.module.css';
import Image from 'next/image';
import profilpicture from '/public/profilpicture.jpeg'
import lokaleTwo from '/public/lokaleTwo.svg'

export default function Confirm() {
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
