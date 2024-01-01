import scooter from '../assets/icons/scooter.png'

function SpecialsCard(props) {

    return (
        <div style={{backgroundColor: 'var(--highlight_color1)', height: '440px', width: '265px'}}>
            <div className='flex-col'>
                <div style={{backgroundImage: `url('${props.image}')`, height: '185px', backgroundSize: 'cover'}}>
                </div>
                <div style={{padding: '15px'}}>
                    <div className='flex-row just-sb ai-c'>
                        <h3 style={{fontFamily: 'var(--typeface1)'}}>{props.name}</h3>
                        <p style={{fontSize: '16px',  color: 'var(--secondary_color1)', fontFamily: 'var(--typeface2)'}}>{props.price}</p>
                    </div>
                    <p style={{minHeight: '150px',lineHeight: '1.2', marginTop: '20px', fontSize: '16px', fontFamily: 'var(--typeface2)'}}>{props.description}</p>
                    <div className='flex-row gap ai-c'>
                        <p className='fw-bold' style={{fontSize: '16px', fontFamily: 'var(--typeface2)'}}>Order a delivery</p>
                        <img src={scooter}/>
                    </div>
                </div>
            </div>
        </div>
)} export default SpecialsCard