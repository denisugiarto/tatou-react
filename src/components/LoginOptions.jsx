import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import LinkIcon from "./LinkIcon";

const LoginOptions = () => {
    return (
        <div className="flex gap-12 justify-center mt-4">
            <LinkIcon href="#" icons={["fab", "google"]} className="text-error" />
            <LinkIcon href="#" icons={["fab", "facebook-f"]} className="text-[#4267B2]" />
        </div>
    );
};

export default LoginOptions;
