import { Treino } from "@/models/treino";
import path from "path";
import fsPromises from 'fs/promises';

class TreinoService {
    
  private async fetchFromJSONFile(): Promise<Treino[]> {
    const filePath = path.join(process.cwd(), "data/treinos.json");
    const jsonData = await fsPromises.readFile(filePath);
    return JSON.parse(jsonData.toString()) ?? [];
  }

  async getAll() {
    return this.fetchFromJSONFile();
  }

  async getById(id: string) {
    return (await this.fetchFromJSONFile()).find(t => t.id === id);
  }
}

const treinoService = new TreinoService();

export default treinoService;
