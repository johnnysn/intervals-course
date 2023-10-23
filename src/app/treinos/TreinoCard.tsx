import { Treino } from "@/models/treino";
import { bebas } from "../fonts";
import Link from "next/link";
import { ImBin, ImPen } from "react-icons/im";

interface Props {
  treino: Treino;
  path?: string;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export default function TreinoCard({ treino, path, onDelete, onEdit }: Props) {
  const tempoTotal = 120;

  return (
    <div
      className={`
        ${bebas.className} border border-teal-300 hover:bg-teal-950 py-8 px-6 
        rounded flex flex-col items-center gap-4 transition-colors duration-300 cursor-pointer
        w-[150px] relative
      `}
    >
      {onDelete && (
        <span className="absolute top-2 right-1 text-red-500 cursor-pointer" onClick={() => onDelete(treino.id)}>
          <ImBin />
        </span>
      )}

      {onEdit && (
        <span className="absolute top-2 right-6 text-orange-600 cursor-pointer" onClick={() => onEdit(treino.id)}>
          <ImPen />
        </span>
      )}

      <h3 className="text-2xl">{treino.label}</h3>

      <p>{tempoTotal} segundos</p>

      <Link href={path ? `${path}/${treino.id}` : `/treinos/${treino.id}`}>
        <button className="border rounded border-teal-300 text-teal-300 px-6 py-2 hover:bg-teal-600 hover:text-gray-50">
          Iniciar
        </button>
      </Link>
    </div>
  );
}
