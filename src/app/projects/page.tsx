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
                        <CategoryItem url="https://tectonic.alphakretin.com" title="Wep App Collection">
                            A collection of multiple tools that warranted sharing a website, since they&apos;re all
                            based on a conversion of the game&apos;s data. Currently features a damage calculator using
                            the game&apos;s unique mechanics, and an online port of the in-game detailed Pokédex, both
                            major works in progress. GitHub repository at{" "}
                            <InlineLink url="https://github.com/AlphaKretin/tectonic-tools">
                                https://github.com/AlphaKretin/tectonic-tools
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
                    <div className="space-y-6">
                        <CategoryItem url="https://github.com/DawnbrandBots/bastion-bot" title="Bastion Bot">
                            A Discord bot for looking up information about Yu-Gi-Oh! cards, inline in conversation. This
                            was my first big public project, and while it&apos;s grown out of the scope which I can
                            manage myself, I&apos;m very proud of how far it&apos;s come. While more competing bots have
                            popped up in the years since I made it, I believe it&apos;s still used by many a server, and
                            its underlying{" "}
                            <InlineLink url="https://github.com/DawnbrandBots/yaml-yugi">yaml-yugi</InlineLink> data
                            source is used by other projects as well.
                        </CategoryItem>
                        <CategoryItem url="https://github.com/DawnbrandBots/emcee-tournament-bot" title="Emcee Bot">
                            A Discord bot for validation Yu-Gi-Oh! decks and managing online tournaments. While
                            compatibility with Challonge&apos;s API has proved too troublesome to fully maintain, the
                            bot has still seen use in tournaments such as{" "}
                            <InlineLink url="https://www.youtube.com/c/MBTYuGiOh">MBT&apos;s</InlineLink> Chalislime
                            Monthly, and{" "}
                            <InlineLink url="https://www.youtube.com/@LukeVonKarma">LukeVonKarma&apos;s</InlineLink> Cup
                            of Aces.
                        </CategoryItem>
                    </div>
                </Category>
                <Category name="Media Music Spreadsheets">
                    <CategoryText>
                        Inspired by Green Requiem&apos;s &quot;
                        <InlineLink url="https://www.youtube.com/watch?v=NaQtBqclfxQ&list=PLw7GC2_qPtAtEFAnsaRPPpP-dV8N6gkax">
                            The Music of Kingdom Hearts
                        </InlineLink>
                        &quot; series, I enjoy going through my favourite media and documenting the music used within,
                        including who composed what, when each track is used, and in the case of video games, the
                        developer filename of each track. This can allow insights into the thought process behind music
                        implementation.
                    </CategoryText>
                    <div className="space-y-6">
                        <CategoryItem
                            url="https://docs.google.com/spreadsheets/d/1901VHqQtp0JEYvMfPaHsXTSIvrFeG4SevBqbR8c05R8/edit?usp=sharing"
                            title="Chrono Ark"
                        >
                            This one is particularly notable, as not only did I document the music used in the game, I
                            also took it upon myself to{" "}
                            <InlineLink url="https://drive.google.com/drive/folders/1u-UFAC4ADWVmLT5sCsEniin8Ko9N4u5V?usp=sharing">
                                release it
                            </InlineLink>
                            , in lieu of any official release by the developers. As far as the contents of the
                            spreadsheet itself go, I documeented internal filenames, took effort to track down
                            composers, and concocted names for tracks where no official option existed, but
                            documentation of usage is below my usual standard.
                        </CategoryItem>
                        <CategoryItem
                            url="https://docs.google.com/spreadsheets/d/1om6kfhjEOdE002rVjtO0SeQihi8pYh4v3fbFzxrYCh4/edit?usp=sharing"
                            title="AI: The Somnium Files"
                        >
                            Contains both internal filenames and detailed usage documentation for both currently
                            released games. Beware of spoilers! Will very likely contain details from the new third game
                            shortly after its release as well.
                        </CategoryItem>
                        <CategoryItem
                            url="https://docs.google.com/spreadsheets/d/1P9aB9OdG9QoNM8EMEdyNbpV3QUgRZPzEbQNKkbUUcMQ/edit?usp=sharing"
                            title="Senki Zesshou Symphogear"
                        >
                            Usage documentation is unfinished, however, contains personal translations of track names.
                            Other sources either use romanised Japanese names, or in the case of YouTube Music, use very
                            questionable translations (and only for vocal tracks).
                        </CategoryItem>
                        <CategoryItem
                            url="https://docs.google.com/spreadsheets/d/144mDChXZ1HxbnYTfgZs2kgb2V4J4gcDSqc4gnT_WlAs/edit?usp=sharing"
                            title="Kingdom Hearts"
                        >
                            While usage documentation and motivic connection are already covered by Green Requiem, this
                            spreadsheet focuses on internal filenames.
                        </CategoryItem>
                        <CategoryItem
                            url="https://docs.google.com/spreadsheets/d/1Z-lRZL3U3vRXdFPVsEjBbPV_op1MhYepv104tY0ufdw/edit?usp=sharing"
                            title="PARANORMASIGHT: The Seven Mysteries of Honjo"
                        >
                            Primarily documents usage. Internal filenames are simply numbered rather than having
                            interesting names, but that numbering is also documented.
                        </CategoryItem>
                        <CategoryItem
                            url="https://docs.google.com/spreadsheets/d/1kWE3vcgcp9KWsbGKuYc9_xHux3bWT_jmgWwJRocGCVA/edit?usp=sharing"
                            title="Etrian Odyssey"
                        >
                            Contains internal filenames and basic usage documentation for the Etrian Odyssey Origins HD
                            trilogy, though OST differences in the DS originals are noted where I&apos;m aware of them.
                        </CategoryItem>
                        <CategoryItem
                            url="https://docs.google.com/spreadsheets/d/1v9SWg9xWO85v8pRxr5TIc0H-Jfr_7vPnyJ9HAna_SiE/edit?usp=sharing"
                            title="LIVE-A-LIVE"
                        >
                            Contains filenames, detailed usage documentation, and arranger credits, comparing both the
                            SNES original and the HD-2D remake.
                        </CategoryItem>
                        <CategoryItem
                            url="https://docs.google.com/spreadsheets/d/1NthPtQiWSK2Q93N4f8xwg_o-yYNXAXq_SLqp11l6p4Q/edit?usp=sharing"
                            title="MOTHER 3"
                        >
                            Primarily documents usage. Makes some effort to track motifs, but I didn&apos;t have the
                            focus to figure out all the details.
                        </CategoryItem>
                    </div>
                </Category>
                <Category name="Miscellaneous">
                    <CategoryText>Various other projects that don&apos;t fit into any cohesive category.</CategoryText>
                    <div className="space-y-6">
                        <CategoryItem url="https://patd.alphakretin.com" title="Panic at the Dojo Character Sheet">
                            A digital character sheet for the indie TTRPG,{" "}
                            <InlineLink url="https://liberigothica.itch.io/panic-at-the-dojo">
                                Panic at the Dojo
                            </InlineLink>{" "}
                            2nd Edition. Currently a work in progress. Github repository at{" "}
                            <InlineLink url="https://github.com/AlphaKretin/patd-sheet/">
                                https://github.com/AlphaKretin/patd-sheet/
                            </InlineLink>
                        </CategoryItem>
                        <CategoryItem url="https://github.com/AlphaKretin/homepage/" title="This very website!">
                            As with some of my other tools, this page is deployed using the time-honoured &quot;slop
                            stack&quot; of React, Next, Tailwind and Vercel. As such, the GitHub repository is provided
                            here for perusal.
                        </CategoryItem>
                    </div>
                </Category>
            </Body>
        </>
    );
};

export default Home;
