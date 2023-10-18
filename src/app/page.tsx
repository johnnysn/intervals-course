import Image from "next/image";
import { bebas } from "./fonts";

export default function Home() {
  return (
    <section id="hero" className="px-2 md:px-6 mt-6 flex flex-col md:flex-row-reverse md:gap-4 items-center justify-center">
      <Image
        alt="Treino"
        src={"/hero.png"}
        width={868}
        height={389}
        className="h-auto w-[320px] md:w-[50%]"
      />
      <div className="flex flex-col items-center gap-4 md:items-start">
        <h2 className={`${bebas.className} text-6xl leading-none tracking-wide md:text-7xl`}>
          Potencialize <br />o seu <span className="font-light">treino</span>
          <br />
          <span className="text-teal-300">intervalado</span>
        </h2>

        <p className="font-extralight text-sm text-center max-w-[360px] md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Exercitationem sapiente repudiandae necessitatibus
        </p>
      </div>
    </section>
  );
}
