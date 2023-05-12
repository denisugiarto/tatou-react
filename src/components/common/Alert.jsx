import { clearError } from "@/store/errorSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";

const Alert = ({ type = "neutral", message }) => {
    const icons = [
        "check-circle",
        "info-circle",
        "exclamation-circle",
        "exclamation-triangle",
        "clock",
    ];

    let icon =
        type === "success"
            ? icons[0]
            : type === "info"
            ? icons[1]
            : type === "error"
            ? icons[2]
            : type === "warning"
            ? icons[3]
            : icons[4];
    const dispatch = useDispatch();
    const closeHandler = () => {
        dispatch(clearError());
    };
    return (
        <div
            className={`alert alert-${type} rounded-lg ${
                type != "neutral" ? "text-white" : ""
            }`}
        >
            <div className="w-full">
                <FontAwesomeIcon icon={icon} />
                <span className="mr-auto">{message}</span>
                <button onClick={closeHandler}>
                    <svg
                        className="fill-current h-6 w-6 ml-auto"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Alert;
