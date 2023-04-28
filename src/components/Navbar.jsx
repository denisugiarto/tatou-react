import { useMounted } from "@/hooks/use-mounted";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
                                <div
                                    className="h-full"
                                    style={{
                                        background:
                                            "radial-gradient(50% 50% at 50% 50%, #74C5FF 0%, #FFFFFF 100%)",
                                    }}
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
                                    />
                                </div>
                            ) : (
                                <a
                                    href="/signin"
                                    className="btn btn-outline btn-primary btn-sm bg-white"
                                >
                                    Sign in
                                    <i className="fas fa-sign-in-alt ml-2" />
                                </a>
                            ))}
                        {isSupportMaraeHapuActive && (
                            <button className="btn bg-white text-primary !btn-sm">
                                <i className="fas fa-plus-circle mr-1" />
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
