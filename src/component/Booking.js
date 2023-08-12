import ProgressLayout from "./ProgressLayout";
import "./Booking.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { fetchAPI, submitAPI } from "../api/api";

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
                    <label className="card-title">Date</label>
                    <input {...register("date", { required: "Required" })} onChange={onDateChange} className="card paragraph-text" type="date" />
                    <div className="paragraph-text error">{errors.date && errors.date.message}</div>
                </div>
                <div>
                    <label className="card-title">Time</label>
                    <select {...register("time", { required: "Required" })} className="card paragraph-text">
                        {
                            availableTimes.map(time => {
                                return <option className="tag paragraph-text">{time}</option>
                            })
                        }
                    </select>
                    <div className="paragraph-text error">{errors.time && errors.time.message}</div>
                </div>
                <div>
                    <label className="card-title">Place</label>
                    <select {...register("place", { required: "Required" })} className="card paragraph-text">
                        <option className="tag paragraph-text">Indoor</option>
                        <option className="tag paragraph-text">Outdoor</option>
                    </select>
                    <div className="paragraph-text error">{errors.place && errors.place.message}</div>
                </div>
                <div>
                    <label className="card-title">Number of guests</label>
                    <input {...register("guests", { required: "Required" })} className="card paragraph-text" type="number" placeholder="1" min="1" max="50" />
                    <div className="paragraph-text error">{errors.guests && errors.guests.message}</div>
                </div>
                <div>
                    <label className="card-title">Occasion</label>
                    <select {...register("occasion", { required: "Required" })} className="card paragraph-text">
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

const CommentForm = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="card-title">If you have any comment leave it here</label>
                <textarea {...register("comment")} className="card paragraph-text"></textarea>
                <button className="lead-text" type="submit">Next</button>
            </div>
        </form>
    )
}

const Details = ({ booking, onConfirm }) => {
    return (
        <div>
            <ul>
                {

                    Object.keys(booking).map(key => {
                        return (
                            <li>
                                <span className="card-title">{key}</span>
                                <span className="paragraph-text">{booking[key]}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="lead-text">Back</button>
            <button onClick={onConfirm} className="lead-text">Confirm</button>
        </div>

    )
}

const Confirmed = () => (
    <div className="centered">
        <h2 className="subtitle">Order Confirmed!</h2>
        <button className="lead-text"><Link to="/">Home Page</Link></button>
    </div>
)

function Booking() {
    const booking = useRef({});
    const [stepIndex, setStepIndex] = useState(0);

    const onSubmit = (formData) => {
        booking.current = { ...booking.current, ...formData };
        setStepIndex(stepIndex + 1);
    }

    const onConfirm = () => {
        submitAPI(booking.current)
            .then(response => {
                if (JSON.parse(response).status === "success") {
                    setStepIndex(stepIndex + 1);
                }
            });
    }

    const steps = [
        {
            name: "Order Details",
            view: <BookingForm onSubmit={onSubmit} />,
        },
        {
            name: "Comment",
            view: <CommentForm onSubmit={onSubmit} />
        },
        {
            name: "Check Order Details",
            view: <Details booking={booking.current} onConfirm={onConfirm} />,
        },
        {
            name: "Confirmed",
            view: <Confirmed />
        }
    ]

    return (
        <section className="booking">
            <h1 className="display-title">Table Booking</h1>
            <ProgressLayout steps={steps} stepIndex={stepIndex} />
        </section>
    )
}

export default Booking;