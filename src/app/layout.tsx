import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "My Personal Site",
    description: "Welcome to my personal website and blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} min-h-screen flex flex-col`}>
                <Header />
                <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
                <footer className="bg-gray-100 dark:bg-gray-800 py-4">
                    <div className="container mx-auto px-4 text-center">
                        © {new Date().getFullYear()} My Personal Site
                    </div>
                </footer>
            </body>
        </html>
    );
}
