import Body from "@/components/Body";
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

            <Title title="LunaFlare's Moon Base">
                A repository for all the little bits of information I want to store online.
            </Title>
            <Body>
                <p>Website currently heavily under construction!</p>
            </Body>
        </>
    );
};

export default Home;
