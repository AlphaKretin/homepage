import Body from "@/components/Body";
import Category from "@/components/Category";
import CategoryText from "@/components/CategoryText";
import InlineLink from "@/components/InlineLink";
import Title from "@/components/Title";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>About LunaFlare</title>
                <meta name="description" content="Personal homepage and blog" />
            </Head>

            <Title title="About LunaFlare">
                <></>
            </Title>
            <Body>
                <div className="space-y-8">
                    <div>
                        <Category name='Why "LunaFlare"?'>
                            <CategoryText>
                                I am transgender, and Luna is my chosen name. Despite the number of fictional characters
                                I like who share the name, it wasn&apos;t directly inspired by any of them, I just think
                                the moon is pretty.
                            </CategoryText>
                            <CategoryText>
                                As for &quot;Flare&quot;, I appreciate the aesthetic of fire. This may sound
                                pretentious, but in a very small way I like to think of myself as aspiring to the ideals
                                of <InlineLink url="https://en.wikipedia.org/wiki/Prometheus">Prometheus</InlineLink> -
                                as he stole the knowledge of fire from the gods and spread it to humanity, my goal is to
                                make anything I discover accessible to the public for the benefit of all.
                            </CategoryText>
                            <CategoryText>
                                Additionally, I enjoy the paradoxical notion of a &quot;Lunar Flare&quot;. Taking
                                something usually associated with my opposite, the sun, and claiming the term for
                                myself. I can be a bit chuuni at times, and it brings to mind a surge of magical power.
                            </CategoryText>
                        </Category>
                    </div>
                    <div>
                        <Category name='Why "AlphaKretin"?'>
                            <div>
                                <Image
                                    src="/alphakretin.webp"
                                    width={92}
                                    height={118}
                                    alt="A picture of the boss Alpha Kretin from Mario & Luigi: Bowser's Inside Story. It takes the form of six red cells, connected by white membranes, each with cartoonish angry eyes. The bottom-most cell has basic arms and legs with which to support the whole body."
                                />
                            </div>
                            <CategoryText>
                                <InlineLink url="https://www.mariowiki.com/Kretin">Alpha Kretin</InlineLink> is a
                                unimportant boss from Mario & Luigi: Bowser&apos;s Inside Story. I picked the username a
                                long, long time ago, when I was a young teenager. I&apos;d recently been on a spree of
                                constantly reimagining my username for various website, and losing track of which was
                                which. I wanted to pick something that would last a long time, so rather than naming it
                                after a passing passion, I went for something that would remain evergreen - Mario.
                                However, I didn&apos;t want to come across as a Mario superfan or something, or wind up
                                having the name taken everywhere, so I wanted it to be a relatively obscure element of
                                the Mario series. Hence, a minor boss.
                            </CategoryText>
                            <CategoryText>
                                My intention paid off, and I wound up using the username for years and years. I only
                                changed to LunaFlare in most public spaces very recently, and in some places it&apos;s
                                more trouble than it&apos;s worth to change. That includes my domain name, which I
                                bought at a cheap price a few years ago. lunaflare.com is unfortunately a premium
                                domain, so rather than go broke to make the switch, I&apos;m sticking with this for my
                                personal website.
                            </CategoryText>
                        </Category>
                    </div>
                </div>
            </Body>
        </>
    );
};

export default About;
