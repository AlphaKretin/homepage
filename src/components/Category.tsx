export default function Category({ name, children }: { name: string; children: React.ReactNode }) {
    return (
        <details className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md">
            <summary className="cursor-pointer flex justify-between items-center list-none">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{name}</h2>
                <svg
                    className="w-6 h-6 text-gray-500 dark:text-gray-400 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </summary>

            <div className="mt-6 space-y-6">{children}</div>
        </details>
    );
}
