import image from '../assets/images/restauranfood.jpg'

function CallToAction() {

    return(
        <div className='flex-row just-se wrap gap' style={{padding: '20px 0 20px 20px', backgroundColor: 'var(--primary_color1)', minHeight: '430px'}}>
            <section className='flex-col' style={{paddingTop: '20px', gap: '20px'}}>
                <section>
                    <h1 style={{fontFamily: 'var(--typeface1)', lineHeight: '0.7', fontWeight: '300', color: 'var(--primary_color2)'}}>Little Lemon</h1>
                    <h2 style={{fontFamily: 'var(--typeface1)', lineHeight: '0.7', fontWeight: '300', color: 'white'}}>Chicago</h2>
                </section>
                <p style={{fontFamily: 'var(--typeface2)', color: 'white', maxWidth: '290px'}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button class="cta_btn"/*onClick={navigateTo(reservations)}*/>Reserve a Table</button>
            </section>
            <section>
                <div class='radius' style={{backgroundImage: `url('${image}')`, width: '394px', height: '406px', backgroundSize: 'cover'}} alt='chef holding food'/>
            </section>
        </div>
    )
}
export default CallToAction