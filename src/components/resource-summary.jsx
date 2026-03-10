import { recipes, resources } from "../data/recipes";

export default function ResourceSummary({ quantities, onReset }) {
  const totals = {};

  for (const [recipeId, qty] of Object.entries(quantities)) {
    if (qty <= 0) continue;
    const recipe = recipes[recipeId];
    if (!recipe) continue;
    for (const [resId, amount] of Object.entries(recipe.resources)) {
      totals[resId] = (totals[resId] || 0) + amount * qty;
    }
  }

  const sortedResources = Object.entries(totals)
    .filter(([, total]) => total > 0)
    .sort(([a], [b]) => {
      const la = resources[a]?.label || a;
      const lb = resources[b]?.label || b;
      return la.localeCompare(lb);
    });

  const isEmpty = sortedResources.length === 0;

  const handleCopy = () => {
    const text =
      "📦 Ressources nécessaires :\n" +
      sortedResources
        .map(([id, total]) => `- ${resources[id]?.label || id} : ${total}`)
        .join("\n");
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
      <div className="flex items-center gap-2 px-6 py-5">
        <svg
          className="h-5 w-5 text-neutral-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
        <h2 className="text-xl font-bold text-neutral-100">
          Ressources nécessaires
        </h2>
      </div>

      <div className="border-t border-neutral-800 px-6 py-4">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-neutral-800/50">
              <svg
                className="h-12 w-12 text-neutral-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
            </div>
            <p className="mt-4 max-w-[200px] text-sm text-neutral-500">
              Aucun équipement sélectionné. Commence à forger !
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-2">
              {sortedResources.map(([id, total]) => (
                <div
                  key={id}
                  className="flex items-center gap-3 rounded-lg bg-neutral-800/30 px-3 py-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-neutral-800">
                    <img
                      src={resources[id]?.image}
                      alt={resources[id]?.label}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <span className="flex-1 text-sm text-neutral-300">
                    {resources[id]?.label || id}
                  </span>
                  <span className="text-sm font-semibold text-neutral-100">
                    {total}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <button
                onClick={handleCopy}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm font-medium text-neutral-200 transition-colors hover:bg-neutral-700"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>
                Copier la liste
              </button>
              <button
                onClick={onReset}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/50 px-4 py-3 text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-200"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.992 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
                </svg>
                Réinitialiser
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
