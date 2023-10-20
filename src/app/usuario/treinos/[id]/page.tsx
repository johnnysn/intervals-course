'use client'
import TreinoTimer from "@/components/TreinoTimer";
import { Treino } from "@/models/treino";
import { useEffect, useState } from "react";

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  const [treino, setTreino] = useState<Treino | null>(null);

  useEffect(() => {
    const fetchTreino = async () => {
      const result = await fetch("/api/treinos/" + params.id);

      if (result.ok) {
        setTreino(await result.json());
      } else {
        throw new Error("Não foi possível carregar o treino.");
      }
    };

    fetchTreino();
  }, [params.id]);

  return (
    <div className="px-2 md:px-6 mt-6">
      <h2 className="text-2xl"> Treino {treino?.label}</h2>

      <div className="flex justify-center mt-4">
        { treino && <TreinoTimer treino={treino} /> }
      </div>
    </div>
  );
}