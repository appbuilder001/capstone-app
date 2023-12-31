import logo from '../assets/logos/Logo.svg'

function Nav() {

    return (
        <nav className="flex-row just-c ai-c m-a" style={{width: '60%', minHeight: '120px'}} >
            <ul className="flex-row just-sb ai-c" style={{width: '100%', fontFamily: 'var(--typeface2)'}}>
                <img src={logo} alt="company logo" />
                <a href="/"><li>HOME</li></a>
                <a href="/"><li>ABOUT</li></a>
                <a href="/"><li>MENU</li></a>
                <a href="/"><li>RESERVATIONS</li></a>
                <a href="/"><li>ORDER ONLINE</li></a>
                <a href="/"><li>LOGIN</li></a>
            </ul>
        </nav>
    )
}

export default Nav