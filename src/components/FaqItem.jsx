import React from "react";

const FaqItem = ({ question, answer, children }) => {
    return (
        <div tabindex="0" className="collapse collapse-arrow">
            <div className="collapse-title font-medium text-primary after:!h-3 after:!w-3 after:!shadow-[3px_3px]">
                {question}
            </div>
            <div className="collapse-content">
                <p className="text-sm">
                    {answer}
                    {children}
                </p>
            </div>
        </div>
    );
};

export default FaqItem;
