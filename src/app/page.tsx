import Image from "next/image";
import { bebas } from "./fonts";
import { ImClock, ImHeart, ImTarget } from 'react-icons/im';

export default function Home() {
  return (
    <>
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
      <section id="features" className="px-2 md:px-6 mt-16 flex flex-wrap gap-10 justify-center">
        <div className="bg-gray-800 rounded flex flex-col items-center gap-2 max-w-[180px] py-4 px-2">
          <span className="text-lg"> <ImClock /> </span>
          <h3>Otimize seu tempo</h3>
          <p className="font-thin text-xs text-center">
            Corrupti facilis nesciunt tempora modi unde earum iure ratione facere quod libero? Harum, quidem?
          </p>
        </div>

        <div className="bg-gray-800 rounded flex flex-col items-center gap-2 max-w-[180px] py-4 px-2">
          <span className="text-lg"> <ImHeart /> </span>
          <h3>Melhore sua saúde</h3>
          <p className="font-thin text-xs text-center">
            Corrupti facilis nesciunt tempora modi unde earum iure ratione facere quod libero? Harum, quidem?
          </p>
        </div>

        <div className="bg-gray-800 rounded flex flex-col items-center gap-2 max-w-[180px] py-4 px-2">
          <span className="text-lg"> <ImTarget /> </span>
          <h3>Alcance suas metas</h3>
          <p className="font-thin text-xs text-center">
            Corrupti facilis nesciunt tempora modi unde earum iure ratione facere quod libero? Harum, quidem?
          </p>
        </div>
      </section>
    </>
  );
}
