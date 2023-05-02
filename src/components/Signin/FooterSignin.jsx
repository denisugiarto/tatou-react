import Link from "next/link";
import React from "react";

const FooterSignin = () => {
    return (
        <label className="block mt-4 lg:mt-6 text-center text-sm">
            Don&lsquo;t have an account?{" "}
            <Link href="signup" className="text-primary">
                Sign Up
            </Link>
        </label>
    );
};

export default FooterSignin;
