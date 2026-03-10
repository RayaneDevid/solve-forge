# Contexte Projet — Calculateur de Forge NarutoRP

## Description
Application web React + Vite + TailwindCSS.
Permet aux joueurs d'un serveur NarutoRP de sélectionner des équipements à forger
et d'obtenir le total des ressources nécessaires en temps réel.

---

## Stack technique
- React + Vite
- TailwindCSS
- Pas de backend — tout est client-side
- Données dans un fichier de config statique `src/data/recipes.js`

---

## Structure des assets

Tous les assets sont dans le dossier `assets/` à la racine du projet.

### Équipements

```
assets/
├── boots/
│   ├── t1.png
│   ├── t2.png
│   ├── t3.png
│   └── t4.png
├── chest/
│   ├── armor/  (t1.png → t4.png)
│   ├── hp/     (t1.png → t4.png)
│   └── jutsu/  (t1.png → t4.png)
├── earrings/   (t1.png → t4.png)
├── gloves/     (t1.png → t4.png)
├── necklaces/  (t1.png → t4.png)
├── pants/
│   ├── armor/  (t1.png → t4.png)
│   ├── hp/     (t1.png → t4.png)
│   └── jutsu/  (t1.png → t4.png)
└── rings/      (t1.png → t4.png)
```

### Ressources

```
assets/ressources/
├── fer_brut.png
├── cuivre_brut.png
├── sphere_en_bois.png
├── laniere.png
├── lingot_de_cuivre.png
├── lingot_de_fer.png
├── aluminium.png
├── lingot_dor.png
├── eclate_de_lune.png
├── coeur_de_lune.png
├── parchemin_dore.png
├── artefact.png
├── parchemin_basique.png
├── acier_brut.png
├── ficelle.png
├── bronzite_brut.png
├── lingot_dacier.png
├── diamant_pur.png
├── obsidienne_brut.png
├── metaux.png
├── or.png
├── emeraude.png
├── perle_de_nacre.png
├── laine.png
├── plume.png
├── tissu.png
├── lin.png
├── pochette_en_cuir.png
├── diamant_brut.png
├── tissu_precieux.png
├── lingot_demeraude.png
├── parchemin_rare.png
├── parchemin_epique.png
├── lingot_dobsidienne.png
├── pierre_volcanique.png
├── diamant_raffine.png
├── parchemin_legendaire.png
└── daim.png
```

---

## Structure des données — `src/data/recipes.js`

### Resources registry

Chaque ressource est déclarée avec un `id` (snake_case), un `label` (français) et
son chemin d'image relatif depuis la racine Vite.

```js
export const resources = {
  fer_brut:             { label: "Fer brut",             image: "/assets/ressources/fer_brut.png" },
  cuivre_brut:          { label: "Cuivre brut",          image: "/assets/ressources/cuivre_brut.png" },
  sphere_en_bois:       { label: "Sphère en bois",       image: "/assets/ressources/sphere_en_bois.png" },
  laniere:              { label: "Lanière",              image: "/assets/ressources/laniere.png" },
  lingot_de_cuivre:     { label: "Lingot de cuivre",     image: "/assets/ressources/lingot_de_cuivre.png" },
  lingot_de_fer:        { label: "Lingot de fer",        image: "/assets/ressources/lingot_de_fer.png" },
  aluminium:            { label: "Aluminium",            image: "/assets/ressources/aluminium.png" },
  lingot_dor:           { label: "Lingot d'or",          image: "/assets/ressources/lingot_dor.png" },
  eclate_de_lune:       { label: "Eclate de lune",       image: "/assets/ressources/eclate_de_lune.png" },
  coeur_de_lune:        { label: "Coeur de lune",        image: "/assets/ressources/coeur_de_lune.png" },
  parchemin_dore:       { label: "Parchemin doré",       image: "/assets/ressources/parchemin_dore.png" },
  artefact:             { label: "Artefact",             image: "/assets/ressources/artefact.png" },
  parchemin_basique:    { label: "Parchemin basique",    image: "/assets/ressources/parchemin_basique.png" },
  acier_brut:           { label: "Acier brut",           image: "/assets/ressources/acier_brut.png" },
  ficelle:              { label: "Ficelle",              image: "/assets/ressources/ficelle.png" },
  bronzite_brut:        { label: "Bronzite brut",        image: "/assets/ressources/bronzite_brut.png" },
  lingot_dacier:        { label: "Lingot d'acier",       image: "/assets/ressources/lingot_dacier.png" },
  diamant_pur:          { label: "Diamant pur",          image: "/assets/ressources/diamant_pur.png" },
  obsidienne_brut:      { label: "Obsidienne brut",      image: "/assets/ressources/obsidienne_brut.png" },
  metaux:               { label: "Métaux",               image: "/assets/ressources/metaux.png" },
  or:                   { label: "Or",                   image: "/assets/ressources/or.png" },
  emeraude:             { label: "Emeraude",             image: "/assets/ressources/emeraude.png" },
  perle_de_nacre:       { label: "Perle de nacre",       image: "/assets/ressources/perle_de_nacre.png" },
  laine:                { label: "Laine",                image: "/assets/ressources/laine.png" },
  plume:                { label: "Plume",                image: "/assets/ressources/plume.png" },
  tissu:                { label: "Tissu",                image: "/assets/ressources/tissu.png" },
  lin:                  { label: "Lin",                  image: "/assets/ressources/lin.png" },
  pochette_en_cuir:     { label: "Pochette en cuir",     image: "/assets/ressources/pochette_en_cuir.png" },
  diamant_brut:         { label: "Diamant Brut",         image: "/assets/ressources/diamant_brut.png" },
  tissu_precieux:       { label: "Tissu précieux",       image: "/assets/ressources/tissu_precieux.png" },
  lingot_demeraude:     { label: "Lingot d'émeraude",    image: "/assets/ressources/lingot_demeraude.png" },
  parchemin_rare:       { label: "Parchemin Rare",       image: "/assets/ressources/parchemin_rare.png" },
  parchemin_epique:     { label: "Parchemin épique",     image: "/assets/ressources/parchemin_epique.png" },
  lingot_dobsidienne:   { label: "Lingot d'obsidienne",  image: "/assets/ressources/lingot_dobsidienne.png" },
  pierre_volcanique:    { label: "Pierre volcanique",    image: "/assets/ressources/pierre_volcanique.png" },
  diamant_raffine:      { label: "Diamant raffiné",      image: "/assets/ressources/diamant_raffine.png" },
  parchemin_legendaire: { label: "Parchemin légendaire", image: "/assets/ressources/parchemin_legendaire.png" },
  daim:                 { label: "Daim",                 image: "/assets/ressources/daim.png" },
}
```

### Recipes registry

Chaque recette a : `id`, `label`, `tier` (1-4), `category`, `image`, `resources` (objet `{ resource_id: quantité }`).
Toutes les recettes sont complètes — fichier source de vérité : `src/data/recipes.js`.

```js
export const recipes = {

  // ── BAGUES ──────────────────────────────────
  bague_t1: {
    label: "Bague T1", tier: 1, category: "rings", image: "/assets/rings/t1.png",
    resources: { cuivre_brut: 10, laniere: 4, sphere_en_bois: 1, fer_brut: 10 }
  },
  bague_t2: {
    label: "Bague T2", tier: 2, category: "rings", image: "/assets/rings/t2.png",
    resources: { lingot_de_cuivre: 4, laniere: 6, lingot_de_fer: 4, aluminium: 3 }
  },
  bague_t3: {
    label: "Bague T3", tier: 3, category: "rings", image: "/assets/rings/t3.png",
    resources: { laniere: 6, lingot_de_fer: 6, lingot_dor: 1, lingot_de_cuivre: 6, eclat_de_lune: 2, aluminium: 3 }
  },
  bague_t4: {
    label: "Bague T4", tier: 4, category: "rings", image: "/assets/rings/t4.png",
    resources: { parchemin_dore: 2, laniere: 6, lingot_de_fer: 8, lingot_dor: 1, lingot_de_cuivre: 8, artefact: 2, coeur_de_lune: 1, aluminium: 3 }
  },

  // ── BOTTES ──────────────────────────────────
  bottes_t1: {
    label: "Bottes T1", tier: 1, category: "boots", image: "/assets/boots/t1.png",
    resources: { parchemin_basique: 4, fer_brut: 10, acier_brut: 10, ficelle: 4 }
  },
  bottes_t2: {
    label: "Bottes T2", tier: 2, category: "boots", image: "/assets/boots/t2.png",
    resources: { bronzite_brut: 4, lingot_dacier: 4, parchemin_basique: 6, ficelle: 4 }
  },
  bottes_t3: {
    label: "Bottes T3", tier: 3, category: "boots", image: "/assets/boots/t3.png",
    resources: { bronzite_brut: 6, lingot_dacier: 6, ficelle: 6, diamant_pur: 1, parchemin_epique: 1, eclat_de_lune: 1 }
  },
  bottes_t4: {
    label: "Bottes T4", tier: 4, category: "boots", image: "/assets/boots/t4.png",
    resources: { bronzite_brut: 8, lingot_dacier: 8, ficelle: 8, parchemin_dore: 2, diamant_pur: 1, obsidienne_brut: 1, eclat_de_lune: 1 }
  },

  // ── BOUCLES D'OREILLE ───────────────────────
  boucle_t1: {
    label: "Boucle d'oreille T1", tier: 1, category: "earrings", image: "/assets/earrings/t1.png",
    resources: { parchemin_basique: 2, fer_brut: 10, acier_brut: 10, ficelle: 4 }
  },
  boucle_t2: {
    label: "Boucle d'oreille T2", tier: 2, category: "earrings", image: "/assets/earrings/t2.png",
    resources: { parchemin_basique: 2, lingot_dacier: 4, lingot_de_fer: 4, ficelle: 6 }
  },
  boucle_t3: {
    label: "Boucle d'oreille T3", tier: 3, category: "earrings", image: "/assets/earrings/t3.png",
    resources: { lingot_dacier: 6, lingot_de_fer: 6, ficelle: 6, obsidienne_brut: 2, or: 2, emeraude: 2, metaux: 3 }
  },
  boucle_t4: {
    label: "Boucle d'oreille T4", tier: 4, category: "earrings", image: "/assets/earrings/t4.png",
    resources: { metaux: 3, lingot_de_fer: 8, or: 2, perle_de_nacre: 2, emeraude: 2, ficelle: 6, pierre_volcanique: 2, lingot_dacier: 8, obsidienne_brut: 2 }
  },

  // ── GANTS ────────────────────────────────────
  gants_t1: {
    label: "Gants T1", tier: 1, category: "gloves", image: "/assets/gloves/t1.png",
    resources: { laine: 10, plume: 4, tissu: 10 }
  },
  gants_t2: {
    label: "Gants T2", tier: 2, category: "gloves", image: "/assets/gloves/t2.png",
    resources: { lin: 4, plume: 4, pochette_en_cuir: 4 }
  },
  gants_t3: {
    label: "Gants T3", tier: 3, category: "gloves", image: "/assets/gloves/t3.png",
    resources: { diamant_brut: 1, plume: 6, pochette_en_cuir: 6, or: 1, lin: 6, emeraude: 1, eclat_de_lune: 1 }
  },
  gants_t4: {
    label: "Gants T4", tier: 4, category: "gloves", image: "/assets/gloves/t4.png",
    resources: { tissu_precieux: 2, plume: 8, pochette_en_cuir: 8, or: 1, lin: 8, emeraude: 1, eclat_de_lune: 1, diamant_brut: 1 }
  },

  // ── COLLIERS ─────────────────────────────────
  collier_t1: {
    label: "Collier T1", tier: 1, category: "necklaces", image: "/assets/necklaces/t1.png",
    resources: { plume: 4, cuivre_brut: 10, fer_brut: 10, ficelle: 2 }
  },
  collier_t2: {
    label: "Collier T2", tier: 2, category: "necklaces", image: "/assets/necklaces/t2.png",
    resources: { parchemin_rare: 1, plume: 4, lingot_de_fer: 4, ficelle: 2, lingot_de_cuivre: 4 }
  },
  collier_t3: {
    label: "Collier T3", tier: 3, category: "necklaces", image: "/assets/necklaces/t3.png",
    resources: { parchemin_epique: 1, plume: 4, lingot_de_fer: 6, ficelle: 4, lingot_de_cuivre: 6, diamant_raffine: 1, emeraude: 1 }
  },
  collier_t4: {
    label: "Collier T4", tier: 4, category: "necklaces", image: "/assets/necklaces/t4.png",
    resources: { plume: 4, lingot_de_fer: 8, ficelle: 4, lingot_de_cuivre: 8, emeraude: 2, diamant_raffine: 1, parchemin_legendaire: 2 }
  },

  // ── PANTALON HP ──────────────────────────────
  pantalon_hp_t1: {
    label: "Pantalon HP T1", tier: 1, category: "pants_hp", image: "/assets/pants/hp/t1.png",
    resources: { laine: 10, parchemin_basique: 2, fer_brut: 4, tissu: 10 }
  },
  pantalon_hp_t2: {
    label: "Pantalon HP T2", tier: 2, category: "pants_hp", image: "/assets/pants/hp/t2.png",
    resources: { metaux: 4, lingot_de_fer: 4, tissu: 4 }
  },
  pantalon_hp_t3: {
    label: "Pantalon HP T3", tier: 3, category: "pants_hp", image: "/assets/pants/hp/t3.png",
    resources: { lingot_demeraude: 1, metaux: 6, lingot_de_fer: 6, tissu: 6 }
  },
  pantalon_hp_t4: {
    label: "Pantalon HP T4", tier: 4, category: "pants_hp", image: "/assets/pants/hp/t4.png",
    resources: { tissu_precieux: 2, lingot_de_fer: 8, tissu: 8, lingot_demeraude: 1, metaux: 8 }
  },

  // ── PANTALON JUTSU ───────────────────────────
  pantalon_jutsu_t1: {
    label: "Pantalon Jutsu T1", tier: 1, category: "pants_jutsu", image: "/assets/pants/jutsu/t1.png",
    resources: { laine: 4, cuivre_brut: 10, acier_brut: 10 }
  },
  pantalon_jutsu_t2: {
    label: "Pantalon Jutsu T2", tier: 2, category: "pants_jutsu", image: "/assets/pants/jutsu/t2.png",
    resources: { parchemin_rare: 1, lingot_dacier: 4, lingot_de_cuivre: 4 }
  },
  pantalon_jutsu_t3: {
    label: "Pantalon Jutsu T3", tier: 3, category: "pants_jutsu", image: "/assets/pants/jutsu/t3.png",
    resources: { parchemin_epique: 1, lingot_dacier: 6, or: 3, laine: 6, lingot_de_cuivre: 6 }
  },
  pantalon_jutsu_t4: {
    label: "Pantalon Jutsu T4", tier: 4, category: "pants_jutsu", image: "/assets/pants/jutsu/t4.png",
    resources: { lingot_dacier: 8, lingot_dor: 1, laine: 8, tissu_precieux: 2, lingot_de_cuivre: 8 }
  },

  // ── PANTALON ARMURE ──────────────────────────
  pantalon_armor_t1: {
    label: "Pantalon Armure T1", tier: 1, category: "pants_armor", image: "/assets/pants/armor/t1.png",
    resources: { parchemin_basique: 2, fer_brut: 10, acier_brut: 10, tissu: 4 }
  },
  pantalon_armor_t2: {
    label: "Pantalon Armure T2", tier: 2, category: "pants_armor", image: "/assets/pants/armor/t2.png",
    resources: { lingot_dacier: 4, lingot_de_fer: 4, tissu: 4 }
  },
  pantalon_armor_t3: {
    label: "Pantalon Armure T3", tier: 3, category: "pants_armor", image: "/assets/pants/armor/t3.png",
    resources: { lingot_dobsidienne: 1, lingot_dacier: 6, lingot_de_fer: 6, tissu: 6 }
  },
  pantalon_armor_t4: {
    label: "Pantalon Armure T4", tier: 4, category: "pants_armor", image: "/assets/pants/armor/t4.png",
    resources: { lingot_dacier: 8, lingot_de_fer: 8, tissu: 8, lingot_dobsidienne: 1, pierre_volcanique: 2 }
  },

  // ── TORSE HP ─────────────────────────────────
  torse_hp_t1: {
    label: "Torse HP T1", tier: 1, category: "chest_hp", image: "/assets/chest/hp/t1.png",
    resources: { parchemin_basique: 2, cuivre_brut: 10, tissu: 10, ficelle: 4 }
  },
  torse_hp_t2: {
    label: "Torse HP T2", tier: 2, category: "chest_hp", image: "/assets/chest/hp/t2.png",
    resources: { lingot_de_cuivre: 4, parchemin_rare: 1, daim: 4, ficelle: 4 }
  },
  torse_hp_t3: {
    label: "Torse HP T3", tier: 3, category: "chest_hp", image: "/assets/chest/hp/t3.png",
    resources: { obsidienne_brut: 2, or: 2, lingot_de_cuivre: 6, daim: 6, ficelle: 6 }
  },
  torse_hp_t4: {
    label: "Torse HP T4", tier: 4, category: "chest_hp", image: "/assets/chest/hp/t4.png",
    resources: { artefact: 2, ficelle: 8, lingot_de_cuivre: 8, lingot_demeraude: 1, daim: 8 }
  },

  // ── TORSE JUTSU ──────────────────────────────
  torse_jutsu_t1: {
    label: "Torse Jutsu T1", tier: 1, category: "chest_jutsu", image: "/assets/chest/jutsu/t1.png",
    resources: { parchemin_basique: 2, fer_brut: 10, acier_brut: 10, ficelle: 4 }
  },
  torse_jutsu_t2: {
    label: "Torse Jutsu T2", tier: 2, category: "chest_jutsu", image: "/assets/chest/jutsu/t2.png",
    resources: { parchemin_basique: 4, lingot_dacier: 4, lingot_de_fer: 4, ficelle: 4 }
  },
  torse_jutsu_t3: {
    label: "Torse Jutsu T3", tier: 3, category: "chest_jutsu", image: "/assets/chest/jutsu/t3.png",
    resources: { parchemin_epique: 1, lingot_dacier: 6, lingot_de_fer: 6, ficelle: 6, obsidienne_brut: 1, eclat_de_lune: 2 }
  },
  torse_jutsu_t4: {
    label: "Torse Jutsu T4", tier: 4, category: "chest_jutsu", image: "/assets/chest/jutsu/t4.png",
    resources: { lingot_dacier: 8, lingot_de_fer: 8, parchemin_dore: 2, obsidienne_brut: 2, eclat_de_lune: 2, ficelle: 8 }
  },

  // ── TORSE ARMURE ─────────────────────────────
  torse_armor_t1: {
    label: "Torse Armure T1", tier: 1, category: "chest_armor", image: "/assets/chest/armor/t1.png",
    resources: { tissu: 10, acier_brut: 10, ficelle: 4 }
  },
  torse_armor_t2: {
    label: "Torse Armure T2", tier: 2, category: "chest_armor", image: "/assets/chest/armor/t2.png",
    resources: { parchemin_rare: 1, lingot_dacier: 4, daim: 4, ficelle: 4 }
  },
  torse_armor_t3: {
    label: "Torse Armure T3", tier: 3, category: "chest_armor", image: "/assets/chest/armor/t3.png",
    resources: { lingot_dobsidienne: 1, lingot_dacier: 6, daim: 6, ficelle: 6 }
  },
  torse_armor_t4: {
    label: "Torse Armure T4", tier: 4, category: "chest_armor", image: "/assets/chest/armor/t4.png",
    resources: { lingot_dacier: 8, ficelle: 8, pierre_volcanique: 2, lingot_dobsidienne: 1, daim: 8 }
  },
}
```

---

## Catégories UI — `src/data/categories.js`

Définit l'ordre d'affichage et le regroupement dans l'interface.

```js
export const categories = [
  { id: "rings",     label: "Bagues",            icon: "💍" },
  { id: "boots",     label: "Bottes",            icon: "👢" },
  { id: "earrings",  label: "Boucles d'oreille", icon: "✨" },
  { id: "gloves",    label: "Gants",             icon: "🧤" },
  { id: "necklaces", label: "Colliers",          icon: "📿" },
  {
    id: "pants",
    label: "Pantalons",
    icon: "👖",
    subCategories: [
      { id: "pants_hp",    label: "HP"     },
      { id: "pants_jutsu", label: "Jutsu"  },
      { id: "pants_armor", label: "Armure" },
    ]
  },
  {
    id: "chest",
    label: "Torses",
    icon: "🥋",
    subCategories: [
      { id: "chest_hp",    label: "HP"     },
      { id: "chest_jutsu", label: "Jutsu"  },
      { id: "chest_armor", label: "Armure" },
    ]
  },
]
```

---

## Logique de calcul — règles métier

- `selectedQuantities` : objet `{ recipe_id: number }` (state React global)
- Total d'une ressource = `Σ (recipes[id].resources[res] * selectedQuantities[id])` pour tous les ids sélectionnés
- Afficher uniquement les ressources dont le total calculé est > 0
- Le bouton Reset remet tous les `selectedQuantities` à 0
- Le bouton "Copier la liste" génère un texte plain-text formaté :

```
📦 Ressources nécessaires :
- Fer brut : 12
- Lingot de fer : 6
...
```

---

## Conventions de code

- Composants dans `src/components/`
- Données dans `src/data/`
- Assets référencés avec des chemins absolus depuis la racine Vite (`/assets/...`)
- Pas de librairie UI externe — TailwindCSS only
- State global géré avec `useState` + Context API (pas de Zustand pour ce projet)
- Nommage : camelCase pour les variables/fonctions, kebab-case pour les fichiers

---

## TODO

- [x] Remplir les `resources` de chaque recette dans `recipes.js` — toutes les recettes sont complètes
- [ ] Ajouter un système de favoris (localStorage) pour sauvegarder une sélection
- [ ] Optionnel : mode "liste de courses" exportable en PDF