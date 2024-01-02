import logo from '../assets/logos/Logo.svg'
import { Link } from 'react-router-dom'

function Nav() {

    return (
        <>
        <nav className="flex-row just-c ai-c m-a" style={{width: '60%', minHeight: '120px'}} >
            <ul className="flex-row just-sb ai-c" style={{width: '100%', fontFamily: 'var(--typeface2)'}}>
                <Link to='/'><img src={logo} alt="company logo" /></Link>
                <Link to='/'><li>HOME</li></Link>
                <Link to='/about'><li>ABOUT</li></Link>
                <Link to='/menu'><li>MENU</li></Link>
                <Link to='/reservations'><li>RESERVATIONS</li></Link>
                <Link to='/order'><li>ORDER ONLINE</li></Link>
                <Link to='/login'><li>LOGIN</li></Link>
            </ul>
        </nav>
     
        </>
    )
}

export default Nav