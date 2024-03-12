import React from 'react';
import './index.css'
import SideBar from '../containers/SideBar';
import MainDashboard from '../containers/MainDashboard';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { setCurrUser } from '../slices/currUserSlice';
function Dashboard() {
    const history = useNavigate();
    const dispatch = useDispatch();

    if (!localStorage.getItem('user-info')) {
        history('/login')
        window.location.reload();
    }
    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt === null) {
            history('/login');
            window.location.reload();
        }
        let currUser = jwtDecode(jwt);
        dispatch(setCurrUser(currUser.user));

    }, [])

    return (
        <div className='dashboard-main'>
            <SideBar />
            <MainDashboard />
        </div>
    );
}

export default Dashboard;