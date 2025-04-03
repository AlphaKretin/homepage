export default function Title({ title, intro }: { title: string; intro: string }) {
    return (
        <section className="py-12">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">{title}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">{intro}</p>
            </div>
        </section>
    );
}
