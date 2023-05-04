
import { useMounted } from "@/hooks/useMounted";
import Head from "next/head";

export default function Layout({ children, title, isWithBottomBar }) {
    const { hasMounted } = useMounted();
    return (
        <>
            {hasMounted && (
                <>
                    <Head>
                        <title>{title}</title>
                    </Head>
                    <main
                        className={`${
                            isWithBottomBar ? "pb-20" : "pb-6"
                        } bg-neutral-50 min-h-screen`}
                    >
                        {children}
                    </main>
                </>
            )}
        </>
    );
}
