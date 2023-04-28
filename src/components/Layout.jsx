import { useMounted } from "@/hooks/use-mounted";

export default function Layout({ children }) {
    const { hasMounted } = useMounted();
    return (
        <>
            {hasMounted && (
                <main className="pb-6 bg-neutral-50 min-h-screen">
                    {children}
                </main>
            )}
        </>
    );
}
