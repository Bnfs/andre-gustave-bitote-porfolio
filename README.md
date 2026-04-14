# Portfolio Personnel — André

Site portfolio statique, hébergeable sur GitHub Pages ou Netlify. Aucune dépendance à installer.

## Structure

```
portfolio/
├── index.html        # Page unique (toutes les sections)
├── css/
│   └── style.css     # CSS custom — variables, layout, animations
├── js/
│   └── main.js       # Vanilla JS — scroll reveal, typewriter, thème, formulaire
└── assets/
    ├── photo.jpg     # Votre photo (à ajouter)
    └── cv.pdf        # Votre CV PDF (à ajouter)
```

## Personnalisation

Recherchez le commentaire `✏️` dans `index.html` et `js/main.js` pour trouver chaque zone à modifier.

### Informations essentielles

| Quoi | Où |
|------|----|
| Nom & titre | `index.html` — section Hero, `[Votre Nom]` |
| Accroche | `index.html` — `.hero__tagline` |
| Photo | Remplacez `assets/photo.jpg` |
| CV PDF | Remplacez `assets/cv.pdf` |
| Email | `index.html` — section Contact, `href="mailto:..."` |
| LinkedIn | `index.html` — Hero + Contact |
| GitHub | `index.html` — Contact |
| Rôles typewriter | `js/main.js` — tableau `roles` (~ligne 40) |
| Compteurs stats | `index.html` — attributs `data-target` dans `.hero__stat-num` |

### Sections à remplir avec vos données réelles

- **À propos** — `.about__text` et `.about__highlights`
- **Compétences** — chaque `.skills__category` avec vos propres tags
- **Expériences** — chaque `.timeline__item` (rôle, entreprise, dates, missions)
- **Formation** — chaque `.edu-card` (diplôme, école, année)
- **Projets** — chaque `.project-card` (titre, description, technos, liens GitHub/démo)

### Niveaux de compétence disponibles

```html
<span class="skill-tag skill-tag--expert">Nom</span>
<span class="skill-tag skill-tag--advanced">Nom</span>
<span class="skill-tag skill-tag--intermediate">Nom</span>
<span class="skill-tag skill-tag--beginner">Nom</span>
```

### Couleurs & typographie

Tout est centralisé dans les variables CSS au début de `css/style.css` :

```css
--accent:   #7c3aed;   /* Violet — couleur principale */
--accent-2: #06b6d4;   /* Cyan — couleur secondaire  */
--gradient: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%);
```

Pour changer la palette, modifiez uniquement ces variables.

### Formulaire de contact

Le formulaire simule l'envoi par défaut. Pour l'activer réellement :

**Option Formspree (recommandée, gratuit) :**
1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez un formulaire et copiez l'ID
3. Dans `index.html`, ajoutez sur la balise `<form>` :
   ```html
   action="https://formspree.io/f/VOTRE_ID" method="POST"
   ```
4. Retirez le `e.preventDefault()` dans `js/main.js`

## Déploiement

### GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/VOTRE_USER/VOTRE_REPO.git
git push -u origin main
```
Activez GitHub Pages dans Settings → Pages → Branch: `main`.

### Netlify

Glissez-déposez le dossier `portfolio/` sur [app.netlify.com/drop](https://app.netlify.com/drop).

## Design

- **Typographies** : [Syne](https://fonts.google.com/specimen/Syne) (titres) + [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (corps) via Google Fonts
- **Thème** : sombre par défaut, clair disponible — persisté en `localStorage`
- **Animations** : CSS keyframes + `IntersectionObserver` (scroll reveal)
- **Responsive** : mobile-first, breakpoints à 1024 px et 768 px
- **Pas de framework** : CSS custom uniquement, aucune dépendance npm
