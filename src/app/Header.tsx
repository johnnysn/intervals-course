import Image from "next/image";
import Link from "next/link";
import { bebas } from "./fonts";

export default function Header() {
    return <header className="w-full flex justify-center">
        <div className="w-full max-w-screen-xl flex justify-between items-center px-2 md:px-6">
            <Link href={'/'} className={`${bebas.className} text-3xl text-gray-50 flex gap-1 items-start`}>
                <Image src={'/logo.svg'} width={32} height={32} alt="Logo" />
                <span>Intervals</span>
            </Link>

            <nav>
                <ul className="flex gap-3 uppercase">
                    <li>
                        <Link href={`/treinos`}>Treinos</Link>
                    </li>
                    <li>
                        <Link href={`/about`}>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>;
}