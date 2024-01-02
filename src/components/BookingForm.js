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
        <form className='m-a' style={{display: 'grid', paddingBottom: '30px', maxWidth: '60%', gap: '20px', color: 'white'}} onSubmit={submitForm}>
            <div className='flex-row gap just-sb'>
                <div className='flex-row just-fs ai-c' style={{flex: '1'}}>
                    <label className='fw-bold' htmlFor="indoor">Indoor seating</label>
                    <>
                    <input className='formInput' type="radio" id="indoor" style={{marginLeft: '30px', width: '20px'}}/>
                    </>
                </div>
                <div className='flex-row just-fs ai-c' style={{flex: '1'}}>
                    <label className='fw-bold' htmlFor="outdoor">Outdoor seating</label>
                    <input className='formInput' type="radio" id="outdoor" style={{marginLeft: '30px', width: '20px'}}/>
                </div>
            </div>
            <div className='flex-row gap just-sb'>
                <div className='flex-col'>
                    <label htmlFor="res-date">Date</label>
                    <input className='formInput' type="date" id="res-date" value={resDate} required onChange={(e) => {setResDate(e.target.value)}}/>
                </div>
                <div className='flex-col'>
                    <label htmlFor="res-time">Time</label>
                    <select className='formInput' id="res-time " value={resTime} required onChange={(e) => setResTime(e.target.value)}>
                        {times()}
                    </select>
                </div>
            </div>
            <div className='flex-row gap just-sb ai-c'>
                <div className='flex-col'>
                    <label htmlFor="guests">Number of guests</label>
                    <input className='formInput' type="number" value={numGuests} required onChange={(e) => setNumGuests(e.target.value)} placeholder="1" min="1" max="10" id="guests"/>
                </div>
                <div className='flex-col'>
                    <label htmlFor="occasion" >Occasion</label>
                    <select className='formInput' id="occasion" value={occasion} required onChange={(e) => setOccasion(e.target.value)} >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
            </div>
            <input className='cta_btn m-a' style={{width: '200px'}} type="submit" disabled={!resDate || !resTime || !numGuests || !occasion} value="Reserve a table"/>
        </form>
    )
}
export default BookingForm