import treinoUsuarioService from "@/services/treino-usuario-service";

export async function GET(request: Request) {
  const treinos = await treinoUsuarioService.getAll();

  return Response.json(treinos);
}

export async function POST(request: Request) {
  const data = await request.json();

  console.log('Received new data');
  console.log(data);

  const treinoCriado = await treinoUsuarioService.new(data);

  return Response.json(treinoCriado);
}
