function Navigation() {
    const sections = [
        "Home", "About", "Menu", "Reservations", "Order Online", "Login"
    ]

    return (
        <nav>
            <ul>
                {sections.map(section => {
                    return <li><a href={`#${section}`}>{section}</a></li>
                })}
            </ul>
        </nav>
    )
}

export default Navigation;