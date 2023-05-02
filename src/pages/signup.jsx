import AuthHeading from "@/components/AuthHeading";
import Layout from "@/components/Layout";
import LoginOptions from "@/components/LoginOptions";
import Navbar from "@/components/Navbar";
import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import Image from "next/image";

const signup = () => {
    return (
        <>
            <Layout title="Sign Up">
                <Navbar
                    isLoginActive={false}
                    isNavActive={false}
                    link="/"
                    title="Sign Up"
                />
                <div className="container text-center bg-white mt-4 py-6">
                    <AuthHeading>
                        Join us to make a difference and create positive change.
                    </AuthHeading>
                    <Image
                        src="/assets/illustrations/signup.svg"
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
                                errorMessage="Email has already been taken"
                            />
                            <Input
                                label="Name"
                                type="text"
                                placeholder="John Doe"
                                icon="fas fa-user"
                                errorMessage="Name is required"
                            />
                            <Input
                                label="Password"
                                type="password"
                                placeholder="******"
                            />
                            <Input
                                label="Confirmation Password"
                                type="password"
                                placeholder="******"
                                errorMessage="Password Confirmation does not match"
                            />
                            <a
                                href="#modalSuccess"
                                className="btn btn-block btn-primary text-white btn-sm mt-4"
                            >
                                Sign Up
                            </a>
                        </div>
                    </form>
                    <label className="block mt-4 text-center text-sm">
                        Already have account?{" "}
                        <a href="signin" className="text-primary">
                            Sign in
                        </a>
                    </label>
                </div>
            </Layout>
            <Modal
                id="modalSuccess"
                title="Congratulations!"
                description="Your account has been registered, now what? need to think for copywriting here lol"
            />
        </>
    );
};

export default signup;
