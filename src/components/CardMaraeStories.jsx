import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CardMaraeStories = () => {
    return (
        <div className="card border border-primary-border rounded-lg">
            <div className="card-body p-2">
                <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-full bg-gray-500 flex-none"></div>
                    <div className="flex-auto">
                        <h5 className="text-lg font-medium">Name</h5>
                        <h5 className="text-xs text-gray-600 truncate">
                            Campaign name Campaign name
                        </h5>
                    </div>
                    <div className="flex-auto flex gap-2 items-center w-full">
                        <div className="block w-2 h-2 rounded-full bg-primary"></div>
                        <p className="text-gray-600 text-xs">9 Minutes</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Malesuada
                        porttitor viverra netus sed et. Penatibus sit tempus
                        enim elementum eu.
                    </p>
                    <div className="flex justify-between">
                        <button className="btn btn-circle btn-primary text-white">
                          <FontAwesomeIcon icon={"love"} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardMaraeStories;
