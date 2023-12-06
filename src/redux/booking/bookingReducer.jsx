import { ADDBOOKING, DELETEBOOKING } from "./actionTypes";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDBOOKING: {
            const updatedState = [...state];
            updatedState.push(action.payload);
            return updatedState;
        }
        case DELETEBOOKING: {
            const updatedState = state.filter(
                (booking) => booking.id !== action.payload
            );
            return updatedState;
        }
        default:
            return state;
    }
};

export default bookingReducer;
