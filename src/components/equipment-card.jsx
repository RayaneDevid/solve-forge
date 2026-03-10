const tierColors = {
  1: "bg-neutral-700 text-neutral-300",
  2: "bg-green-900/60 text-green-400",
  3: "bg-blue-900/60 text-blue-400",
  4: "bg-purple-900/60 text-purple-400",
};

export default function EquipmentCard({ recipe, quantity, onQuantityChange }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-neutral-800">
        <img
          src={recipe.image}
          alt={recipe.label}
          className="h-12 w-12 object-contain"
        />
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-neutral-100 truncate">
            {recipe.label}
          </span>
          <span
            className={`shrink-0 rounded px-2 py-0.5 text-xs font-medium ${tierColors[recipe.tier]}`}
          >
            T{recipe.tier}
          </span>
        </div>
        <div className="flex items-center gap-0">
          <button
            onClick={() => onQuantityChange(Math.max(0, quantity - 1))}
            className="flex h-7 w-7 items-center justify-center rounded-l-md border border-neutral-700 bg-neutral-800 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-200"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <span className="flex h-7 w-10 items-center justify-center border-y border-neutral-700 bg-neutral-800/50 text-sm text-neutral-100">
            {quantity}
          </span>
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="flex h-7 w-7 items-center justify-center rounded-r-md border border-neutral-700 bg-neutral-800 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-200"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
