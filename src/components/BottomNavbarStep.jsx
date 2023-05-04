import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BottomNavbarStep = ({
    isStepActive = true,
    isCustom = false,
    children,
}) => {
    return (
        <section
            id="bottom-navigation"
            className="bg-primary-surface px-2 py-4 md:px-4 md:py-6 fixed bottom-0 z-[1000] w-full max-w-[30rem]"
        >
            {!isCustom && (
                <div className="flex gap-2 md:gap-6">
                    <a
                        href="/support-maraehapu-step3"
                        className="btn btn-sm btn-warning"
                    >
                        <FontAwesomeIcon icon={"arrow-circle-left"} className="mr-0 sm:mr-2" />
                        <span className="hidden sm:inline">Back</span>
                    </a>
                    <button className="btn btn-sm btn-outline btn-primary bg-white">
                        Save as draft
                    </button>
                    <a
                        href="/support-maraehapu-step5"
                        className="btn btn-sm btn-success grow"
                    >
                        Get Support Now
                    </a>
                </div>
            )}
            {children}
            {isStepActive && (
                <div className="grid grid-cols-5 gap-2 md:gap-4 mt-4">
                    <div className="border border-primary rounded-full h-4 bg-white" />
                    <div className="border border-primary rounded-full h-4 bg-white" />
                    <div className="border border-primary rounded-full h-4 bg-white" />
                    <div className="border border-primary rounded-full h-4 bg-primary" />
                    <div className="border border-primary rounded-full h-4 bg-white" />
                </div>
            )}
        </section>
    );
};

export default BottomNavbarStep;
