import { ADDBOOKING, DELETEBOOKING } from "./actionTypes";

export const addBooking = (value) => {
    return {
        type: ADDBOOKING,
        payload: value,
    };
};

export const deleteBooking = (value) => {
    return {
        type: DELETEBOOKING,
        payload: value,
    };
};
