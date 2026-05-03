# Portfolio Personnel

Site portfolio statique hébergé sur Netlify. Aucune dépendance à installer.

🔗 **Live** : [andrebitote.netlify.app](https://andrebitote.netlify.app)

---

## Contenu du site

| Section | Contenu |
|---------|---------|
| **Hero** | Nom, effet typewriter, stats animées, liens CV/LinkedIn |
| **À propos** | Profil, photo, soft skills, centres d'intérêts |
| **Compétences** | Réseaux & Infrastructure · Cybersécurité · Systèmes, Cloud & Dev |
| **Expériences** | 3 stages en entreprise |
| **Formation** | Diplômes + badges certifications Cisco/Fortinet |
| **Projets** | 6 projets académiques avec activités détaillées |
| **Contact** | Formulaire Formspree + réseaux sociaux |

---

## Structure des fichiers

```
portfolio/
├── index.html          # Page unique — toutes les sections
├── css/
│   └── style.css       # CSS custom — variables, layout, animations
├── js/
│   └── main.js         # Vanilla JS — scroll reveal, typewriter, thème, formulaire
├── assets/
│   ├── photo.jpg       # Photo de profil
│   └── cv.pdf          # CV PDF téléchargeable
├── netlify.toml        # Headers de sécurité HTTP
└── README.md
```

---

## Technologies

- **HTML / CSS / JS vanilla** — aucune dépendance npm
- **Google Fonts** : Syne (titres) + Space Grotesk (corps)
- **Animations** : CSS keyframes + `IntersectionObserver` (scroll reveal)
- **Thème** : dark (défaut) / light — persisté en `localStorage`
- **Responsive** : mobile-first, breakpoints 1024 px et 768 px
- **Analytics** : Google Tag Manager

---

## Sécurité

Headers HTTP configurés via `netlify.toml` :
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

Score Mozilla Observatory : **A+** — SSL Labs : **A+**

---

## Déploiement

```bash
git add .
git commit -m "Mise à jour"
git push
```

Netlify redéploie automatiquement à chaque push.

---

## Formulaire de contact

Formulaire connecté à **Formspree** — les messages arrivent directement par email.
