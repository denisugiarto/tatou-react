import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    <FontAwesomeIcon
                        icon={"circle"}
                        className="text-primary mr-1 h-2 w-2"
                    />
                    {times}
                </p>
            </div>
            <p className="text-sm mt-1">{message}</p>
        </div>
    );
};

export default CommentItem;
