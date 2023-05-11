import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const VerifyEmail = () => {
    return (
        <div>
            <Layout title="Sign Up Verify">
                <Navbar
                    isLoginActive={false}
                    isNavActive={true}
                    link="/"
                    title="Register"
                    slot="header-content"
                />
                <div className="container text-center bg-white mt-4 py-6">
                    <Image
                        src="/assets/illustrations/signup.svg"
                        className="h-auto max-w-full mx-auto mt-4"
                        alt=""
                        height={120}
                        width={120}
                    />
                    <h1 className="text-xl font-semibold mt-6">
                        Verify your account
                    </h1>
                    <p className="text-xs mt-2">
                        Please check your email, we’ve sent a link verification
                        to john@gmail.com
                    </p>
                    <p className="text-sm mt-6">Didn’t get the code?</p>
                    <div className="text-sm mt-2">
                        <Link href="#" className="text-primary">
                            Resend code
                        </Link>{" "}
                        or{" "}
                        <Link
                            href="signup-change-email"
                            className="text-primary"
                        >
                            Change Email
                        </Link>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default VerifyEmail;
