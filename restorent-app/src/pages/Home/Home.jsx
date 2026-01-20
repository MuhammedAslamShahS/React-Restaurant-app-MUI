import Welcome from "../welcome/Welcome";
import Partner from "../Partner/Partner";
import Booking from "../Booking/Booking";
import Dishes from "../Dishes/Dishesh";
import Ambience from "../Ambience/Ambience";
import Delivery from "../Delivery/Delivery";

function Home() {
    return (
        <>
            <Welcome />
            <Partner />
            <Booking />
            <Dishes />
            <Ambience />
            <Delivery />
        </>
    );
}

export default Home;
