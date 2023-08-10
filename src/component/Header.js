import Navigation from "./Navigation";
import logo from "../res/Logo.svg";
import "./Header.css";

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <Navigation />
        </header>
    )
}

export default Header;