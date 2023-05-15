import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const contents = () => {
    const allContents = [
        {
            label: "Sign in",
            link: "/signin",
        },
        {
            label: "Sign in",
            link: "/signin",
        },
        {
            label: "Sign up",
            link: "/signup-verify",
        },
        {
            label: "Sign in",
            link: "/signup-change-email",
        },
        {
            label: "Sign in",
            link: "/forgot-password",
        },
        {
            label: "Create New Password",
            link: "/new-password",
        },
        { link: "/support-maraehapu", label: "Support Marae Hapu" },
        { link: "/homepage", label: "Homepage" },
        { link: "/account-not-login", label: "Akahu Account Not Login" },
        { link: "/account-login", label: "Akahu Account Logged" },
        { link: "/tatou-support-homepage", label: "Tatou Support Homepage" },
        { link: "/tatou-support-list", label: "Tatou Support List" },
        { link: "/tatou-message", label: "Tatou Message" },
        {
            link: "/tatou-message-owner-view",
            label: "Tatou Message Owner View",
        },
        { link: "/tatou-form-support", label: "Tatou Form Support" },
        { link: "/tatou-support-success", label: "Tatou Form Support Success" },
        { link: "/marae-hapu", label: "Marae Hapu" },
        { link: "/transaction-history", label: "Transaction History" },
        { link: "/withdraw", label: "Withdraw" },
        { link: "/withdraw-success", label: "Withdraw Success" },
        { link: "/support-history", label: "Support History" },
        { link: "/my-activity", label: "My Activity" },
        { link: "/change-password", label: "Change Password" },
        { link: "/edit-profile", label: "Edit Profile" },
        { link: "/about-us", label: "About Us" },
        { link: "/faq", label: "Frequently Asked Question" },
        { link: "/term", label: "Term and Condition" },
        { link: "/marae-update", label: "Marae Update" },
        { link: "/marae-update-input-form", label: "Marae Update Input Form" },
        { link: "/placeholder-message", label: "Placeholder Message" },
        {
            link: "/placeholder-support-list",
            label: "Placeholder Support List",
        },
        {
            link: "/placeholder-transaction-history",
            label: "Placeholder transaction history",
        },
        {
            link: "/placeholder-support-history",
            label: "Placeholder Support History",
        },
        { link: "/placeholder-my-activity", label: "Placeholder My Activity" },
        {
            link: "/placeholder-marae-update",
            label: "Placeholder Marae Update",
        },
        { link: "/404", label: "Page 404" },
        { link: "/500", label: "Page 500" },
    ];
    return (
        <Layout title="Tatou Content">
            <Navbar
                isLoginActive={false}
                title="Tatou Project"
                slot="header-content"
            />
            <main>
                <div className="container">
                    <h1 className="mt-12 text-xl">Content:</h1>
                    <div className="grid grid-cols-1 gap-4 mt-6">
                        {allContents.map((link) => (
                            <Link
                                key={link.link}
                                className="btn btn-block btn-primary btn-sm"
                                href={link.link}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default contents;
