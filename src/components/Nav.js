import logo from '../assets/logos/Logo.svg'
import { Routes, Route, Link } from 'react-router-dom'
import Homepage from './Homepage'
import Chicago from './Chicago'
import BookingPage from './BookingPage'
import Specials from './Specials'

function Nav() {

    return (
        <>
        <nav className="flex-row just-c ai-c m-a" style={{width: '60%', minHeight: '120px'}} >
            <ul className="flex-row just-sb ai-c" style={{width: '100%', fontFamily: 'var(--typeface2)'}}>
                <img src={logo} alt="company logo" />
                <Link to='/'><li>HOME</li></Link>
                <Link to='/about'><li>ABOUT</li></Link>
                <Link to='/menu'><li>MENU</li></Link>
                <Link to='/reservations'><li>RESERVATIONS</li></Link>
                <Link to='/order'><li>ORDER ONLINE</li></Link>
                <Link to='/login'><li>LOGIN</li></Link>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<Chicago />} />
            <Route path='/menu' element={<Specials />} />
            <Route path='/reservations' element={<BookingPage />} />
        </Routes>
        </>
    )
}

export default Nav