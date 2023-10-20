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
}

const treinoUsuarioService = new TreinoUsuarioService();

export default treinoUsuarioService;