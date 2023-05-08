import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pagination = () => {
    return (
        <div className="btn-group flex mt-4 gap-4 items-center justify-center">
            <button className="btn btn-outline btn-primary !btn-circle btn-sm btn-disabled">
                <FontAwesomeIcon icon={"chevron-left"} />
            </button>
            <button className="btn btn-outline btn-primary btn-sm btn-active !rounded-lg !text-white">
                1
            </button>
            <button className="btn btn-outline btn-primary btn-sm !rounded-lg">
                2
            </button>
            <button className="btn btn-outline btn-primary btn-sm !rounded-lg">
                3
            </button>
            <button className="btn btn-outline btn-primary !btn-circle btn-sm">
                <FontAwesomeIcon icon={"chevron-right"} />
            </button>
        </div>
    );
};

export default Pagination;
