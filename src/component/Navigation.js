import "./Navigation.css";

function Navigation() {
    const sections = [
        "home", "about", "menu", "reservations", "order online", "login"
    ]

    return (
        <nav>
            <ul>
                {sections.map(section => {
                    return <li key={section}><a className="section-title" href={`#${section}`}>{section}</a></li>
                })}
            </ul>
        </nav>
    )
}

export default Navigation;