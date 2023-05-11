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
            <div class="container">
                <Image
                    src="/assets/illustrations/error-404.svg"
                    class="mt-20 mx-auto"
                    height={320}
                    width={384}
                    alt="illustration page not found"
                />
                <div class="text-center">
                    <Link href="/" class="btn btn-primary mt-8">
                        Back to Home
                    </Link>
                </div>
                <BottomNavbar activeMenu={0} />
            </div>
        </Layout>
    );
};

export default PageNotFound;
