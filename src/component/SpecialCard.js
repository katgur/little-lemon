import "./SpecialCard.css";

function SpecialCard({ name, price, description, image }) {
    return (
        <div className="special">
            <img src={image} alt="special" />
            <div>
                <h5 className="card-title">{name}</h5>
                <h6 className="card-title">{price}</h6>
                <p className="paragraph-text">{description}</p>
                <span className="highlight-text">Order a delivery</span>
            </div>
        </div>
    )
}

export default SpecialCard;