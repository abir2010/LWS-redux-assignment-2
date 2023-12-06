import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Booking from "./components/Section/Booking";
import BookingList from "./components/Section/BookingList";
import "./styles.css";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Header />
            <Booking />
            <BookingList />
        </Provider>
    );
}

export default App;
