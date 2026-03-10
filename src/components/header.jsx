export default function Header() {
  return (
    <header className="border-b border-neutral-800 bg-black/30 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800">
            <svg
              className="h-6 w-6 text-neutral-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-neutral-100">
            Calculateur de Forge
          </h1>
        </div>
        <p className="mt-2 ml-[52px] text-sm text-neutral-400">
          Sélectionne tes équipements et découvre les ressources nécessaires
        </p>
      </div>
    </header>
  );
}
