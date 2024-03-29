import React, { useEffect, useState } from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import "./index.css"
export default function Final({ payto, payby, amt }) {
  const token = localStorage.getItem('jwt');
  const [to, setTo] = useState();
  const [by, setBy] = useState();

  useEffect(() => {
    async function fetchData() {
      let paidby = await fetch(`http://localhost:8080/user/${payby}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer " + token,
        },
      });
      paidby = await paidby.json();
      setBy(paidby.userFirstName);

      paidby = await fetch(`http://localhost:8080/user/${payto}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer " + token,
        },
      });
      paidby = await paidby.json();
      setTo(paidby.userFirstName);

    }
    fetchData()
  }, []);

  return (
    <div className='m-final'>
      <div className='l-final'>
        <p>{by}</p>
        <DoubleArrowIcon />
        <p>{to}</p>
      </div>
      <div className='r-final'>
        <p style={{ fontSize: '1vw', margin: 0, padding: '10px' }}>₹{amt}</p>
      </div>
    </div>
  )
}
