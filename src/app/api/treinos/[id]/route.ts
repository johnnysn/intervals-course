import treinoUsuarioService from "@/services/treino-usuario-service";

export async function GET(request: Request, { params }: { params: {id: string}}) {
  const treino = await treinoUsuarioService.getById(params.id);

  return Response.json(treino);
}

export async function DELETE(request: Request, { params }: { params: {id: string}}) {
  await treinoUsuarioService.delete(params.id);

  return Response.json({status: 'Ok'});
}