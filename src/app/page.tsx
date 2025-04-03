import Body from "@/components/Body";
import InlineLink from "@/components/InlineLink";
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
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <InlineLink url="https://luna--flare.tumblr.com">Tumblr</InlineLink>
                    </li>
                    <li>
                        <InlineLink url="https://backloggd.com/u/LunaFlare/">Backloggd</InlineLink>
                    </li>
                    <li>
                        <InlineLink url="https://patd.alphakretin.com">Panic at the Dojo Character Sheet</InlineLink>
                    </li>
                    <li>
                        <InlineLink url="https://tectonic.alphakretin.com">
                            Pokémon Tectonic Damage Calculator
                        </InlineLink>
                    </li>
                </ul>
            </Body>
        </>
    );
};

export default Home;
