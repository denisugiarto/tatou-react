import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Alert from "@/components/common/Alert";
import Input from "@/components/common/Input";
import { setError } from "@/store/errorSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangePassword = () => {
    const dispatch = useDispatch();
    const errorMessage = useSelector((state) => state.error);
    useEffect(() => {
        setTimeout(() => {
            dispatch(setError("Yah error coy"));
        }, 2000);
    }, []);

    return (
        <Layout title="Change Password">
            <Navbar
                isLoginActive={false}
                isNavActive={true}
                link="/"
                title="Edit Profile"
                slot="header-content"
            />
            <div className="container text-center bg-white mt-4 py-6">
                <div className="flex flex-col gap-4 mb-4">
                    {errorMessage && (
                        <Alert type="error" message={errorMessage} />
                    )}
                </div>
                <form action="">
                    <div className="flex flex-col gap-4">
                        <Input
                            label="Current Password"
                            type="password"
                            placeholder="******"
                            errorMessage="Current password doesn't match"
                        />
                        <Input
                            label="New Password"
                            type="password"
                            placeholder="******"
                        />
                        <Input
                            label="Confirmation Password"
                            type="password"
                            placeholder="******"
                            errorMessage="Password Confirmation does not match"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-block btn-primary text-white btn-sm mt-4 btn-disabled"
                    >
                        Save
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default ChangePassword;
