import logo from '../assets/logos/Logo.svg'

function Footer() {

    return (
        <div className='flex-row m-a just-sb' style={{fontSize: '12px', padding: '40px', width: '60%'}}>
            <img src={logo} alt="company logo" />
            <div className='flex-col'>
                <ul>
                    <lh className='fw-bold'>Navigation</lh>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className='flex-col'>
                <ul>
                    <lh className='fw-bold'>Contact</lh>
                    <li><address>123 Main St.,<br />Los Angeles, CA</address></li>
                    <li>555-555-5555</li>
                    <li>contact@littlelemon.com</li>

                </ul>
            </div>
            <div className='flex-col'>
                <ul>
                    <lh className='fw-bold'>Social Media</lh>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer