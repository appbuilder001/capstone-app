import { useReducer } from "react"
import { Routes, Route } from 'react-router-dom'
import Specials from "./Specials"
import Chicago from "./Chicago"
import Homepage from './Homepage.js'
import BookingPage from './BookingPage'

function updateTimes(state, action) {
    if(!action.type)
       return console.log(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
    else 
        return console.log(['7:00', '8:00', '9:00', '10:00', '11:00', '12:00'])
}

function Main () {

    const initializeTimes = () => {
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    }

    const handleUpdate = (date) => {
        dispatch({type: date})
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

    return (
        <div style={{width: '100%'}}>
         <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<Chicago />} />
            <Route path='/menu' element={<Specials />} />
            <Route path='/reservations' element={<BookingPage availableTimes={availableTimes} handleUpdate={handleUpdate}/>} />
        </Routes>
        </div>
    )
}

export default Main