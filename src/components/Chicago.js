import image1 from '../assets/images/chicago1.jpg'
import image2 from '../assets/images/chicago2.jpg'

function Chicago() {

    return(
        <div className='flex-row just-se wrap gap' style={{height: 'auto', padding: '40px 20px 125px 20px', backgroundColor: 'var(--primary_color1)'}}>
            <section className='flex-col' style={{paddingTop: '20px', gap: '20px'}}>
                <section>
                    <h1 style={{fontFamily: 'var(--typeface1)', lineHeight: '0.7', fontWeight: '300', color: 'var(--primary_color2)'}}>Little Lemon</h1>
                    <h2 style={{fontFamily: 'var(--typeface1)', lineHeight: '0.7', fontWeight: '300', color: 'white'}}>Chicago</h2>
                </section>
                <p className='texta-j' style={{marginTop: '20px', fontFamily: 'var(--typeface2)', color: 'white', maxWidth: '375px'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </section>
            <section className='flex-row' style={{paddingTop: '20px'}}>
                <div class='radius' style={{backgroundImage: `url('${image1}')`, width: '276px', height: '338px', transform: 'translateY(100px)', backgroundSize: 'cover'}} alt='chef holding food'/>
                <div class='radius' style={{backgroundImage: `url('${image2}')`, width: '276px', height: '338px', backgroundPositionX: '-200px', backgroundSize: 'cover',transform: 'translateX(-100px)'}} alt='chef holding food'/>
            </section>
        </div>
    ) 
}

export default Chicago