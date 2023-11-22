// import React from 'react'
// import classes from './SelectInfo.module.css'

// export default function SelectDate() {
//   return (
//     <div className={classes.slideContent}>
//         <div className={classes.orangeSquare}>
          
//         </div>
//     </div>
//   )
// }

import React from 'react';
import classes from './SelectDate.module.css';

function SelectDate() {

  return (
    <div className={classes.slideContent}>
      <div className={classes.orangeSquare}>
        <p>Campus: {}</p>
        <p>Stilling: {}</p>
        <p>Lokale Type: {}</p>
        <p>Tidsinterval: {}</p>
      </div>
    </div>
  );
}

export default SelectDate;
