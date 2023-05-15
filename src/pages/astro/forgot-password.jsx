import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Input from "@/components/common/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ForgotPassword = () => {
    return (
        <Layout title="Forgot Password">
            <Navbar
                isLoginActive={false}
                isNavActive={true}
                link="/"
                title="Forgot Your Password"
                slot="header-content"
            />
            <div className="container text-center bg-white mt-4 py-6">
                <Image
                    src="/assets/illustrations/forgot-password.svg"
                    className="h-auto max-w-full mx-auto"
                    alt=""
                />
                <h1 className="text-xl font-semibold mt-6">
                    Forgot Your Password
                </h1>
                <p className="text-xs mt-2 mb-4">
                    Lost your password? Enter your email for reset instructions.
                </p>
                <Input
                    label="Email"
                    type="email"
                    placeholder="john@gmail.com"
                    icon="fas fa-envelope"
                />
                <button className="btn btn-block btn-primary text-white btn-sm mt-4">
                    Get New Password
                </button>
                <div className="text-sm mt-4">
                    Don&lsquo;t  have account?
                    <Link href="/signup" className="text-primary">
                        Sign up
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default ForgotPassword;
