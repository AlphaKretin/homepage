export default function Body({ children }: { children: React.ReactNode }) {
    return (
        <section className="py-8">
            <div className="max-w-3xl mx-auto px-4 space-y-6">{children}</div>
        </section>
    );
}
