"use client"; // Required for Next.js 13+ if using client-side hooks

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

    // Initialize theme on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        // Use saved theme if available, otherwise use system preference
        setDarkMode(savedTheme ? savedTheme === "dark" : prefersDark);
    }, []);

    // Apply theme changes
    useEffect(() => {
        if (darkMode === undefined) return;

        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    if (darkMode === undefined) {
        // Optional: Render a placeholder while theme is being determined
        return <button className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></button>;
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
            {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>
    );
}
