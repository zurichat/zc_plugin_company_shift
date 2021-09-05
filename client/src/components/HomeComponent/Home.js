import React from 'react'
import Navbar from './Navbar/Navbar'
import Dashboard from './Dashboard/Dashboard'
import './Home.css'


const Home = () => {
    return (
        <div className="home-content">
            <Navbar />
            <Dashboard />
        </div>
    )
}

export default Home;
