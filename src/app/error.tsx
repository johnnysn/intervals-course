"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <div className="px-2 md:px-6 mt-6 flex flex-col gap-4 items-center">
    <h2>Ocorreu um erro!</h2>

    <p>Infelizmente...</p>
  </div>;
}