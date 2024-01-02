import BookingForm from "./BookingForm"
import image1 from '../assets/images/bruchetta.svg'
import image2 from '../assets/images/chicago1.jpg'
import image3 from '../assets/images/chicago2.jpg'
function BookingPage(props) {
    return(<>
        <div style={{backgroundColor: 'var(--primary_color1)'}}>
            <div className='m-a' style={{width: '60%'}}>
                <h2 style={{fontFamily: 'var(--typeface1)', color: 'var(--primary_color2)'}}>Reservations</h2>
            </div>
            <BookingForm availableTimes={props.availableTimes} handleUpdate={props.handleUpdate}/>
        </div>
        <div className='flex-row just-sb ai-c m-a' style={{width: '60%', padding: '50px 0'}}>
        <div className='radius' style={{backgroundImage: `url('${image1}')`, height: '200px', width: '200px', backgroundSize: 'cover'}}/>
        <div className='radius' style={{backgroundImage: `url('${image2}')`, height: '200px', width: '200px', backgroundSize: 'cover'}}/>
        <div className='radius' style={{backgroundImage: `url('${image3}')`, height: '200px', width: '200px', backgroundSize: 'cover'}}/>

        </div>
        </>
    ) 
}

export default BookingPage