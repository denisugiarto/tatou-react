import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const BottomNavbar = ({ activeMenu = 0}) => {
    const navbarMenu = [
        {
            title: "Home",
            icon: "fa-home",
            link: "/homepage",
        },
        {
            title: "Marae/Hapū",
            icon: "fa-users",
            link: "/marae-hapu",
        },
        // {
        //   title: "Tatou",
        //   icon: "fa-hard-hat",
        // },
        {
            title: "Account",
            icon: "fa-user-circle",
            link: "/account-login",
        },
    ];

    return (
        <div className="btm-nav container py-2 h-auto gap-2 fixed left-0 bottom-0">
            {navbarMenu.map((item, index) => (
                <Link
                    key={index}
                    href={item.link}
                    className={`${
                        activeMenu === index
                            ? "btn-primary text-white"
                            : "hover:btn-primary hover:text-white"
                    }  text-xl rounded-2xl !py-2`}
                >
                    <FontAwesomeIcon icon={item.icon} />
                    <span className="btm-nav-label text-xs">{item.title}</span>
                </Link>
            ))}
        </div>
    );
};

export default BottomNavbar;
