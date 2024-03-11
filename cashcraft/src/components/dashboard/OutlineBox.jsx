import React, { useState, useEffect } from 'react'
import "./index.css"

export default function OutlineBox({ id }) {
  const [paidBy, setPaidBy] = useState();
  const jwt = localStorage.getItem("jwt")
  useEffect(() => {
    async function fetchData() {
      let paidby = await fetch(`http://localhost:8080/user/${id}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer " + jwt,
        },
      });
      paidby = await paidby.json();
      setPaidBy(paidby);
    }
    fetchData()
  }, []);
  return (

    <div className="outlinebox">
      <p className='box-text'>{paidBy?.userFirstName}</p>
    </div>

  )
}
