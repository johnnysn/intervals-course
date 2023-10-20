import treinoService from "@/services/treino-service";
import TreinoCard from "./TreinoCard";

export const revalidate = 30;

export default async function Page() {
  const treinos = await treinoService.getAll();

  console.log(treinos);

  return (
    <section id="treinos" className="mt-6 px-2 md:px-6 flex flex-col items-center gap-4">
      <h2 className="text-2xl font-medium">Treinos disponíveis</h2>

      <ul className="flex justify-center gap-12 flex-wrap w-full">
        { treinos.map(t => <li key={t.id} className="mt-4"> <TreinoCard treino={t} /> </li>) }
      </ul>
    </section>
  );
}
