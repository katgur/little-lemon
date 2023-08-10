import SpecialCard from "./SpecialCard";
import greekSalad from "../res/greek salad.png";
import lemonDessert from '../res/lemon dessert.png';
import brucetta from "../res/bruchetta.png";
import "./Highlights.css";

function Highlights() {
    const specials = [
        {
            name: "Greek Salad",
            price: "$12.99",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
            image: greekSalad,
        },
        {
            name: "Lemon Dessert",
            price: "$4.99",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
            image: lemonDessert,
        },
        {
            name: "Bruchetta",
            price: "$5.99",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
            image: brucetta,
        }
    ]

    return (
        <section className="highlights">
            <div>
                <h1 className="display-title">Specials</h1>
                <button><span className="lead-text">Online Menu</span></button>
            </div>
            <div>
                {specials.map(special => {
                    return <SpecialCard key={special.name} {...special} />
                })}
            </div>
        </section>
    )
}

export default Highlights;