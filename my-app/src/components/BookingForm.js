import { useState, useMemo } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './BookingForm.css';

const formatDate = (date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
}

const minDate = formatDate(new Date());
const maxDate = formatDate(() => {
    const date = new Date();
    date.setMoneth(date.getMonth() + 1);
    return date;
})

export default function BookingForm({availibleTimes, onDateChange, onSubmitForm}) {

    const [time, setTime] = useState(availibleTimes[0]);
    const [occasion, setOccasion] = useState('Party');

    const timeOptions = useMemo(() => {
        availibleTimes.map((time) => <option key={time}>{time}</option>), [availibleTimes];
    })

    const formik = useFormik({
        initialValues: {
            date: formatDate(new Date()),
            guests: 1
        },
        validationSchema: Yup.object({
            date: Yup.date().min(minDate).max(maxDate).required('Required'),
            guests: Yup.number().min(1).max(10).required('Required')
        })
    })

    return (
        <form className={styles['form']} onSubmit={() => onSubmitForm({
            date: formik.values.date,
            time,
            guests: formik.values.guests,
            occasion
        })}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" {...formik.getFieldProps('date')} min={minDate} max={maxDate} onChange={(e) => {
                let newDate = e.target.valueAsDate;
                if (!newDate) {
                    newDate = new Date();
                }
                onDateChange(newDate);
                formik.handleChange(e);
            }}></input>
            { formik.errors.date && <span className={styles['error-message']}>{formik.errors.date}</span> }

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                { timeOptions }
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps('guests')}></input>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Party</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" aria-label="Book Reservation" disabled={!formik.isValid}></input>
        </form>
    )
}