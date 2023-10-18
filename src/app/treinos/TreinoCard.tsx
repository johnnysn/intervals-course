import { Treino } from "@/models/treino";
import { bebas } from "../fonts";
import Link from "next/link";

interface Props {
  treino: Treino;
}

export default function TreinoCard({ treino }: Props) {
  const tempoTotal = 120;

  return (
    <Link
        href={`/treinos/${treino.id}`}
      className={`
        ${bebas.className} border border-teal-300 hover:bg-teal-950 py-4 px-6 
        rounded flex flex-col items-center gap-4 transition-colors duration-300 cursor-pointer
        w-[150px]
      `}
    >
      <h3 className="text-2xl">{treino.label}</h3>

      <p>{tempoTotal} segundos</p>
    </Link>
  );
}