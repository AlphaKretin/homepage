export default function Title({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="py-12">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">{title}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">{children}</p>
            </div>
        </section>
    );
}
