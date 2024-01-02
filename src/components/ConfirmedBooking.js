function ConfirmedBooking() {
    return (
        <div style={{backgroundColor: 'var(--primary_color1)'}}>
            <div className='m-a flex-col just-c ai-c' style={{ minHeight: '80vh', textAlign: 'center', width: '60%'}}>
                <h2 style={{fontFamily: 'var(--typeface1)', color: 'var(--primary_color2)'}}>Your reservation has been confirmed!</h2>
                <p style={{fontFamily: 'var(--typeface1)', color: 'white'}}>Check your email for a conformation of your reservation details. We look forward to seeing you!</p>
            </div>
        </div>
    )
} 
export default ConfirmedBooking