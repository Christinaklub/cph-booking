import React, { useState } from 'react';
import {createClient} from '@supabase/supabase-js';


const addBooking = async (Campus, Stilling, Dato, Tidspunkt, Lokaletype ) => {
  const supabase = createClient('https://txxxtrswrqluxdohetsm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4eHh0cnN3cnFsdXhkb2hldHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNTE4MjIsImV4cCI6MjAxNTYyNzgyMn0.c5FcVULcw1G-IULur56wxb3wnZZVXz6nkfAmOm1Sipc');
    try {
      const { data, error } = await supabase
        .from('bookingBase') // Navnet på vores tabell i databasen
        .insert([{  Campus, Stilling, Dato, Tidspunkt, Lokaletype }]);
      
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
  
 