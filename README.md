# Andre Gustave Bitote — Portfolio

Portfolio personnel statique d'Andre Gustave Bitote, étudiant ingénieur en **Sécurité et Qualité des Réseaux** à Polytech Dijon. En recherche d'un contrat de professionnalisation à partir de **septembre 2026**.

🔗 **Live** : [bnfs.github.io/andre-gustave-bitote-porfolio](https://bnfs.github.io/andre-gustave-bitote-porfolio)

---

## Contenu du site

| Section | Contenu |
|---------|---------|
| **Hero** | Nom, effet typewriter (Ingénieur Réseaux / Expert Cybersécurité…), stats animées, liens CV/LinkedIn |
| **À propos** | Profil, photo, disponibilité alternance sept. 2026 |
| **Compétences** | Réseaux & Infrastructure · Cybersécurité · Systèmes, Cloud & Dev — tags par niveau |
| **Expériences** | CENADI (2025) · Embolo Sarl (2024) · Ministère Communication (2023) |
| **Formation** | Polytech Dijon · ENSP Yaoundé · Université Yaoundé 1 + badges certifications |
| **Projets** | SIEM/XDR Wazuh · Infrastructure multi-protocoles · Active Directory |
| **Contact** | Formulaire + email, téléphone, LinkedIn, GitHub |

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
│   ├── photo.jpg       # Photo de profil (à ajouter)
│   └── cv.pdf          # CV PDF téléchargeable (à ajouter)
└── README.md
```

---

## Technologies

- **HTML / CSS / JS vanilla** — aucune dépendance npm
- **Google Fonts** : Syne (titres) + Space Grotesk (corps)
- **Animations** : CSS keyframes + `IntersectionObserver` (scroll reveal)
- **Thème** : dark (défaut) / light — persisté en `localStorage`
- **Responsive** : mobile-first, breakpoints 1024 px et 768 px

---

## Coordonnées

| | |
|-|-|
| **Email** | andre-gustave_bitote@etu.ubourgogne.fr |
| **Téléphone** | +33 06 56 89 01 26 |
| **LinkedIn** | [Andre Gustave Bitote](https://www.linkedin.com/in/andre-gustave-bitote-9b2927385) |
| **GitHub** | [github.com/Bnfs](https://github.com/Bnfs) |
| **Localisation** | 94 Bd Mansart, Dijon 21000 |

---

## Certifications

| Certification | Organisme | Statut |
|---------------|-----------|--------|
| CCNA 1 | Cisco | ✅ Obtenue |
| CCNA 2 | Cisco | ✅ Obtenue |
| CCNA 3 | Cisco | ✅ Obtenue |
| CyberOps Associate | Cisco | ✅ Obtenue |
| NSE 1 · 2 · 3 | Fortinet | ✅ Obtenues |
| CCNP | Cisco | ⏳ En cours |

---

## Déploiement

### GitHub Pages (actuel)

```bash
git add .
git commit -m "Mise à jour"
git push
```

Activez GitHub Pages dans **Settings → Pages → Branch: main → / (root)**.

### Netlify (alternative)

Glissez-déposez le dossier sur [app.netlify.com/drop](https://app.netlify.com/drop).

---

## Activer le formulaire de contact

Par défaut le formulaire simule l'envoi. Pour l'activer avec **Formspree** (gratuit) :

1. Créez un compte sur [formspree.io](https://formspree.io) et obtenez un ID de formulaire
2. Dans `index.html`, modifiez la balise `<form>` :
   ```html
   <form action="https://formspree.io/f/VOTRE_ID" method="POST" ...>
   ```
3. Dans `js/main.js`, supprimez le `e.preventDefault()` dans le listener `submit`

---

## Personnalisation rapide

Cherchez `✏️` dans `index.html` pour trouver les seuls points encore à vérifier :
- URL LinkedIn (déjà mise à jour : `linkedin.com/in/andre-gustave-bitote-9b2927385`)
- Déposer `assets/photo.jpg` et `assets/cv.pdf`
