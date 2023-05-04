import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({
    link = "/",
    title,
    isNavActive = false,
    isLogin = false,
    isLoginActive = true,
    isSupportMaraeHapuActive = false,
    children,
}) => {
    return (
        <header className="sticky top-0 z-[1001]">
            <div className="navbar bg-primary shadow">
                <div className="container px-2">
                    <div className="flex items-center gap-5 w-full">
                        {isNavActive ? (
                            <Link
                                href={link}
                                className=" bg-white rounded-full w-8 h-8 text-center flex items-center justify-center"
                            >
                                <FontAwesomeIcon
                                    icon={["fas", "arrow-left"]}
                                    className="text-xl"
                                />
                            </Link>
                        ) : (
                            // Brand Icon
                            <Link
                                href={link}
                                className="rounded-full overflow-hidden w-8 h-8 bg-white mr-auto"
                            >
                                <Image
                                    src="/assets/icons/icon-logo.svg"
                                    width={32}
                                    height={32}
                                    alt="tatou brand icon"
                                />
                            </Link>
                        )}
                        <h6 className="font-medium text-white grow">{title}</h6>
                        {isLoginActive &&
                            (isLogin ? (
                                <div className="rounded-full overflow-hidden w-8 h-8">
                                    <Image
                                        src="/assets/profile.png"
                                        alt="profile picture"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            ) : (
                                <Link
                                    href="/signin"
                                    className="btn btn-outline btn-primary btn-sm bg-white"
                                >
                                    Sign in
                                    <FontAwesomeIcon
                                        icon={"sign-in-alt"}
                                        className="ml-2"
                                    />
                                </Link>
                            ))}
                        {isSupportMaraeHapuActive && (
                            <button className="btn bg-white text-primary !btn-sm">
                                <FontAwesomeIcon
                                    icon={"plus-circle"}
                                    className="mr-1"
                                />
                                Support Marae/Hapu
                            </button>
                        )}
                        {children}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
