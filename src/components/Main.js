import { useState, useEffect, useReducer } from "react"
import { Routes, Route } from 'react-router-dom'
import Specials from "./Specials"
import Chicago from "./Chicago"
import Homepage from './Homepage.js'
import BookingPage from './BookingPage'
import { fetchAPI, submitAPI } from '../utils/appAPI'
import ConfirmedBooking from "./ConfirmedBooking.js"

function updateTimes(state, action) {
    if(!action.type)
       return state
    else 
        return state
}

function Main () {

    const date = new Date()

    useEffect(() => {
        initializeTimes()
    })

    const initializeTimes = () => {
        setTimes(fetchAPI(date))
    }

    function handleUpdate(date) {
        dispatch({type: date})
    }
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

    const [times, setTimes] = useState()

    return (
        <div style={{width: '100%'}}>
        <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/about' element={<Chicago />} />
                <Route path='/menu' element={<Specials />} />
                <Route path='/reservations' element={<BookingPage availableTimes={times} handleUpdate={handleUpdate}/>} />
                <Route path='/confirmed' element={<ConfirmedBooking />} />
  
        </Routes>
        </div>
    )
}

export default Main