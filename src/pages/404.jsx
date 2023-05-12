import BottomNavbar from "@/components/BottomNavbar";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
    return (
        <Layout title="Page not found">
            <Navbar
                isLogin={true}
                isLoginActive={true}
                slot="header-content"
                title="Tatou"
            />
            <div className="container">
                <Image
                    src="/assets/illustrations/error-404.svg"
                    className="mt-20 mx-auto"
                    height={320}
                    width={384}
                    alt="illustration page not found"
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

export default PageNotFound;
