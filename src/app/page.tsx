import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-neutral-900 dark:bg-black dark:text-neutral-100 px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <Image
          src="/tesla-logo.svg"
          alt="Tesla Logo"
          width={80}
          height={80}
          className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
          priority
        />
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Bridgemill Tesla
        </h1>
      </div>
    </main>
  );
}
