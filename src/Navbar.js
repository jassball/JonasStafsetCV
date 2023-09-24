import {Link, useLocation} from 'react-router-dom';
import './Styles/Navbar.css';


const Navbar =  () => {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand fixed-top">
        <Link id='nav-link' to="/" className={`navbar-brand ${location.pathname === '/' ? 'active-page' : ''}`}>Jonas</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className='nav-item'>
                    <Link to="/experience" className={`nav-link ${location.pathname === '/experience' ? 'active-page' : ''}`}>Erfaring</Link>
                </li>
                <li className="nav-item">
                    <Link to="/work-experience" className={`nav-link ${location.pathname === '/work-experience' ? 'active-page' : ''}`}>Yrkeserfaring</Link>
                </li>
                <li className="nav-item" >
                    <Link to="/education" className={`nav-link ${location.pathname === '/education' ? 'active-page' : ''}`}>Utdanning</Link>
                </li>
            </ul>
        </div>
    </nav>
    ); 
    
}

export default Navbar;