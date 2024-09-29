import BookingForm from './BookingForm';
import { useCallback, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

export function updateTimes(state, newDate) {
    if (!newDate) {
        return state;
    }
    return fetchAPI(newDate);
}

export function initializeTimes()  {
    return fetchAPI(new Date());
}

export default function BookingPage() {
    const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, [], initializeTimes);

    const navigate = useNavigate();
    const submitForm = useCallback((data) => {
        if(submitAPI(date)) {
            navigate('/confirmation');
        }
    }, []);

    return (
        <BookingForm availableTimes={availableTimes} onDateChange={updateAvailableTimes} onSubmitForm={submitForm} />
    )
}