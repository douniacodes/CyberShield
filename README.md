# CyberShield Dashboard

![PREVIEW](/public/preview-cybershield.gif)

Interface de supervision SOC (Security Operations Center) développée avec **React + TypeScript + Tailwind**.

Ce projet simule un dashboard de monitoring de sécurité avec :
- suivi d’activité en temps réel
- visualisation des incidents
- gestion des utilisateurs
- état des services système

---

## ⚙️ Stack technique

- React 18
- TypeScript
- React Router DOM
- TailwindCSS
- Lucide Icons
- shadcn/ui (Card, Table, Button, Input, etc.)

---

## 📊 Fonctionnalités

### Dashboard
- KPI sécurité (menaces, incidents, utilisateurs, trafic)
- Flux d’activité en direct
- État des services système

### Activité
- Logs système en temps réel
- Filtrage par type (authentification, réseau, système)
- Statuts : succès / échec / alerte

### Incidents
- Liste des incidents de sécurité
- Niveaux de criticité
- Suivi des statuts

### Utilisateurs
- Liste des utilisateurs
- Rôles et permissions
- Statut actif / inactif

### Paramètres
- Configuration du système
- Préférences interface

---

## Architecture

src/
├── components/
│ ├── ui/ # composants shadcn (card, table, input…)
│ └── layout/ # sidebar, header
├── config/
│ └── menu.ts # navigation centrale
├── pages/
│ ├── Dashboard.tsx
│ ├── Activity.tsx
│ ├── Incidents.tsx
│ ├── Users.tsx
│ └── Settings.tsx
├── layouts/
│ └── AppLayout.tsx
└── lib/ 
│ └── utils.ts
└── App.tsx
└── index.css
└── main.tsx



---

## Installation

```bash
# installer les dépendances
npm install

# lancer le projet
npm run dev
