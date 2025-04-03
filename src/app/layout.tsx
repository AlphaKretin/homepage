import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "LunaFlare's Moon Base",
    description: "Personal website for LunaFlare",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} min-h-screen flex flex-col`}>
                <Header />
                <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
                <footer className="bg-gray-100 dark:bg-gray-800 py-4">
                    <div className="container mx-auto px-4 text-center">© {new Date().getFullYear()} LunaFlare</div>
                </footer>
            </body>
        </html>
    );
}
