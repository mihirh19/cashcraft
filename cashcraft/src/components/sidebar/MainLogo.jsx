import React from 'react';
import "./index.css"
import BalanceIcon from '@mui/icons-material/Balance';
function MainLogo() {
   return (
      <div className='MainLogo-main'>
         <BalanceIcon style={{ fontSize: "23px" }} />
         <p className='logo-text'>CashCraft</p>
      </div>
   );
}

export default MainLogo;
