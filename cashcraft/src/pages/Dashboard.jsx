import React from 'react';
import './index.css'
import SideBar from '../containers/SideBar';
import MainDashboard from '../containers/MainDashboard';
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const history = useNavigate();
    if (!localStorage.getItem('user-info')) {
        history('/login')
        window.location.reload();
    }
    return (
        <div className='dashboard-main'>
            <SideBar />
            <MainDashboard />
        </div>
    );
}

export default Dashboard;