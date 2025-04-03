import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Welcome to My Site</title>
                <meta name="description" content="Personal homepage and blog" />
            </Head>

            <section className="py-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">Welcome to My Personal Site</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        I write about web development, technology, and other things I find interesting.
                    </p>
                </div>
            </section>

            <section className="py-8">
                <h2 className="text-2xl font-semibold mb-6">Latest Blog Posts</h2>
                {/* Blog post previews would go here */}
            </section>
        </>
    );
};

export default Home;
