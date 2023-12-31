import logo from "../res/Little Lemon Footer.png";
import "./Footer.css";

function Footer() {
    const menu = [
        {
            header: "Navigation",
            options: ["Home", "About", "Menu", "Reservations", "Order Online", "Login"]
        },
        {
            header: "Contact",
            options: ["Email", "Phone", "Address"],
        },
        {
            header: "Social Media",
            options: ["Link #1", "Link #2", "Link #3", "Link #4"],
        }
    ]

    const Column = ({ header, options }) => {
        return (
            <div>
                <h5 className="section-title">{header}</h5>
                <ul>
                    {
                        options.map(option => {
                            return <li key={option}><a className="paragraph-text" href={`#${option}`}>{option}</a></li>
                        })
                    }
                </ul>
            </div>
        )
    }

    return (
        <footer>
            <div>
                <img src={logo} alt="Little Lemon" />
            </div>
            {
                menu.map(column => {
                    return <Column key={column.header} {...column} />
                })
            }
        </footer>
    )
}

export default Footer;