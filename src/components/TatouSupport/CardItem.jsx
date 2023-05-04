//     cardType?: "worker" | "item" | "address" | "more";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardItem = ({ cardType = "worker" }) => {
    return (
        <>
            {cardType === "worker" && (
                <div className="bg-primary-surface rounded px-4 py-2 text-xs">
                    <FontAwesomeIcon
                        icon={"hard-hat"}
                        className="mr-2 text-sm text-primary"
                    />
                    <span className="text-error font-medium">
                        15<span className="text-primary-pressed">/20</span>
                    </span>
                    Worker Mahi
                </div>
            )}
            {cardType === "item" && (
                <div className="bg-primary-surface rounded px-4 py-2 text-xs">
                    <FontAwesomeIcon
                        icon={"boxes"}
                        className="text-primary mr-2 text-sm"
                    />
                    <span className="text-error font-medium">
                        15<span className="text-primary-pressed">/20</span>
                    </span>{" "}
                    Item
                </div>
            )}
            {cardType === "address" && (
                <div className="col-span-2 bg-primary-surface rounded px-4 py-2  flex gap-2 items-center">
                    <div className="flex-none">
                        <FontAwesomeIcon icon={"map"} className="text-primary" />
                    </div>
                    <p className="text-xs">
                        65 Oakridge Grove, Huntingdon, Hamilton, 3210
                    </p>
                </div>
            )}
            {cardType === "more" && (
                <div className=" bg-primary-surface rounded px-4 py-2 text-xs">
                    more
                </div>
            )}
        </>
    );
};

export default CardItem;
