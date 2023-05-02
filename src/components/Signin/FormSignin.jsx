import Input from "../common/Input";

const FormSignin = () => {
    return (
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
    );
};

export default FormSignin;
