import { useState } from "react";
import EquipmentCard from "./equipment-card";
import { recipes } from "../data/recipes";

export default function CategorySection({
  category,
  quantities,
  onQuantityChange,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSubCategory, setActiveSubCategory] = useState(
    category.subCategories?.[0]?.id ?? null
  );

  const hasSubCategories = !!category.subCategories;

  const categoryIds = hasSubCategories
    ? [activeSubCategory]
    : [category.id];

  const filteredRecipes = Object.entries(recipes).filter(([, r]) =>
    categoryIds.includes(r.category)
  );

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-neutral-800/50"
      >
        <span className="text-xl">{category.icon}</span>
        <h3 className="flex-1 text-lg font-semibold text-neutral-100">
          {category.label}
        </h3>
        <svg
          className={`h-5 w-5 text-neutral-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="border-t border-neutral-800 px-5 py-4">
          {hasSubCategories && (
            <div className="mb-4 flex gap-2">
              {category.subCategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubCategory(sub.id)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeSubCategory === sub.id
                      ? "bg-neutral-700 text-neutral-100"
                      : "bg-neutral-800/50 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300"
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {filteredRecipes.map(([id, recipe]) => (
              <EquipmentCard
                key={id}
                recipe={recipe}
                quantity={quantities[id] || 0}
                onQuantityChange={(val) => onQuantityChange(id, val)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
