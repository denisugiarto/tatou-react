import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Signin from "@/components/Signin";

const signin = () => {
    return (
        <Layout title="Sign In">
            <Navbar
                isLoginActive={false}
                isNavActive={false}
                link="/"
                title="Sign In"
            />
            <Signin />
        </Layout>
    );
};

export default signin;
