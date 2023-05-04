import BottomNavbar from "@/components/BottomNavbar";
import CardSupport from "@/components/CardSupport";
import FixedButton from "@/components/FixedButton";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
    return (
        <Layout title="Homepage">
            <Navbar
                isLogin={true}
                isLoginActive={true}
                slot="header-content"
                title="Tatou"
            />
            <div className="container mt-4 px-0 relative flex flex-col gap-4 last:mb-20">
                <div
                    id="sectionCreateCampaign"
                    className="bg-white px-4 py-6 bg-no-repeat bg-cover"
                    style={{
                        backgroundImage:
                            "url('/assets/images/bg-homepage.webp')",
                    }}
                >
                    <div className="grid grid-cols-2 gap-4 items-center">
                        <div className="col">
                            <Image
                                src="/assets/illustrations/save-earth.webp"
                                alt="illustration"
                                className=""
                                width={200}
                                height={200}
                            />
                        </div>
                        <div>
                            <h1 className="font-semibold text-3xl">
                                Empower Support Change!
                            </h1>
                            <button className="btn btn-primary mt-8 px-2 text-xs sm:text-sm sm:px-4">
                                Create New Campaign
                            </button>
                        </div>
                    </div>
                </div>
                <section className="bg-white px-4 py-6">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-semibold">
                            Support Marae/Hapū
                        </h2>
                        <a href="" className="text-primary text-sm font-medium">
                            See more
                        </a>
                    </div>
                    <div className="flex gap-4 overflow-x-auto">
                        <CardSupport
                            isShowItems={true}
                            imgUrl="/assets/images/img-disaster-1.webp"
                            imgDescription="flood"
                        />
                        <CardSupport
                            isShowItems={true}
                            imgUrl="/assets/images/img-disaster-2.webp"
                            imgDescription="flood"
                        />
                    </div>
                </section>
                <section className="bg-white px-4 py-6">
                    <h2 className="text-xl font-semibold mb-2">
                        Funding Support
                    </h2>
                    <div className="flex gap-4 overflow-x-auto">
                        <CardSupport
                            imgUrl="/assets/images/disaster-4.webp"
                            imgDescription="flood"
                        />
                        <CardSupport
                            imgUrl="/assets/images/disaster-5.webp"
                            imgDescription="flood"
                        />
                    </div>
                </section>
                <section className="bg-white px-4 py-6">
                    <h2 className="text-xl font-semibold mb-2">Mahi Support</h2>
                    <div className="flex flex-col gap-4">
                        <CardSupport
                            imgUrl="/assets/images/img-test.png"
                            imgDescription="flood"
                            isShowItems={true}
                            isLandscape={true}
                        />
                        <CardSupport
                            imgUrl="/assets/images/disaster-5.webp"
                            imgDescription="flood"
                            isShowItems={true}
                            isLandscape={true}
                        />
                    </div>
                </section>

                <BottomNavbar activeMenu={0} />
                <FixedButton id="btnNewCampaign">
                    <button className="btn btn-primary font-medium drop-shadow-lg">
                        <FontAwesomeIcon icon={"plus-circle"} className="mr-2" />
                        Campaign
                    </button>
                </FixedButton>
            </div>
        </Layout>
    );
}
