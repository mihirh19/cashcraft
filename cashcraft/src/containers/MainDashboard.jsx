import { useState } from "react"
import styles from "./styles/Sidebar.module.scss"
import { useEffect } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios";
import TopContainer from "../components/dashboard/TopContainer";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Mode } from "@mui/icons-material";

const MainDashboard = () => {

   const [users, setUsers] = useState();

   useEffect(() => {
      async function fetchData() {
         let paidby = await axios.get("http://localhost:3000/user", {
            headers: {
               "Content-Type": "application/json",
               "Accept": "application/json",
            }
         });

         paidby = paidby.data.all;
         localStorage.setItem('all-users', JSON.stringify(paidby));
         setUsers(paidby);
      }
      fetchData();
   }, [])

   const [personName, setPersonName] = useState([]);
   const currUser = JSON.parse(localStorage.getItem('user-info'))
   const handleChange = (event) => {

      setPersonName(
         // On autofill we get a stringified value.
         typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value,
      );
   };
   const [open, setOpen] = useState(false);
   const [grpName, setGrpName] = useState();
   const [grpType, setGrpType] = useState();
   const [grpBudget, setGrpBudget] = useState();
   const grpUser = [];
   const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'white',
      boxShadow: 24,
      p: 4,
   };

   async function createGroup() {
      setOpen(false);

      personName.map((user) => {
         grpUser.push({ "id": user });
      })
      let item = {
         "grpName": grpName,
         "grpType": grpType,
         "grpBudget": grpBudget,
         "grpUser": grpUser
      }
      try {
         let result = await axios.post("http://localhost:3000/groups", item, {
            headers: {
               "Content-Type": "application/json",
            }
         })
         const data = await result.data;
         if (data != null || result.status === 200) {
            localStorage.setItem('groups', JSON.stringify(data));
            setOpen(false);

         }
         else {
            return;
         }
      }
      catch (e) {
         console.log(e);
      }
      let totalgroups = await axios.get("http://localhost:3000/groups", {
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
         },
      })
      totalgroups = totalgroups.data;
      localStorage.setItem('groups', JSON.stringify(totalgroups));

      // window.location.reload();
   }



   return (
      <div className={styles.maindashboard_main}>
         <div className={styles.top_container}>
            <TextField label="Search" className={styles.searchbar} />
            <div className={styles.top_object} onClick={() => {
               setOpen(true);
            }}>
               <p className={styles.top_text}>Add Group</p>
            </div>
         </div>
         <TopContainer />
         <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <p>Add Group</p>
               <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
                  <TextField label="Name" onChange={(e) => { setGrpName(e.target.value) }} />
                  <TextField label="Budget" onChange={(e) => { setGrpBudget(e.target.value) }} />
                  <TextField label="Type" onChange={(e) => { setGrpType(e.target.value) }} />
                  <FormControl style={{ width: '100%' }}>
                     <InputLabel>Members</InputLabel>
                     <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"

                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput placeholder='Members' />}
                        style={{ width: '100%' }}
                     >
                        {users?.map((user) => (
                           <MenuItem
                              key={user.id}
                              value={user.username}

                           >
                              {user.username}
                           </MenuItem>
                        ))}
                     </Select>
                  </FormControl>
               </div>
               <div style={{ textAlign: 'center', backgroundColor: '#674fa3', borderRadius: '0.5vw', padding: '2px', marginTop: '10px', cursor: 'pointer' }} onClick={createGroup}>
                  <p style={{ color: 'white' }}>Create Group</p>
               </div>
            </Box>

         </Modal>


      </div >
   )
}

export default MainDashboard