import { useNavigate } from "react-router-dom";
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import Specials from './Specials';
import Reviews from './Reviews';
import ConfirmedBooking from './ConfirmedBooking';


export default function Main() {
    const submitForm = (data) => {
        if (submitAPI(data) == true ) {
        }
    }
    return (
        <main style={{
            display: grid
        }}>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/booking" element={<Bookingpage />}></Route>
                <Route path="/specials" element={<Specials />}></Route>
                <Route path="/reviews" element={<Reviews />}></Route>
                <Route path="/ConfirmedBooking.js" element={<ConfirmedBookings />}></Route>
            </Routes>

        </main>
    );
}