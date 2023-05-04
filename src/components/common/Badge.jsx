import React from "react";

const Badge = ({ number, classes }) => {
    return (
        <span
            className={`text-primary px-2 border border-primary-border bg-primary-surface rounded-lg text-lg ${classes}`}
        >
            {number}
        </span>
    );
};

export default Badge;
