import Header from "./components/Header/Header";
import Booking from "./components/Section/Booking";
import BookingList from "./components/Section/BookingList";
import "./styles.css";

function App() {
    return (
        <div>
            <Header />
            <Booking />
            <BookingList />
        </div>
    );
}

export default App;
