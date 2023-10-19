import TreinoTimer from "@/components/TreinoTimer";
import treinoService from "@/services/treino-service";

interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const treino = (await treinoService.getById(params.id)) || null;

  if (!treino) {
    throw new Error("Treino não encontrado!");
  }

  return (
    <div className="px-2 md:px-6 mt-6">
      <h2 className="text-2xl"> Treino {treino.label}</h2>

      <div className="flex justify-center mt-4">
        <TreinoTimer treino={treino} />
      </div>
    </div>
  );
}
