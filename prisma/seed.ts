const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  // Criar o treino
  const novoTreino = await prisma.treino.create({
    data: {
      label: "HIIT Gibala",
    },
  });

  // Definir os intervalos do treino
  const intervalos = [
    { label: "Aquecer", seconds: 120, intensity: 1 },
    { label: "Correr", seconds: 60, intensity: 2 },
    { label: "Descansar", seconds: 60, intensity: 0 },
    { label: "Correr", seconds: 60, intensity: 2 },
    { label: "Descansar", seconds: 60, intensity: 0 },
    { label: "Correr", seconds: 60, intensity: 2 },
    { label: "Descansar", seconds: 60, intensity: 0 },
    { label: "Correr", seconds: 60, intensity: 2 },
    { label: "Descansar", seconds: 60, intensity: 0 },
    { label: "Correr", seconds: 60, intensity: 2 },
    { label: "Descansar", seconds: 60, intensity: 0 },
    { label: "Correr", seconds: 60, intensity: 2 },
    { label: "Descansar", seconds: 60, intensity: 0 },
    { label: "Correr", seconds: 60, intensity: 2 },
    { label: "Descansar", seconds: 60, intensity: 0 },
    { label: "Correr", seconds: 60, intensity: 2 },
    { label: "Descansar", seconds: 60, intensity: 0 },
    { label: "Desaquecer", seconds: 120, intensity: 1 },
  ];

  // Associar os intervalos ao treino criado
  await Promise.all(
    intervalos.map(async (intervalo) => {
      await prisma.interval.create({
        data: {
          label: intervalo.label,
          seconds: intervalo.seconds,
          intensity: intervalo.intensity,
          treinoId: novoTreino.id,
        },
      });
    })
  );

  const novoTreino2 = await prisma.treino.create({
    data: {
      label: "Tabata",
    },
  });

  // Definir os intervalos do treino
  const intervalos2 = [
    { label: "Aquecer", seconds: 120, intensity: 1 },
    { label: "Correr", seconds: 20, intensity: 2 },
    { label: "Descansar", seconds: 10, intensity: 0 },
    { label: "Correr", seconds: 20, intensity: 2 },
    { label: "Descansar", seconds: 10, intensity: 0 },
    { label: "Correr", seconds: 20, intensity: 2 },
    { label: "Descansar", seconds: 10, intensity: 0 },
    { label: "Correr", seconds: 20, intensity: 2 },
    { label: "Descansar", seconds: 10, intensity: 0 },
    { label: "Correr", seconds: 20, intensity: 2 },
    { label: "Descansar", seconds: 10, intensity: 0 },
    { label: "Correr", seconds: 20, intensity: 2 },
    { label: "Descansar", seconds: 10, intensity: 0 },
    { label: "Correr", seconds: 20, intensity: 2 },
    { label: "Descansar", seconds: 10, intensity: 0 },
    { label: "Correr", seconds: 20, intensity: 2 },
    { label: "Descansar", seconds: 10, intensity: 0 },
    { label: "Desaquecer", seconds: 120, intensity: 1 },
  ];

  // Associar os intervalos ao treino criado
  await Promise.all(
    intervalos2.map(async (intervalo) => {
      await prisma.interval.create({
        data: {
          label: intervalo.label,
          seconds: intervalo.seconds,
          intensity: intervalo.intensity,
          treinoId: novoTreino2.id,
        },
      });
    })
  );

  console.log("Seed concluído com sucesso!");
}

seed()
  .catch((error) => {
    console.error("Erro ao executar o seed:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
