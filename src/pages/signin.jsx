import Layout from "@/components/Layout";
import LoginOptions from "@/components/LoginOptions";
import Navbar from "@/components/Navbar";
import Input from "@/components/common/Input";
import Image from "next/image";
import React from "react";

const signin = () => {
    return (
        <Layout title="Sign In">
            <Navbar
                isLoginActive={false}
                isNavActive={true}
                link="/"
                title="Sign In"
            />
            <div className="container text-center bg-white mt-4 py-6">
                <h1 className="text-xl font-semibold text-center">
                    Ready to take action? Sign in to get started.
                </h1>
                <Image
                    src="/assets/illustrations/signin.svg"
                    className="h-auto w-auto max-w-full mx-auto mt-4"
                    alt="sign in illustration"
                    width={240}
                    height={254}
                    priority={true}
                />
                <LoginOptions />
                <p className="divider">or</p>
                <form action="">
                    <div className="flex flex-col gap-2">
                        <Input
                            label="Email"
                            type="email"
                            placeholder="john@gmail.com"
                            icon="fas fa-envelope"
                            errorMessage="Your email is not registered"
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="******"
                            errorMessage="Invalid password, please try again."
                        />
                    </div>
                    <div className="mt-2 text-end text-sm">
                        <a href="#" className="text-primary">
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-block btn-primary text-white btn-sm mt-4"
                    >
                        Sign In
                    </button>
                </form>
                <label className="block mt-4 lg:mt-6 text-center text-sm">
                    Don&lsquo;t have an account?{" "}
                    <a href="signup" className="text-primary">
                        Sign Up
                    </a>
                </label>
            </div>
        </Layout>
    );
};

export default signin;
