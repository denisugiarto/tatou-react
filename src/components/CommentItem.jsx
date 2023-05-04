import Image from "next/image";
import React from "react";

const CommentItem = ({ message, name, times }) => {
    return (
        <div className="comment">
            <div className="flex gap-2 items-center">
                <Image
                    src="/assets/profile.png"
                    alt=""
                    className="rounded-full h-6 w-6"
                />
                <h3 className="text-sm font-medium text-primary">{name}</h3>
                <p className="text-xs ml-auto text-neutral-400 flex items-center">
                    <i className="fas fa-circle mr-1 text-primary w-2 h-2"></i>
                    {times}
                </p>
            </div>
            <p className="text-sm mt-1">{message}</p>
        </div>
    );
};

export default CommentItem;
