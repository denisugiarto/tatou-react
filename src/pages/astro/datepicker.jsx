import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import React from "react";

const datepicker = () => {
    {
        /* <script is:inline>
    flatpickr(".dateRangePicker", {
        mode: "range",
        dateFormat: "d M Y",
    });
</script> */
    }
    return (
        <Layout title="About Us">
            <Navbar
                isLoginActive={false}
                isNavActive={true}
                link="/"
                title="About Us"
                slot="header-content"
            />
            <div className="container px-0 bg-white mt-8">
                <input type="text" className="input dateRangePicker w-full" />
            </div>
        </Layout>
    );
};

export default datepicker;
