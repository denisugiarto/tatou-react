import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MaraeUpdateItem = () => {
    return (
        <section className="px-4 py-2 bg-white mt-4">
            <div className="flex gap-2">
                <div className="flex-none text-primary bg-primary-surface border border-primary-border rounded-lg w-6 h-6 text-center">
                    <FontAwesomeIcon icon={"bell"} />
                </div>
                <h2 className="basis-8/12 font-medium text-primary">
                    Buy material for Buy material for Buy material for
                </h2>
                <p className="basis-3/12 text-2xs">36 minutes ago</p>
            </div>
            <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur. Sit rutrum condimentum
                natoque malesuada blandit est augue pellentesque. Aliquam mattis
                pellentesque vel morbi eget nec non. Est nec dapibus sem eu
                gravida ut tristique.
            </p>
        </section>
    );
};

export default MaraeUpdateItem;
