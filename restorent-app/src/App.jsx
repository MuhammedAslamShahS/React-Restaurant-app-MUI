import Header from "./components/Header/Header";
import Welcome from "./pages/welcome/Welcome";
import Footer from "./components/Footer/Footer";
import Partner from "./pages/partner/Partner";
import Booking from "./pages/Booking/Booking";
import Dishesh from "./pages/Dishes/Dishesh";
import Ambience from "./pages/ambience/Ambience";

const App = () => {
    return (
        <div>
            <Header />
            <Welcome />
            <Partner />
            <Booking />
            <Dishesh />
            <Ambience />
            <Footer />
        </div>
    );
};

export default App;
