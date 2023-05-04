import React, { useEffect, useState } from "react";

const FixedButton = ({ id, children }) => {
    const [isShow, setIsShow] = useState(false);
    // let sectionNewCampaign = document.querySelector("#sectionCreateCampaign"),
    //     buttonNewCampaign = document.querySelector("#btnNewCampaign");
    // window.addEventListener("scroll", function () {
    //     var position = sectionNewCampaign.getBoundingClientRect();
    //     if (
    //         position.top <= -150 &&
    //         buttonNewCampaign.classList.contains("hidden")
    //     ) {
    //         buttonNewCampaign.classList.remove("hidden");
    //         buttonNewCampaign.classList.add("fixed");
    //     }
    //     if (
    //         position.top > -150 &&
    //         buttonNewCampaign.classList.contains("fixed")
    //     ) {
    //         buttonNewCampaign.classList.remove("fixed");
    //         buttonNewCampaign.classList.add("hidden");
    //     }
    // });
    useEffect(() => {
        const handleShowButtonOnScroll = () => {
            const sectionNewCampaign = document.querySelector(
                "#sectionCreateCampaign"
            );
            let position = sectionNewCampaign.getBoundingClientRect();
            if (position.top <= -150 && !isShow) {
                setIsShow(true);
            }
            if (position.top > -150 && isShow) {
                setIsShow(false);
            }
        };

        window.addEventListener("scroll", handleShowButtonOnScroll);

        return () => {
            window.removeEventListener("scroll", handleShowButtonOnScroll);
        };
    }, [isShow]);

    return (
        <div
            id={id}
            className={`${
                isShow ? "fixed" : "hidden"
            } right-4 sm:right-[unset] sm:ml-[20.5rem] bottom-24`}
        >
            {children}
        </div>
    );
};

export default FixedButton;
