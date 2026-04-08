export const categories = [
  { id: "rings", label: "Bagues", icon: "💍" },
  { id: "boots", label: "Bottes", icon: "👢" },
  { id: "earrings", label: "Boucles d'oreille", icon: "✨" },
  { id: "gloves", label: "Gants", icon: "🧤" },
  { id: "necklaces", label: "Colliers", icon: "📿" },
  {
    id: "pants",
    label: "Pantalons",
    icon: "👖",
    subCategories: [
      { id: "pants_hp", label: "HP" },
      { id: "pants_jutsu", label: "Jutsu" },
      { id: "pants_armor", label: "Armure" },
    ],
  },
  {
    id: "chest",
    label: "Torses",
    icon: "🥋",
    subCategories: [
      { id: "chest_hp", label: "HP" },
      { id: "chest_jutsu", label: "Jutsu" },
      { id: "chest_armor", label: "Armure" },
    ],
  },
  { id: "katana", label: "Katanas", icon: "⚔️" },
];
