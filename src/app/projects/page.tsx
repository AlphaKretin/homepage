import Body from "@/components/Body";
import InlineLink from "@/components/InlineLink";
import Title from "@/components/Title";
import type { NextPage } from "next";
import Head from "next/head";
import Category from "./components/Category";
import CategoryIntro from "./components/CategoryIntro";
import Item from "./components/Item";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>LunaFlare&apos;s Projects</title>
                <meta name="description" content="Personal homepage and blog" />
            </Head>
            <Title title="LunaFlare's Projects">
                I maintain a variety of free online projects for public use. They are listed here.
            </Title>
            <Body>
                <Category name="Pokémon Tectonic">
                    <CategoryIntro>
                        I am a contributor to the Pokémon fangame,{" "}
                        <InlineLink url="https://www.tectonic-game.com/">Pokémon Tectonic</InlineLink>. In addition to
                        my contributions to the game itself, I have also created various standalone tools for developers
                        and players.
                    </CategoryIntro>
                    <div className="space-y-6">
                        <Item
                            url="https://docs.google.com/spreadsheets/d/14JS_0oAJpP7EB9LrtIShvPYshig1oSVsBKCSVAVV6tc/edit?usp=sharing"
                            title="Team Coverage Calculator"
                        >
                            A spreadsheet that allows you to input your team and determine type-based strengths and
                            weaknesses, inspired by{" "}
                            <InlineLink url="https://marriland.com/tools/team-builder/en/">
                                Marriland&apos;s team builder
                            </InlineLink>
                            . I intend to convert this to a webpage in the future.
                        </Item>
                        <Item url="https://tectonic.alphakretin.com" title="Damage Calculator">
                            A damage calculator using the game&apos;s unique mechanics, stats, and formulae. Currently a
                            major work in progress. GitHub repository at{" "}
                            <InlineLink url="https://github.com/AlphaKretin/tectonic-damage-calc">
                                https://github.com/AlphaKretin/tectonic-damage-calc
                            </InlineLink>
                            .
                        </Item>
                    </div>
                </Category>
                <Category name="Miscellaneous">
                    <CategoryIntro>
                        Various other projects that don&apos;t fit into any cohesive category.
                    </CategoryIntro>
                    <div className="space-y-6">
                        <Item url="https://patd.alphakretin.com" title="Panic at the Dojo Characte Sheet">
                            A digital character sheet for the indie TTRPG,{" "}
                            <InlineLink url="https://liberigothica.itch.io/panic-at-the-dojo">
                                Panic at the Dojo
                            </InlineLink>{" "}
                            2nd Edition. Currently a work in progress. Github repository at{" "}
                            <InlineLink url="https://github.com/AlphaKretin/patd-sheet/">
                                https://github.com/AlphaKretin/patd-sheet/
                            </InlineLink>
                        </Item>
                    </div>
                </Category>
            </Body>
        </>
    );
};

export default Home;
