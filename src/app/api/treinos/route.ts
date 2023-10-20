import treinoUsuarioService from "@/services/treino-usuario-service";

export async function GET(request: Request) {
  const treinos = await treinoUsuarioService.getAll();

  return Response.json(treinos);
}