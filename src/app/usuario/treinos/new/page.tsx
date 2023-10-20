'use client'
import TreinoForm from "@/components/TreinoForm";
import { Treino } from "@prisma/client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const submitHandler = (treino: Treino) => {
    const postTreino = async () => {
      const response = await fetch('/api/treinos', {method: 'POST', body: JSON.stringify(treino)});

      if (response.ok) {
        router.push('/usuario/treinos');
      } else {
        throw new Error('Ocorreu um erro ao salvar o treino.');
      }
    };

    postTreino();
  };

  return <section>
    <h2 className="text-2xl leading-loose text-center mb-2">Adicionar novo treino</h2>

    <TreinoForm onSubmit={submitHandler} />
  </section>
}