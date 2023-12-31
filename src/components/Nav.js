import logo from '../assets/logos/Logo.svg'

function Nav() {

    return (
        <nav>
            <img src={logo} alt="company logo" />
            <ul>
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