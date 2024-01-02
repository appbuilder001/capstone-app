import CallToAction from "./CallToAction"
import Specials from "./Specials"
import CustomersSay from "./CustomersSay"
import Chicago from "./Chicago"

function Homepage () {

    return (
        <div style={{width: '100%'}}>
            

        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
        </div>
    )
}

export default Homepage