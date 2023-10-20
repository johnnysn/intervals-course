"use client";
import TreinoCard from "@/app/treinos/TreinoCard";
import Button from "@/components/Button";
import { Treino } from "@/models/treino";
import Link from "next/link";
import { useEffect, useState } from "react";

export const revalidate = 30;

export default function Page() {
  const [treinos, setTreinos] = useState<Treino[]>([]);

  useEffect(() => {
    const fetchTreinos = async () => {
      const result = await fetch("/api/treinos");

      if (result.ok) {
        const data = await result.json();
        setTreinos(data);
      } else {
        throw new Error("Não foi possível carregar os treinos.");
      }
    };

    fetchTreinos();
  }, []);

  return (
    <section id="treinos" className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-medium">Meus treinos</h2>

      <ul className="flex justify-center gap-12 flex-wrap w-full">
        {treinos.map((t) => (
          <li key={t.id} className="mt-4">
            {" "}
            <TreinoCard treino={t} path="/usuario/treinos" />{" "}
          </li>
        ))}
      </ul>

      <Link href={"/usuario/treinos/new"}>
        <Button className="mt-6">Criar novo treino</Button>
      </Link>
    </section>
  );
}
