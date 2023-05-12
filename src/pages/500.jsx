import BottomNavbar from "@/components/BottomNavbar";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const PageInternalServerError = () => {
    return (
        <Layout title="Server error 500">
            <Navbar
                isLogin={true}
                isLoginActive={true}
                slot="header-content"
                title="Tatou"
            />
            <div className="container">
                <Image
                    src="/assets/illustrations/error-500.svg"
                    className="mt-20 mx-auto"
                    height={320}
                    width={384}
                    alt="illustration Internal server error"
                />
                <div className="text-center">
                    <Link href="/" className="btn btn-primary mt-8">
                        Back to Home
                    </Link>
                </div>
                <BottomNavbar activeMenu={0} />
            </div>
        </Layout>
    );
};

export default PageInternalServerError;
