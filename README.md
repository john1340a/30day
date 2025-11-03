# 🗺️ #30DayMapChallenge 2025

Mon parcours du **#30DayMapChallenge**, un défi cartographique quotidien pour explorer différentes techniques de visualisation géographique et créer 30 cartes uniques en 30 jours.

## 📅 Le Challenge

Du 1er au 30 novembre 2025, je relève le défi de créer une carte par jour selon les thèmes imposés. Ce challenge est l'occasion d'expérimenter avec différents outils, datasets, styles et techniques de cartographie.

> **Liens utiles :**
> - [Site officiel du #30DayMapChallenge](https://30daymapchallenge.com)
> - [GitHub officiel](https://github.com/tjukanovt/30DayMapChallenge)
> - Twitter : [@tjukanov](https://twitter.com/tjukanov)

---

## 📂 Structure du Repository

Chaque projet est organisé dans son propre dossier avec son README dédié, son code source et ses ressources.

```
30day/
├── 01-points/              # Jour 1 : Points
├── 02-lines/               # Jour 2 : Lignes
├── 03-polygons/            # Jour 3 : Polygones
└── ...
```

---

## 🗓️ Calendrier des Thèmes

| Date | Thème | Description | Statut |
|------|-------|-------------|--------|
| **01/11** | **Points** | Carte avec données ponctuelles (lieux, POI, clusters). Focus sur la symbolisation et la densité. | ✅ [bordeaux-night-map](./bordeaux-night-map) |
| **02/11** | **Lines** | Cartographier des éléments linéaires (routes, rivières, flux). Explorer épaisseur, couleur et direction. | ⏳ |
| **03/11** | **Polygons** | Carte axée sur les surfaces (régions, occupation du sol, frontières). Utiliser remplissages, motifs et choropléthes. | ⏳ |
| **04/11** | **My Data** | Cartographier quelque chose de personnel avec votre propre dataset (traces GPS, trajets, données uniques). | ⏳ |
| **05/11** | **Earth** | Éléments Classiques 1/4 : Focus sur le tangible. Cartographier relief, géologie, sol, agriculture, élévation. | ⏳ |
| **06/11** | **Dimensions** | Au-delà de la 2D. Visualiser en 3D, extrusions, profondeur, temps comme dimension. | ⏳ |
| **07/11** | **Accessibility** | Comment les gens se déplacent. Temps de trajet, barrières, design inclusif, portée des transports. | ⏳ |
| **08/11** | **Urban** | Journée Mondiale de l'Urbanisme : Environnement bâti, réseaux de rues, gratte-ciels, infrastructures. | ⏳ |
| **09/11** | **Analog** | Créer une carte avec méthodes traditionnelles (stylo, crayon, peinture, collage, modèles physiques). | ⏳ |
| **10/11** | **Air** | Éléments Classiques 2/4 : Focus sur l'atmosphère. Météo, vent, trafic aérien, pollution, son. | ⏳ |
| **11/11** | **Minimal map** | Utiliser le minimum d'éléments possibles tout en gardant la carte claire et informative. | ⏳ |
| **12/11** | **Map from 2125** | À quoi ressembleront les cartes dans 100 ans ? Créer une carte spéculative du futur. | ⏳ |
| **13/11** | **10 minute map** | Chronomètre lancé ! Temps maximum : 10 minutes. Focus sur rapidité, simplicité et communication. | ⏳ |
| **14/11** | **OpenStreetMap** | Utiliser OSM comme source principale. Cartographier votre feature préférée. | ⏳ |
| **15/11** | **Fire** | Éléments Classiques 3/4 : Énergie, lumière, transformation. Chaleur, incendies, énergie, nuit. | ⏳ |
| **16/11** | **Cell** | Cartographier des unités discrètes ou réseaux. Cellules géographiques, réseaux cellulaires, propagation. | ⏳ |
| **17/11** | **A new tool** | Créer avec un outil, langage ou technique jamais utilisé auparavant. | ⏳ |
| **18/11** | **Out of this world** | Cartographier du non-terrestre : monde fantasy, exoplanète, Lune, Mars, espace profond. | ⏳ |
| **19/11** | **Projections** | GIS Day : Focus sur les projections cartographiques. Projection inhabituelle, visualiser la distorsion. | ⏳ |
| **20/11** | **Water** | Éléments Classiques 4/4 : Le fluide. Hydrologie, océans, courants, précipitations, niveau de la mer. | ⏳ |
| **21/11** | **Icons** | Carte où icônes et pictogrammes sont le focus principal. Symboles personnalisés. | ⏳ |
| **22/11** | **Natural Earth** | Utiliser le dataset Natural Earth pour une carte monde ou continent visuellement époustouflante. | ⏳ |
| **23/11** | **Process** | Montrer comment vous créez une carte. Tutoriel, étapes, blog, vidéo, screenshots. | ⏳ |
| **24/11** | **Places and their names** | Focus sur la toponymie. Typographie, polices, placement, langues multiples, histoire des noms. | ⏳ |
| **25/11** | **Hexagons** | Utiliser hexbins ou grilles hexagonales. Célébrer cette tessellation efficace ! | ⏳ |
| **26/11** | **Transport** | Journée Mondiale du Transport Durable : Mobilité, flux, réseaux de transport, logistique. | ⏳ |
| **27/11** | **Boundaries** | Lignes de division—politiques, physiques, écologiques, conceptuelles. Impact des frontières. | ⏳ |
| **28/11** | **Black** | Black Friday : Interpréter le thème du Noir. Monochrome, absence/obscurité, pollution lumineuse. | ⏳ |
| **29/11** | **Raster** | Cartographier avec données raster. Imagerie satellite, modèles d'élévation, occupation du sol, art pixel. | ⏳ |
| **30/11** | **Makeover** | Reprendre une carte du mois ou ancienne et la redesigner. Améliorer esthétique et clarté. | ⏳ |

---

## 🎯 Projets Réalisés

### Jour 1 : Points - Carte Nocturne de Bordeaux 🌃

**[bordeaux-night-map](./bordeaux-night-map)**

Une carte interactive nocturne de Bordeaux montrant l'éclairage public avec des effets lumineux animés réalistes.

**Technologies :**
- React + Vite
- MapLibre GL JS
- Données : GeoJSON de Bordeaux Métropole (11.9 MB)

**Fonctionnalités :**
- ✨ Animation de pulsation réaliste des points lumineux
- 🎨 4 couches de glow pour effet de profondeur
- 💡 Popups interactifs avec détails des lampadaires
- 🌙 Style Dark Matter pour ambiance nocturne
- 🎯 Légende animée

**Stack technique :** ESLint, Prettier, format on save configuré

---

## 🛠️ Technologies & Outils Utilisés

- **Cartographie :** MapLibre GL JS, Leaflet, D3.js, QGIS
- **Langages :** JavaScript, Python
- **Frameworks :** React, Vite
- **Données :** OpenStreetMap, Natural Earth, GeoJSON.io
- **Styling :** CSS3, Animations

---

## 🚀 Comment Utiliser ce Repo

### Cloner le repository

```bash
git clone https://github.com/VOTRE_USERNAME/30day.git
cd 30day
```

### Lancer un projet spécifique

```bash
cd bordeaux-night-map
npm install
npm run dev
```

Chaque sous-dossier contient son propre README avec les instructions spécifiques.

---

## 📝 Licence

Ce projet est open source sous licence MIT. Les données utilisées proviennent de sources publiques (OpenStreetMap, Open Data, etc.) et conservent leurs licences respectives.

---

## 🤝 Contributions & Contact

Ce challenge est un parcours personnel, mais les suggestions et retours sont les bienvenus !

**Hashtags :**
- #30DayMapChallenge
- #Maps
- #Cartography
- #DataViz
- #GIS

---

**Légende des statuts :**
- ✅ Terminé
- 🚧 En cours
- ⏳ À venir
- ❌ Abandonné
