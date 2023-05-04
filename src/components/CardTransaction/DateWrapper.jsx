import React from "react";

const DateWrapper = ({ date, children }) => {
    return (
        <>
            <h5 className="font-medium text-lg border-b px-4 py-2">{date}</h5>
            {children}
        </>
    );
};

export default DateWrapper;
