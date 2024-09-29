import React, { useState } from 'react';


export default function BookingForm() {

    const [field, setField] = useState([
        { date: "" },
        { time: "" },
        { guests: 1 },
        { occasion: ""},
    ])

    const [availibleTimes, setAvailibleTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

    return (
        <form style="display: grid; max-width: 200px; gap: 20px">
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date"></input>
            <label for="res-time">Choose time</label>
            <select id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"></input>
            <label for="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"></input>
        </form>
    )
}