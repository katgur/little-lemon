import Footer from "../component/Footer";
import Header from "../component/Header";
import HeroSection from "../component/HeroSection";
import Highlights from "../component/Highlights";
import Testimonials from "../component/Testimonials";
import About from "../component/About";

function HomePage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <Highlights />
                <Testimonials />
                <About />
            </main>
            <Footer />
        </>
    )
}

export default HomePage;