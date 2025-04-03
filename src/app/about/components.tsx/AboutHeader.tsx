import { ReactNode } from "react";

export default function AboutHeader({ children }: { children: ReactNode }) {
    return <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{children}</h2>;
}
