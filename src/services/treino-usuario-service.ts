import { Treino } from "@/models/treino";
import prisma from "../../prisma/prisma";

class TreinoUsuarioService {
  getAll(): Promise<Treino[]> {
    return prisma.treino.findMany({
      include: {
        intervals: true
      }
    });
  }

  getById(id: string): Promise<Treino | null> {
    return prisma.treino.findUnique({
      where: {
        id: id
      },
      include: {
        intervals: true
      }
    })
  }

  async new(data: Treino) {
    const treinoCriado = await prisma.treino.create({
      data: {
        label: data.label,
      }
    });

    for (const interval of data.intervals) {
      await prisma.interval.create({data: {
        ...interval,
        treinoId: treinoCriado.id
      }});
    }

    return treinoCriado;
  }
}

const treinoUsuarioService = new TreinoUsuarioService();

export default treinoUsuarioService;