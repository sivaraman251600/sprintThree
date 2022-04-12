import React from 'react';
import { HomePage } from '../components/pages/home';
import { AboutUs } from '../components/pages/about';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
import './nav.css'

export function NavBar (){

    return(
        <div>
            <Router>
            <nav>
                <Link to={'/'} id='navbar'>HOME</Link>
                <Link to={'/aboutus'} id='navbar'>ABOUT-US</Link>
            </nav> 
            <br/>
            <Routes>
                <Route path={'/'} element={<HomePage/>} />
                <Route path={'/aboutus'} element={<AboutUs/>} />
            </Routes>
            </Router>
        </div>
    )
}