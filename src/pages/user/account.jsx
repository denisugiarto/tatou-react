import BottomNavbar from "@/components/BottomNavbar";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const AccountLogin = () => {
    {
        /* <script is:inline>
            $(document).ready(function () {
                $(".select").select2({
                    minimumResultsForSearch: Infinity,
                });
            });
            $(document).on("select2:open", function (e) {
                window.setTimeout(function () {
                    document.querySelector("input.select2-search__field").focus();
                }, 0);
            });
        </script> */
    }
    return (
        <Layout title="Page account logged">
            <Navbar slot="header-content" isLogin={true} />
            <main className="pb-16">
                <div className="container mt-4 px-0 relative">
                    <section className="p-4 bg-white">
                        <div className="flex gap-4 items-center">
                            <div className="flex-none">
                                <Image
                                    src="/assets/profile.png"
                                    className="rounded-full w-14 h-14"
                                    alt="user image profile"
                                />
                            </div>
                            <div className="grow">
                                <h5 className="font-medium text-lg">
                                    John Doe
                                </h5>
                                <p className="text-xs">johndoe@gmail.com</p>
                            </div>
                            <Link
                                href=""
                                className="btn btn-outline btn-primary text-primary font-medium !btn-sm"
                            >
                                Edit Profile
                                <FontAwesomeIcon
                                    icon={"edit"}
                                    className="ml-2"
                                />
                            </Link>
                        </div>
                    </section>
                    <section className="p-4 bg-white">
                        <div className="flex text-sm font-medium py-3 mb-2">
                            <h6 className="grow">Akahu Account</h6>
                            <Link href="" className="text-error text-sm">
                                Change
                            </Link>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Image
                                src="/assets/icons/icon-akahu.svg"
                                className="w-6 h-6 rounded-full"
                                alt="akahu icon"
                            />
                            <select className="select" name="" id="">
                                <option value="">John Doe - 012351412</option>
                                <option value="">John Doe - 123412412</option>
                            </select>
                        </div>
                        <p className="text-sm mt-2">
                            Akahu Balance
                            <span className="text-base text-[#8232FF] font-medium float-right">
                                NZ$ 123
                            </span>
                        </p>
                        <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4">
                            <Link
                                href="/transaction-history"
                                className="btn btn-outline btn-primary btn-sm btn-block"
                            >
                                <FontAwesomeIcon
                                    icon={"history"}
                                    className="mr-2 text-lg"
                                />
                                History
                            </Link>
                            <Link
                                href="/withdraw"
                                className="btn btn-outline btn-primary btn-sm btn-block"
                            >
                                <FontAwesomeIcon
                                    icon={"money-bill-alt"}
                                    className="mr-2 text-lg"
                                />
                                Withdraw
                            </Link>
                        </div>
                    </section>
                    <section className="mt-4">
                        <Link
                            href=""
                            className="bg-white p-4 font-medium text-lg text-primary flex items-center hover:bg-neutral-100"
                        >
                            <FontAwesomeIcon icon={"box"} className="mr-2" />
                            <span className="grow">Manage my Activity</span>
                            <FontAwesomeIcon
                                icon={"chevron-right"}
                                className="float-right"
                            />
                        </Link>
                        <Link
                            href="/transaction-history"
                            className="bg-white p-4 font-medium text-lg text-primary flex items-center hover:bg-neutral-100"
                        >
                            <FontAwesomeIcon
                                icon={"hand-holding-heart"}
                                className="mr-2"
                            />
                            <span className="grow">Support History</span>
                            <FontAwesomeIcon
                                icon={"chevron-right"}
                                className="float-right"
                            />
                        </Link>
                        <Link
                            href=""
                            className="bg-white p-4 font-medium text-lg text-primary flex items-center hover:bg-neutral-100"
                        >
                            <FontAwesomeIcon icon={"key"} className="mr-2" />
                            <span className="grow">Change Password</span>
                            <FontAwesomeIcon
                                icon={"chevron-right"}
                                className="float-right"
                            />
                        </Link>
                        <Link
                            href=""
                            className="bg-white p-4 font-medium text-lg text-primary flex items-center hover:bg-red-100 hover:text-error"
                        >
                            <FontAwesomeIcon
                                icon={"sign-out-alt"}
                                className="mr-2"
                            />
                            <span className="grow">Logout</span>
                        </Link>
                    </section>
                </div>
            </main>
            <BottomNavbar activeMenu={2} />
        </Layout>
    );
};

export default AccountLogin;
