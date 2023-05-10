import "@/styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faGoogle,
    faFacebookF,
    faLine,
    faLinkedinIn,
    faTwitter,
    faTelegramPlane,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
    faEye,
    faEyeSlash,
    faKey,
    faTimesCircle,
    faCheckCircle,
    faEnvelope,
    faUser,
    fas,
} from "@fortawesome/free-solid-svg-icons";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-montserrat",
});

library.add(
    faGoogle,
    faFacebookF,
    faLine,
    faLinkedinIn,
    faTwitter,
    faTelegramPlane,
    faWhatsapp,
    faEye,
    faEyeSlash,
    faKey,
    faTimesCircle,
    faCheckCircle,
    faEnvelope,
    faUser,
    fas
);
export default function App({ Component, pageProps }) {
    return (
        <main className={`${montserrat.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
}
