import React from "react";
import Badge from "./common/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavigationLink = ({
    title,
    useBadge = false,
    link,
    badgeNumber = 0,
    children,
}) => {
    return (
        <section className="p-4 bg-white mt-4">
            <Link href={link} className=" flex items-center font-medium">
                {title}
                {useBadge && <Badge number={badgeNumber} classes="ml-2" />}
                <FontAwesomeIcon
                    icon={"chevron-right"}
                    className="ml-auto text-primary"
                />
            </Link>
            <children />
        </section>
    );
};

export default NavigationLink;
