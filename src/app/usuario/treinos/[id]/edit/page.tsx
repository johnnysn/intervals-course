'use client'
import TreinoForm from "@/components/TreinoForm";
import { Treino } from "@prisma/client";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  params: {id: string}
}

export default function Page({params}: Props) {
  const router = useRouter();
  const [treino, setTreino] = useState<Treino | null>(null);

  useEffect(() => {
    const getTreino = async () => {
      const res = await fetch(`/api/treinos/${params.id}`);

      if (res.ok) {
        setTreino(await res.json());
      } else {
        notFound();
      }
    };

    getTreino();
  }, [params.id]);

  const submitHandler = (treino: Treino) => {
    const putTreino = async () => {
      const response = await fetch(`/api/treinos/${params.id}`, {method: 'PUT', body: JSON.stringify(treino)});

      if (response.ok) {
        router.push('/usuario/treinos');
      } else {
        throw new Error('Ocorreu um erro ao salvar o treino.');
      }
    };

    putTreino();
  };

  return <section>
    <h2 className="text-2xl leading-loose text-center mb-2">Alterar o treino</h2>

    { treino && <TreinoForm onSubmit={submitHandler} treino={treino} /> }
  </section>
}