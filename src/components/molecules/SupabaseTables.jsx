import React, { useState } from 'react';
import {createClient} from '@supabase/supabase-js';


const addBooking = async (Navn, Email, Lokaletype, Dato, Tidspunkt) => {
    try {
      const { data, error } = await supabase
        .from('bookingBase') // Navnet på vores tabell i databasen
        .insert([{  Navn, Email, Lokaletype, Dato, Tidspunkt }]);
      
      if (error) {
        // Håndter feil her
        console.error(error);
      } else {
        // Data er lagt til vellykket
        console.log('Data lagt til:', data);
      }
    } catch (error) {
      console.error('Feil under lagring av data:', error.message);
    }
  };

  export default addBooking;
  
 