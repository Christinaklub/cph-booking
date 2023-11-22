import SelectInfo from '@/components/molecules/SelectInfo'
import SelectDate from '@/components/molecules/SelectDate'
import Confirm from '@/components/molecules/Confirm';
import React, {useEffect, useState} from 'react'
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import styles from './/index.module.css'



export default function Booking() {
  const [embla, setEmbla] = useState(null);

  return (
    <div className={styles.container}>
    <Carousel slideSize="100%" height={700} draggable={false} withControls={false} getEmblaApi={setEmbla}>
      <Carousel.Slide><SelectInfo x={embla} ></SelectInfo></Carousel.Slide>
      <Carousel.Slide><SelectDate></SelectDate></Carousel.Slide>
      <Carousel.Slide><Confirm></Confirm></Carousel.Slide>
    </Carousel>
    </div>
    
  )

  
}

