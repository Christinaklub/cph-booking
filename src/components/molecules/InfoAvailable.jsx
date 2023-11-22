import { useEffect, useState } from 'react';
import { supabase } from './supabase'; 

function BookingComponent() {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    async function fetchBookingData() {
      try {
        // Her henter vi data fra bookingAvailable fra supabase
        const { data, error } = await supabase.from('bookingAvailable').select('*');
        
        if (error) {
          throw error;
        }

        if (data) {
          setBookingData(data);
        }
      } catch (error) {
        console.error('Feil under henting av data:', error.message);
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
