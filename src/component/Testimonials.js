import pic1 from "../res/Picture Mock.png";
import pic2 from "../res/Rectangle 7.png";
import pic3 from "../res/Picture Mock1.png";
import pic4 from "../res/Picture Mock2.png";
import star from "../res/star.png";
import "./Testimonials.css";

function Testimonials() {
    const data = [
        {
            id: 1,
            rating: 5,
            name: "John Doe",
            image: pic1,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        {
            id: 2,
            rating: 5,
            name: "John Doe",
            image: pic2,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 3,
            rating: 5,
            name: "Jane Doe",
            image: pic3,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
            id: 4,
            rating: 5,
            name: "Jane Doe",
            image: pic4,
            review: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        }
    ]

    const Card = ({ rating, name, image, review }) => {
        return (
            <div className="card">
                <div className="star-section">
                    {Array(rating).fill(<img width="20px" height="20px" src={star} alt="star" />)}
                </div>
                <div className="persona-section">
                    <img src={image} alt={name} />
                    <span className="card-title">{name}</span>
                </div>
                <p className="paragraph-text">{review}</p>
            </div>
        )
    }

    return (
        <section className="testimonials">
            <h2 className="display-title">Testimonials</h2>
            <div>
                {
                    data.map(review => {
                        return <Card key={review.id} {...review} />
                    })
                }
            </div>
        </section>
    )
}

export default Testimonials;