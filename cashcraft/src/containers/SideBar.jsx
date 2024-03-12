import React from 'react';
import "./index.css";
import MainLogo from '../components/sidebar/MainLogo';
import UserItem from '../components/sidebar/UserItem';
import SideBarItems from '../components/sidebar/SideBarItems';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

import { setCurrUser } from '../slices/currUserSlice';
function SideBar() {
    const dispatch = useDispatch();
    // const user = useSelector(state => state.currUser);

    const user = JSON.parse(localStorage.getItem('user-info'));
    const groups = useSelector(state => state.groups);

    // const groups = JSON.parse(localStorage.getItem('groups'));
    const history = useNavigate();

    function logout() {
        localStorage.clear();
        history('/login');
    }

    return (
        <div className='sidebar-main'>
            <MainLogo />
            <div className='sidebar-item'>
                <UserItem name={`${user.userFirstName}`} lastName={user.userLastName} icon={<PersonOutlineIcon style={{ color: 'white', fontSize: "30px" }} />} />
                <div className='sidebar-items'>
                    <p className='sidebar-grp' >Groups</p>
                    <div className='groupss'>
                        {groups?.map(post => {
                            return (

                                <SideBarItems name={post.groupName} id={post.id} key={post.id} icon={<PeopleOutlineIcon />} />

                            )
                        })}
                    </div>
                </div>

            </div>
            <div className='logout' onClick={logout}>
                <LogoutIcon style={{ fontSize: '19px' }} />
                <p>Logout</p>
            </div>
        </div>
    );
}

export default SideBar;