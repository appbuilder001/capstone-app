import { useState, useEffect } from "react"
import { submitAPI } from "../utils/appAPI"
import { useNavigate } from "react-router-dom"

function BookingForm(props) {

    const [resDate, setResDate] = useState('')
    const [resTime, setResTime] = useState('')
    const [numGuests, setNumGuests] = useState(1)
    const [occasion, setOccasion] = useState('')

    const handleUpdate = props.handleUpdate
    const availableTimes = props.availableTimes

    const navigate = useNavigate()


    useEffect(() => {
        // handleUpdate(resDate)
        console.log(availableTimes)
    }, [resDate])

    const submitForm = (e) => {
        (submitAPI({resDate, resTime, numGuests, occasion}) ? navigate('/confirmed') : navigate('/'))
        e.preventDefault()

        return {}
    }

    function times () {
        return availableTimes.map(time => {return <option>{time}</option>})
    }

    return (
        <form className='m-a' style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={submitForm}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={resDate} required onChange={(e) => {setResDate(e.target.value)}}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={resTime} required onChange={(e) => setResTime(e.target.value)}>
                {times()}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" value={numGuests} required onChange={(e) => setNumGuests(e.target.value)} placeholder="1" min="1" max="10" id="guests"/>
            <label htmlFor="occasion" >Occasion</label>
            <select id="occasion" value={occasion} required onChange={(e) => setOccasion(e.target.value)} >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" disabled={!resDate || !resTime || !numGuests || !occasion} value="Make Your reservation"/>
        </form>
    )
}
export default BookingForm