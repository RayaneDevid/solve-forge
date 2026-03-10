import { useState } from "react";
import Header from "./components/header";
import CategorySection from "./components/category-section";
import ResourceSummary from "./components/resource-summary";
import { categories } from "./data/categories";

export default function App() {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (recipeId, value) => {
    setQuantities((prev) => ({ ...prev, [recipeId]: value }));
  };

  const handleReset = () => {
    setQuantities({});
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-4">
          {categories.map((cat) => (
            <CategorySection
              key={cat.id}
              category={cat}
              quantities={quantities}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
        <div className="mt-8">
          <ResourceSummary quantities={quantities} onReset={handleReset} />
        </div>
      </main>
    </div>
  );
}
