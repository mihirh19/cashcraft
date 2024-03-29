import React, { useState, useEffect } from 'react'
import "./index.css"
import Organization from "./Organizations"
import { useSelector } from 'react-redux'
import { Fragment } from 'react';
export default function TopContainer() {
  // let user = JSON.parse(localStorage.getItem('user-info'));
  // let token = localStorage.getItem('jwt');
  const group = useSelector(state => state.groups);
  // const [group, setGroup] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     let groups = await fetch(`http://localhost:8080/user/groups/${user.id}`, {
  //       method: 'GET',
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         "Authorization": `Bearer ${token}`
  //       },

  //     });
  //     groups = await groups.json();
  //     localStorage.setItem('groups', JSON.stringify(groups));
  //     // setGroup(JSON.parse(localStorage.getItem('groups')));
  //   }
  //   fetchData()
  // }, []);

  return (
    <div className='organizations'>
      {
        group?.map((post, index) => {
          return (
            <Fragment key={post.id}>
              <Organization name={post.groupName} id={post.id} key={post.id} />
            </Fragment>
          )
        })
      }
    </div>
  )
}
