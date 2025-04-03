import Title from "@/components/Title";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>LunaFlare&apos;s Moon Base</title>
                <meta name="description" content="Personal homepage and blog" />
            </Head>

            <Title
                title="LunaFlare's Moon Base"
                intro="A repository for all the little bits of information I want to store online."
            />
        </>
    );
};

export default Home;
