"use client";

import Image from "next/image";
import Link from "next/link";

import { motion, cubicBezier } from "framer-motion";

import { Button } from "@/components/ui/button";

import Author from "@/app/Images/author.jpg";
import Dream from "@/app/Images/final.jpg";
import inspiration1 from "@/app/Images/inspiration1.jpg";
import inspiration2 from "@/app/Images/inspiration2.jpg";
import inspiration3 from "@/app/Images/inspiration3.jpg";
import inspiration4 from "@/app/Images/inspiration4.jpg";
import inspiration5 from "@/app/Images/inspiration5.webp";

import { Typography } from "@/components/ui/Typography";

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: cubicBezier(0.4, 0, 0.2, 1), delay: 0.25 }}
            className="[grid-column:content]"
        >
            <main className="mx-auto grid max-w-prose gap-2 py-16">
                <Typography variant="h1">Sen Jana Zrzavého, 2024</Typography>
                <Button
                    variant={"link"}
                    className="w-fit p-0 text-muted-foreground"
                    asChild
                >
                    <Link
                        href="https://www.instagram.com/sarlotajezkova_/"
                        rel={"author"}
                        className="text-muted-foreground"
                    >
                        Šarlota Ježková, 4G
                    </Link>
                </Button>
                <Image
                    src={Dream}
                    alt="Sen Jana Zrzavého"
                    className="mx-auto my-4 w-3/4"
                />
                <div className="flex justify-between gap-8">
                    <div>
                        <Typography>
                            Závěrečnou prací čtvrtého ročníku bylo vzdát hold oblíbenému umělci.
                            Vybrala jsem si Jana Zrzavého, protože se mi velmi líbí atmosféra jeho
                            děl.
                        </Typography>
                        <Typography>Má práce je spojení více prvků jeho děl dohromady.</Typography>
                    </div>

                    <Image
                        src={Author}
                        alt="Portrét Jan Zrzavý"
                        className="h-fit max-w-[25%] max-sm:hidden"
                    />
                </div>
                <Typography
                    variant="blockquote"
                    className="before:content-['\201d'] after:content-['\201c']"
                >
                    Zdál se mi zvláštní sen, všechny obrazy se mi nějak pomotaly v hlavě.
                </Typography>
                <Image
                    src={Author}
                    alt="Portrét Jan Zrzavý"
                    className="mx-auto mt-4 h-fit max-w-72 sm:hidden"
                />
                <div className="mt-8 columns-1 gap-4 sm:columns-2 [&>img:not(:first-child)]:mt-4">
                    <Image
                        src={inspiration1}
                        alt="Jan Zrzavý - Meditace, 1915"
                    />
                    <Image
                        src={inspiration2}
                        alt="Jan Zrzavý - Kleopatra II, 1942"
                    />
                    <Image
                        src={inspiration3}
                        alt="Jan Zrzavý - Spící Lodě, 1935"
                    />
                    <Image
                        src={inspiration4}
                        alt="Jan Zrzavý - Bretaňský Přístav, 1948"
                    />
                    <Image
                        src={inspiration5}
                        alt="Jan Zrzavý - Odlévání zvonů, 1967"
                    />
                </div>
            </main>
        </motion.div>
    );
}
