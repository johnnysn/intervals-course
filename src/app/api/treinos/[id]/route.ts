import treinoUsuarioService from "@/services/treino-usuario-service";

export async function GET(request: Request, { params }: { params: {id: string}}) {
  const treino = await treinoUsuarioService.getById(params.id);

  return Response.json(treino);
}

export async function DELETE(request: Request, { params }: { params: {id: string}}) {
  await treinoUsuarioService.delete(params.id);

  return Response.json({status: 'Ok'});
}

export async function PUT(request: Request, { params }: { params: {id: string}}) {
  const data = await request.json();
  data.id = params.id;
  await treinoUsuarioService.edit(data);

  return Response.json(data);
}