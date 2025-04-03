import Body from "@/components/Body";
import InlineLink from "@/components/InlineLink";
import Title from "@/components/Title";
import type { NextPage } from "next";
import Head from "next/head";
import Category from "../../components/Category";
import CategoryItem from "../../components/CategoryItem";
import CategoryText from "../../components/CategoryText";

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
                    <CategoryText>
                        I am a contributor to the Pokémon fangame,{" "}
                        <InlineLink url="https://www.tectonic-game.com/">Pokémon Tectonic</InlineLink>. In addition to
                        my contributions to the game itself, I have also created various standalone tools for developers
                        and players.
                    </CategoryText>
                    <div className="space-y-6">
                        <CategoryItem
                            url="https://docs.google.com/spreadsheets/d/14JS_0oAJpP7EB9LrtIShvPYshig1oSVsBKCSVAVV6tc/edit?usp=sharing"
                            title="Team Coverage Calculator"
                        >
                            A spreadsheet that allows you to input your team and determine type-based strengths and
                            weaknesses, inspired by{" "}
                            <InlineLink url="https://marriland.com/tools/team-builder/en/">
                                Marriland&apos;s team builder
                            </InlineLink>
                            . I intend to convert this to a webpage in the future.
                        </CategoryItem>
                        <CategoryItem url="https://tectonic.alphakretin.com" title="Damage Calculator">
                            A damage calculator using the game&apos;s unique mechanics, stats, and formulae. Currently a
                            major work in progress. GitHub repository at{" "}
                            <InlineLink url="https://github.com/AlphaKretin/tectonic-damage-calc">
                                https://github.com/AlphaKretin/tectonic-damage-calc
                            </InlineLink>
                            .
                        </CategoryItem>
                        <CategoryItem url="https://github.com/AlphaKretin/TectonicScripts" title="PBS Parsing Scripts">
                            Various simple Python scripts to parse the &quot;PBS&quot; data format used by Pokémon
                            Essentials and calculate or export data that&apos;s useful for different purposes.
                        </CategoryItem>
                    </div>
                </Category>
                <Category name="Yu-Gi-Oh!">
                    <CategoryText>
                        I used to be an active member of the online Yu-Gi-Oh! community, and created a number of tools
                        for their use. While I&apos;m less active now, both socially and in terms of work on those
                        projects, they are maintained by{" "}
                        <InlineLink url="https://github.com/DawnbrandBots/">Dawnbrand Bots</InlineLink>.
                    </CategoryText>
                </Category>
                <Category name="Miscellaneous">
                    <CategoryText>Various other projects that don&apos;t fit into any cohesive category.</CategoryText>
                    <div className="space-y-6">
                        <CategoryItem url="https://patd.alphakretin.com" title="Panic at the Dojo Characte Sheet">
                            A digital character sheet for the indie TTRPG,{" "}
                            <InlineLink url="https://liberigothica.itch.io/panic-at-the-dojo">
                                Panic at the Dojo
                            </InlineLink>{" "}
                            2nd Edition. Currently a work in progress. Github repository at{" "}
                            <InlineLink url="https://github.com/AlphaKretin/patd-sheet/">
                                https://github.com/AlphaKretin/patd-sheet/
                            </InlineLink>
                        </CategoryItem>
                    </div>
                </Category>
            </Body>
        </>
    );
};

export default Home;
