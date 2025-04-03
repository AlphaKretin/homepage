export default function CategoryItem({
    url,
    title,
    children,
}: {
    url: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                <a href={url} className="hover:underline" target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{children}</p>
        </div>
    );
}
