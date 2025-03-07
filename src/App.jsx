import AdvantagesSection from "./modules/Advantages.jsx";
import CopyrightSection from "./modules/Copyright.jsx";
import InfoSection from "./modules/Info.jsx";
import Header from "./modules/Header.jsx";
import Footer from "./modules/Footer.jsx";
import "./App.css";

export default function App() {
    return (
        <div className="page">
            <Header />

            <main className="main">
                <AdvantagesSection />
                <InfoSection />
            </main>

            <footer className="footer" id="контакти">
                <Footer />
                <CopyrightSection />
            </footer>
        </div>
    );
}
