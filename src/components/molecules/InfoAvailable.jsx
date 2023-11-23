import { useEffect, useState } from 'react';
import {createClient} from '@supabase/supabase-js';



//komponent om tilgjenglihet til tider og lokaler - vet ikke hva vi skal gjøre mer jeg er lost
function BookingComponent() {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    async function fetchBookingData() {
      try {
        // Her henter vi data fra Supabse vores tabell heter bookingAvailable
        const { data, error } = await supabase.from('bookingAvailable').select('*');
        
        if (error) {
          throw error;
        }

        if (data) {
          setBookingData(data);
        }
      } catch (error) {
        console.error('Feil henting av data:', error.message);
      }
    }

    fetchBookingData();
  }, []); 

  return (
    <div>
      <ul>
        {bookingData.map((booking) => (
          <li key={booking.id}>
            {booking.lokale}: {booking.dato} - {booking.tidspunkt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingComponent;
