import LoginOptions from "@/components/LoginOptions";
import FooterSignin from "@/components/Signin/FooterSignin";
import FormSignin from "@/components/Signin/FormSignin";
import Image from "next/image";
import AuthHeading from "../AuthHeading";

const Signin = () => {
    return (
        <div className="container text-center bg-white mt-4 py-6">
            <AuthHeading text="Ready to take action? Sign in to get started." />
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
            <FormSignin />
            <FooterSignin />
        </div>
    );
};

export default Signin;
