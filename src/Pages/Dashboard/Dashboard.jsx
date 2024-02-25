import React from 'react';
import './Dashboard.css'
import ShowProfile from '../../Components/ShowProfile/ShowProfile';
import DashInfos from '../../Components/DashInfos/DashInfos';

function Dashboard(props) {
    return (
        <div className='AllContent'>
            <ShowProfile/>
            <DashInfos/>
            
        </div>
    );
}

export default Dashboard;