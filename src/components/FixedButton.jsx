import React from "react";

const FixedButton = ({ id, children }) => {
    return (
        <div
            id={id}
            className="hidden right-4 sm:right-[unset] sm:ml-[20.5rem] bottom-24"
        >
            {children}
        </div>
    );
};

export default FixedButton;
