import { useState, useEffect } from "react"

function BookingForm(props) {

    const [resDate, setResDate] = useState('')
    const [resTime, setResTime] = useState('')
    const [numGuests, setNumGuests] = useState(1)
    const [occasion, setOccasion] = useState('')

    useEffect(() => {
        props.handleUpdate(resDate)
    })

    function submitForm(e) {
        e.preventDefault()
        console.log({resDate, resTime, numGuests, occasion})
    }

    return (
        <form className='m-a' style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={submitForm}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={resDate} onChange={(e) => {setResDate(e.target.value)}}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={resTime} onChange={(e) => setResTime(e.target.value)}>
                {/* {availableTimes.map(time => {return <option>{time}</option>})} */}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} placeholder="1" min="1" max="10" id="guests"/>
            <label htmlFor="occasion" >Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    )
}
export default BookingForm