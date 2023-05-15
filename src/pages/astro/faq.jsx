import FaqItem from "@/components/FaqItem";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import TabList from "@/components/TabList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const faq = () => {
    return (
        <Layout title="Frequently Asked Question">
            <Navbar
                isLoginActive={false}
                isNavActive={true}
                link="/"
                title="Frequently Asked Question"
                slot="header-content"
            />
            <section className="container px-0">
                <div className="p-4 bg-primary-surface">
                    <div className="relative">
                        <div className="absolute top-3 left-4">
                            <FontAwesomeIcon
                                icon={"search"}
                                className="text-neutral-400"
                            />
                        </div>
                        <input
                            className="input w-full pl-10"
                            type="search"
                            name="search"
                            placeholder="Search"
                        />
                    </div>
                </div>
            </section>
            <section className="container px-0 mt-8">
                <div className="bg-white p-4">
                    <TabList labels={["General", "Tatou", "Marae/Hapu"]} />
                    <div className="general-content hidden">
                        <FaqItem
                            question="How can I get involved in the campaign?"
                            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste perspiciatis rem, magnam tempore totam sed quae odio quod ea"
                        />
                        <FaqItem
                            question="What are some volunteer opportunities available?"
                            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste perspiciatis rem, magnam tempore totam sed quae odio quod ea"
                        />
                        <FaqItem
                            question="How can I donate to the campaign?"
                            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste perspiciatis rem, magnam tempore totam sed quae odio quod ea"
                        />
                        <FaqItem
                            question="Can I host a fundraising event for the campaign?"
                            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste perspiciatis rem, magnam tempore totam sed quae odio quod ea"
                        />
                        <FaqItem
                            question="How can I stay up-to-date on the campaign's progress?"
                            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste perspiciatis rem, magnam tempore totam sed quae odio quod ea"
                        />
                    </div>
                    <div className="tatou-content hidden"></div>
                    <div className="marae-hapu-content">
                        <FaqItem question="How do I create a campaign on this website?">
                            <p className="text-sm mb-1">
                                To create a campaign on our website, please
                                follow these steps:
                            </p>
                            <ol className="list-decimal text-sm ml-4">
                                <li>
                                    Log in to your account or create a new
                                    account if you haven&apos;t already done so.
                                </li>
                                <li>
                                    Click on the &quot;Create Campaign&quot; button on the
                                    dashboard.
                                </li>
                                <li>
                                    Fill out the required fields, including
                                    campaign name, description, goal, and end
                                    date.
                                </li>
                                <li>
                                    Add any additional information or media,
                                    such as images or videos, to enhance your
                                    campaign.
                                </li>
                                <li>Save and publish your campaign.</li>
                            </ol>
                        </FaqItem>
                        <FaqItem
                            question="What types of campaigns can I create on this website?"
                            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste perspiciatis rem, magnam tempore totam sed quae odio quod ea"
                        />
                        <FaqItem
                            question="How can I promote my campaign on social media?"
                            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste perspiciatis rem, magnam tempore totam sed quae odio quod ea"
                        />
                        <FaqItem
                            question="How can I track the progress of my campaign?"
                            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste perspiciatis rem, magnam tempore totam sed quae odio quod ea"
                        />
                        <FaqItem
                            question="How can I communicate with my supporters during my campaign?"
                            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste perspiciatis rem, magnam tempore totam sed quae odio quod ea"
                        />
                    </div>
                </div>
            </section>
            <section className="container px-0 mt-8">
                <div className="bg-white p-4 text-center">
                    <h4 className="font-medium">Have other question</h4>
                    <p className="text-xs mt-1">We will answer you via email</p>
                    <form action="">
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="input"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="input"
                                required
                            />
                            <textarea
                                className="col-span-2 input !h-auto resize-none py-2 hover:resize-y"
                                name="question"
                                rows="5"
                                required
                                placeholder="Your question type here..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-block btn-primary text-white btn-sm mt-4"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </Layout>
    );
};

export default faq;
