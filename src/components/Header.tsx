"use client"; // Mark as Client Component since we use hooks

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/about", name: "About" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-white dark:bg-gray-900 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
                    MySite
                </Link>

                <nav className="flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`${
                                pathname === item.path
                                    ? "text-blue-600 dark:text-blue-400 font-medium"
                                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                            } transition-colors`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
