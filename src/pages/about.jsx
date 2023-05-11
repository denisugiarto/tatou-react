import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const About = () => {
    return (
        <Layout title="About Us">
            <Navbar
                isLoginActive={false}
                isNavActive={true}
                link="/"
                title="About Us"
                slot="header-content"
            />
            <div className="container px-0 bg-white">
                <section
                    style="background: url('/assets/images/bg-about-us-1.webp'); background-size: cover;"
                    className="p-6"
                >
                    <div className="grid grid-cols-2 gap-2">
                        <h2 className="font-semibold text-3xl self-end">
                            Giving Hope Empowering Communities
                        </h2>
                        <div className="self-start mb-12">
                            <Image
                                src="/assets/illustrations/about-us.webp"
                                alt="about us illustration"
                                width={120}
                                height={120}
                            />
                        </div>
                    </div>
                </section>

                <section className="p-4 mt-4">
                    <h6>Lorem Ipsum</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero dolorem earum ex cum exercitationem ea!
                    </p>
                </section>
                <section className="bg-primary-border flex items-center justify-center m-4 rounded-2xl h-64">
                    Images or Video
                </section>
                <section
                    id="howItWorks"
                    className="p-6 mt-4 relative"
                    style="background: url('/assets/images/bg-about-us-2.webp'); background-size: cover;"
                >
                    <h2 className="text-3xl font-semibold text-right absolute top-12 right-8">
                        How it
                        <br className="inline sm:hidden" /> works
                    </h2>
                    <div className="flex flex-col gap-11">
                        <div className="bg-white p-2 rounded-2xl w-32 text-center">
                            <div className="mt-2">
                                <FontAwesomeIcon
                                    icon={"edit"}
                                    className="text-primary text-3xl"
                                />
                            </div>
                            <p className="font-medium mt-4">Create</p>
                        </div>
                        <div className="bg-white p-2 rounded-2xl w-28 text-center self-center">
                            <div className="mt-2">
                                <FontAwesomeIcon
                                    icon={"bullhorn"}
                                    className="text-primary text-3xl"
                                />
                            </div>
                            <p className="font-medium mt-4">Share</p>
                        </div>
                        <div className="bg-white p-2 rounded-2xl w-32 text-center self-end">
                            <div className="mt-2">
                                <FontAwesomeIcon
                                    icon={"hand-holding-heart"}
                                    className="text-primary text-3xl"
                                />
                            </div>
                            <p className="font-medium mt-4">Tautoko</p>
                        </div>
                    </div>
                    <Image
                        className="absolute left-20 top-40 sm:top-36 h-12 sm:h-20"
                        src="/assets/icons/ic-arrow-to-right.svg"
                        alt=""
                        height={80}
                        width={80}
                    />
                    <Image
                        className="absolute right-20 bottom-40 sm:bottom-36 w-12 sm:w-20"
                        src="/assets/icons/ic-arrow-to-down.svg"
                        alt=""
                        height={80}
                        width={80}
                    />
                    <Image
                        className="w-52 absolute bottom-0 left-4"
                        src="/assets/illustrations/mobile-inbox.webp"
                        alt="illustration mobile inbox"
                        height={80}
                        width={80}
                    />
                </section>

                <section className="p-4 flex flex-col gap-6">
                    <div className="rounded-2xl p-6 border border-primary-border shadow-lg">
                        <h3 className="font-semibold text-2xl text-primary">
                            Marae/Hapū
                        </h3>
                        <p className="text-xs font-medium">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Id assumenda distinctio nisi esse corrupti,
                            ullam ab sapiente provident tempora iusto voluptatum
                            quibusdam quo quam consequuntur!
                        </p>
                    </div>
                    <div className="rounded-2xl p-6 border border-primary-border shadow-lg">
                        <h3 className="font-semibold text-2xl text-primary">
                            Tatou
                        </h3>
                        <p className="text-xs font-medium">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Id assumenda distinctio nisi esse corrupti,
                            ullam ab sapiente provident tempora iusto voluptatum
                            quibusdam quo quam consequuntur!
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default About;
