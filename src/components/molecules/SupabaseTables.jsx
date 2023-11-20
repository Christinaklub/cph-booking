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


//  HVIS VI HAR LYST TIL Å LEGGE IN RADER FRA REACT APP IND TIL SUBABASE
// import { supabase } from './supabase'; // Importer din Supabase-klient

// function YourComponent() {
//   const [navn, setNavn] = useState('');
//   const [email, setEmail] = useState('');
//   const [dato, setDato] = useState('');
//   const [tidspunkt, setTidspunkt] = useState('');

//   const handleSubmission = async () => {
//     try {
//       // Legg til en rad i databasen
//       const { data, error } = await supabase
//         .from('din_tabell') // Erstatt 'din_tabell' med navnet på din faktiske tabell
//         .insert([
//           {
//             navn: navn,
//             email: email,
//             dato: dato,
//             tidspunkt: tidspunkt,
//             campus: 'Oslo', // Eksempelverdier for Campus, Lokaletyper og Stilling
//             lokaletyper: 'Møterom',
//             stilling: 'Student',
//           },
//         ]);

//       if (error) {
//         console.error('Feil under innsetting:', error);
//       } else {
//         console.log('Data lagt til:', data);
//         // Reset state etter vellykket innsetting hvis ønskelig
//         setNavn('');
//         setEmail('');
//         setDato('');
//         setTidspunkt('');
//       }
//     } catch (error) {
//       console.error('Feil under innsetting:', error.message);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={navn}
//         onChange={(e) => setNavn(e.target.value)}
//         placeholder="Navn"
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="E-post"
//       />
//       <input
//         type="date"
//         value={dato}
//         onChange={(e) => setDato(e.target.value)}
//         placeholder="Dato"
//       />
//       <input
//         type="time"
//         value={tidspunkt}
//         onChange={(e) => setTidspunkt(e.target.value)}
//         placeholder="Tidspunkt"
//       />
//       <button onClick={handleSubmission}>Legg til rad</button>
//     </div>
//   );
// }

// export default YourComponent;

  