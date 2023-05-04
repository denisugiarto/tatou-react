import React from "react";

const CardTransactionItem = ({
    time,
    description,
    id,
    value = 1,
    type = "Money Received",
}) => {
    const styles =
        type === "Money Received"
            ? "success"
            : type === "Withdraw"
            ? "info"
            : "error";
    return (
        <div className="border-b bg-white p-4">
            <p className="text-xs">
                {time}
                <span className="float-right font-medium">{id}</span>
            </p>
            <p className="font-medium my-1 truncate" title={description}>
                {description}
            </p>
            <div className="flex justify-between">
                {
                    <>
                        <div
                            className={`flex-none text-${styles} bg-${styles}-surface rounded-full font-medium text-xs py-1 px-3`}
                        >
                            {type}
                        </div>
                        <div className={`font-medium text-${styles} `}>
                            {`${styles === "success" ? "+" : "-"} NZ${value}`}
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default CardTransactionItem;
