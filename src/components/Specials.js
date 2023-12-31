import SpecialsCard from './SpecialsCard'

function Specials() {

    return(
    <div style={{marginTop: '-75px', background: 'white'}}>
        <section className='flex-row just-sb ai-fe m-a' style={{paddingTop: '100px', width: '70%'}}>
            <h2 style={{lineHeight: '.7', fontFamily: 'var(--typeface1'}}>This weeks specials!</h2>
            <button className='cta_btn' style={{width: '200px', height: '60px'}}>Onine Menu</button>
        </section>
        <section className='flex-row just-sb ai-c m-a' style={{width: '70%', marginTop: '70px'}}>
            <SpecialsCard />
            <SpecialsCard />
            <SpecialsCard />
        </section>
    </div>) 
}

export default Specials