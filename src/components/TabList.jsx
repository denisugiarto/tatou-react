import Link from "next/link";
import TabDate from "./TabDate.astro";

import React from "react";

const TabList = ({
    isActive = 0,
    labels = [],
    setLabelsLength = 0,
    children,
}) => {
    return (
        <div
            className={`tabs grid grid-cols-${
                setLabelsLength === 0 ? labels.length : setLabelsLength
            }`}
        >
            {labels.map((tab, index) => (
                <Link
                    key={index}
                    className={`tab tab-bordered hover:bg-primary-surface active:bg-primary ${
                        isActive === index ? "tab-active" : ""
                    }`}
                >
                    {tab}
                </Link>
            ))}
            {children}
        </div>
    );
};

export default TabList;
