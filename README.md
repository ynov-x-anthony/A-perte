# A Perte

Site d'un concessionnaire automobile fait en React avec Vite.
Projet de groupe pour l'atelier "Revoir React en groupe".

## Lancer le projet

```
cd app-react
npm install
npm run dev
```

Puis ouvrir http://localhost:5173 dans le navigateur.

## L'équipe A Perte

| Membre | Partie |
|---|---|
| Nohan Reis | Header (menu) et structure de la page |
| Shakil Khaldi | CarCard (fiche d'une voiture avec bouton favori) |
| Dimitri Manfredonia | Création du projet Vite et CarList (liste des voitures avec filtre par marque) |
| Matheo Amouroux | Contact (formulaire) |
| Mohand Amir | Services (liste des services avec détail) |

Chacun a travaillé sur sa propre branche puis tout a été fusionné sur main.

## Ce que le projet utilise

- Des composants React dans `src/components`
- Des props pour passer les données du parent (`App.tsx`) aux enfants
- Du state avec `useState` pour les interactions (menu, favori, filtre, formulaire, service choisi)
- Du JSX avec `.map` et `key` pour afficher les listes
