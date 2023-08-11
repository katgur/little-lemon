import picture from "../res/About.png";
import "./About.css";

function About() {
    return (
        <section className="about">
            <div>
                <h1 className="display-title">Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                <p className="card-title">
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>
            </div>
            <div>
                <img src={picture} alt="Little Lemon" />
            </div>
        </section>
    )
}

export default About;