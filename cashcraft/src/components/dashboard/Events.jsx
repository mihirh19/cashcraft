import React from 'react'
import "./index.css"
import FilledBox from './FilledBox'
import OutlineBox from './OutlineBox'
import DeleteIcon from '@mui/icons-material/Delete';
export default function Events({ name, paidBy, amt, id }) {
  return (
    <div className='event-main'>
      <div className='event-content'>
        <p className='event-head'>{name}</p>
        <div className='event-icons'>
          <FilledBox text={`₹${amt}`} />
          <OutlineBox id={paidBy} />
        </div>
      </div>
      <div onClick={async () => {
        await fetch(`http://localhost:8080/expense/resolve/${id}`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('jwt') || ""
          }
        })
        window.location.reload();
      }} style={{ cursor: "pointer" }}>
        <DeleteIcon />
      </div>

    </div>
  )
}
