import ProgressLayout from "./ProgressLayout";
import "./Booking.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { submitAPI } from "../api/api";
import BookingForm from "./BookingForm";

const CommentForm = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm();

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