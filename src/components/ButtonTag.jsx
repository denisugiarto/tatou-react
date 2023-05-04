import React from "react";

const ButtonTag = ({ label, isActive = false, children }) => {
    return (
        <button
            className={`btn border  hover:bg-primary-surface hover:border-primary-border hover:text-primary ${
                isActive
                    ? " !text-primary bg-primary-surface !border-primary-border"
                    : "border-neutral-400"
            } rounded-full px-3 h-7 text-xs`}
        >
            {label}
            {children}
        </button>
    );
};

export default ButtonTag;
