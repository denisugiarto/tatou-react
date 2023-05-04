import { useMounted } from "@/hooks/useMounted";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const LinkIcon = ({ icons, href, className }) => {
    return (
        <Link
            href={href}
            className="border border-neutral-300 rounded-full w-10 h-10 hover:bg-neutral-50 shadow-lg"
        >
            <FontAwesomeIcon
                icon={icons}
                className={`text-xl leading-none pt-2 ${className}`}
            />
        </Link>
    );
};

export default LinkIcon;
