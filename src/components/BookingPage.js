import BookingForm from "./BookingForm"

function BookingPage(props) {
    return(
        <BookingForm availableTimes={props.availableTimes} handleUpdate={props.handleUpdate}/>
    ) 
}

export default BookingPage