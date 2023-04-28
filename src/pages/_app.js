import "@/styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

library.add(fab, fas);
export default function App({ Component, pageProps }) {
    return (
        <main className={`${montserrat.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
}
