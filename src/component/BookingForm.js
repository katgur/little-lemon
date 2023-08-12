import { fetchAPI } from "../api/api";
import { useState } from "react";
import { useForm } from "react-hook-form";

const BookingForm = ({ onSubmit }) => {
    const [availableTimes, setAvailableTimes] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onDateChange = (e) => {
        fetchAPI(e.target.value)
            .then(response => {
                setAvailableTimes(JSON.parse(response).availableTimes);
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="two-column">
                <div>
                    <label htmlFor="date" className="card-title">Date</label>
                    <input id="date" {...register("date", { required: "Required" })} onChange={onDateChange} className="card paragraph-text" type="date" min={new Date().toISOString().split("T")[0]} />
                    <div className="paragraph-text error">{errors.date && errors.date.message}</div>
                </div>
                <div>
                    <label htmlFor="time" className="card-title">Time</label>
                    <select id="time" {...register("time", { required: "Required" })} className="card paragraph-text">
                        {
                            availableTimes.map(time => {
                                return <option className="tag paragraph-text">{time}</option>
                            })
                        }
                    </select>
                    <div className="paragraph-text error">{errors.time && errors.time.message}</div>
                </div>
                <div>
                    <label htmlFor="place" className="card-title">Place</label>
                    <select id="place" {...register("place", { required: "Required" })} className="card paragraph-text">
                        <option className="tag paragraph-text">Indoor</option>
                        <option className="tag paragraph-text">Outdoor</option>
                    </select>
                    <div className="paragraph-text error">{errors.place && errors.place.message}</div>
                </div>
                <div>
                    <label htmlFor="guests" className="card-title">Number of guests</label>
                    <input id="guests" {...register("guests", { required: "Required" })} className="card paragraph-text" type="number" placeholder="1" min="1" max="50" />
                    <div className="paragraph-text error">{errors.guests && errors.guests.message}</div>
                </div>
                <div>
                    <label htmlFor="occasion" className="card-title">Occasion</label>
                    <select id="occasion" {...register("occasion", { required: "Required" })} className="card paragraph-text">
                        <option>No Occasion</option>
                        <option>Birthday</option>
                        <option>Engagement</option>
                        <option>Annivesary</option>
                    </select>
                    <div className="paragraph-text error">{errors.occasion && errors.occasion.message}</div>
                </div>
            </div>
            <button className="lead-text" type="submit">Next</button>
        </form>
    )
}

export default BookingForm;