import "./HeroSection.css";
import picture from "../res/HeroSectionPic.png";

function HeroSection() {
    return (
        <section className="hero">
            <div>
                <h1 className="display-title">Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                <p className="card-title">
                    Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
                </p>
                <button><span className="lead-text">Reserve a table</span></button>
            </div>
            <div>
                <img src={picture} alt="Little Lemon" />
            </div>
        </section>
    )
}

export default HeroSection;