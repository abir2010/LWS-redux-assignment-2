/* eslint-disable no-unused-vars */
import { useState } from "react";
import fromImg from "../../assets/icons/Frame.svg";
import gImg from "../../assets/icons/Vector (1).svg";
import clsImg from "../../assets/icons/Vector (3).svg";
import { useDispatch } from "react-redux";
import { addBooking } from "../../redux/booking/actions";

export default function Booking() {
    const [id, setId] = useState(1);
    const dispatch = useDispatch();

    const bookingData = {};

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(e.target);
        const element = e.target;
        for (let i = 0; i < element.elements.length; i++) {
            const selectedEl = element.elements[i];
            if (selectedEl.name) {
                bookingData[selectedEl.name] = selectedEl.value;
            }
        }
        bookingData["id"] = id;

        // dispatch
        dispatch(addBooking(bookingData));

        e.target.reset();
        setId((prevId) => prevId + 1);
        // console.log(bookingData);
    };

    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="first-hero lws-inputform"
                >
                    {/* From */}
                    <div className="des-from">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <img src={fromImg} alt="" />
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="from"
                                id="lws-from"
                                required
                            >
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox&apos;s Bazar</option>
                            </select>
                        </div>
                    </div>
                    {/* To */}
                    <div className="des-from">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <img src={fromImg} alt="" />
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="to"
                                id="lws-to"
                                required
                            >
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox&apos;s Bazar</option>
                            </select>
                        </div>
                    </div>
                    {/* Date */}
                    <div className="des-from">
                        <p>Journey Date</p>
                        <input
                            type="date"
                            className="outline-none px-2 py-2 w-full date"
                            name="date"
                            id="lws-date"
                            required
                        />
                    </div>
                    {/* Guests */}
                    <div className="des-from">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <img src={gImg} alt="" />
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="guests"
                                id="lws-guests"
                                required
                            >
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option value={1}>1 Person</option>
                                <option value={2}>2 Persons</option>
                                <option value={3}>3 Persons</option>
                                <option value={4}>4 Persons</option>
                            </select>
                        </div>
                    </div>
                    {/* Class */}
                    <div className="des-from !border-r-0">
                        <p>Class</p>
                        <div className="flex flex-row">
                            <img src={clsImg} alt="" />
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="ticketClass"
                                id="lws-ticketClass"
                                required
                            >
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>
                    <button className="addCity" type="submit" id="lws-addCity">
                        <svg
                            width="15px"
                            height="15px"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                        <span className="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
