import Button from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return <div className="px-2 md:px-6 mt-6 flex flex-col gap-4 items-center">
    <h2 className="text-2xl">Página não encontrada!</h2>

    <p>A página requisitada não existe ou está em construção</p>

    <Link href={'/'}>
      <Button>Retornar</Button>
    </Link>
  </div>;
}