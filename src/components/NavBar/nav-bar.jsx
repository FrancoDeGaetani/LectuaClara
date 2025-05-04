
import { Link } from 'react-router-dom'


import logo from '../../assets/imgs/logo.png';
import './nav-bar.css'




function NavBar() {

    const LOGO = logo

    return(
        <nav className='nav-bar'>
            <Link to='Biblioteca' className='nav-link'>Biblioteca</Link>
            <Link to='/'><img src={LOGO} className='nav-bar-logo'></img></Link>
            <Link to='tu-biblioteca' className='nav-link'>Tu Biblioteca</Link>
        </nav>
    )
}

export default NavBar;