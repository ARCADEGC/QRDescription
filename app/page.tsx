import Image from "next/image";
import Link from "next/link";

import Author from "@/app/Images/author.jpg";
import Dream from "@/app/Images/final.jpg";
import inspiration1 from "@/app/Images/inspiration1.jpg";
import inspiration2 from "@/app/Images/inspiration2.jpg";
import inspiration3 from "@/app/Images/inspiration3.jpg";
import inspiration4 from "@/app/Images/inspiration4.jpg";
import inspiration5 from "@/app/Images/inspiration5.webp";

export default function Home() {
    return (
        <main className="[grid-column:content]">
            <h1>Sen Jana Zrzavého, 2024</h1>
            <Link
                href=""
                rel={"author"}
            >
                Šarlota Ježková, 4G
            </Link>
            <Image
                src={Dream}
                alt="Sen Jana Zrzavého"
            />

            <Image
                src={Author}
                alt="Portrét Jan Zrzavý"
            />
            <Image
                src={inspiration1}
                alt="Portrét Jan Zrzavý" /* TODO alt */
            />
            <Image
                src={inspiration2}
                alt="Portrét Jan Zrzavý" /* TODO alt */
            />
            <Image
                src={inspiration3}
                alt="Portrét Jan Zrzavý" /* TODO alt */
            />
            <Image
                src={inspiration4}
                alt="Portrét Jan Zrzavý" /* TODO alt */
            />
            <Image
                src={inspiration5}
                alt="Portrét Jan Zrzavý" /* TODO alt */
            />
        </main>
    );
}
