//     cardType?: "worker" | "item" | "address" | "more";

const CardItem = ({ cardType = "worker" }) => {
    return (
        <>
            {cardType === "worker" && (
                <div className="bg-primary-surface rounded px-4 py-2 text-xs">
                    <i className="fas fa-hard-hat text-primary mr-2 text-sm" />
                    <span className="text-error font-medium">
                        15<span className="text-primary-pressed">/20</span>
                    </span>
                    Worker Mahi
                </div>
            )}
            {cardType === "item" && (
                <div className="bg-primary-surface rounded px-4 py-2 text-xs">
                    <i className="fas fa-boxes text-primary mr-2 text-sm" />
                    <span className="text-error font-medium">
                        15<span className="text-primary-pressed">/20</span>
                    </span>{" "}
                    Item
                </div>
            )}
            {cardType === "address" && (
                <div className="col-span-2 bg-primary-surface rounded px-4 py-2  flex gap-2 items-center">
                    <div className="flex-none">
                        <i className="far fa-map text-primary" />
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
