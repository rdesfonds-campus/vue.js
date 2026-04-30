## Quand et pourquoi les SPA ont-elles émergé ?
Les SPA apparaissent véritablement dans les années 2000-2010, portées par l'essor d'AJAX (popularisé par Gmail et Google Maps en 2005). L'objectif : offrir une expérience fluide proche des applications desktop, sans rechargement systématique. L'explosion de JavaScript côté client et la montée en puissance des API REST ont ensuite rendu cette approche très populaire à partir de 2013 avec l'arrivée des grands frameworks.

## Avantages des SPA
Expérience utilisateur fluide et réactive, pas de rechargement de page, état de l'interface préservé entre les vues, séparation nette front/back permettant des équipes indépendantes, et réutilisation possible du backend pour d'autres clients (mobile, etc.).

## Inconvénients des SPA
SEO plus difficile (le contenu est rendu côté client, donc moins bien indexé nativement), premier chargement plus lent (JS bundle parfois lourd), gestion manuelle de l'historique de navigation, accessibilité à surveiller, et complexité accrue (routing, gestion d'état global).

---

## Schéma simplifié — fonctionnement d'une SPA

```
APPLICATION TRADITIONNELLE (MPA)          SINGLE PAGE APPLICATION (SPA)
─────────────────────────────────         ──────────────────────────────────────

[Navigateur]                              [Navigateur]
     │                                         │
     │  Requête HTTP (clic sur lien)           │  1 seule requête HTTP (1ère visite)
     ▼                                         ▼
[Serveur]                                 [Serveur]
     │                                         │
     │  Réponse : page HTML complète           │  Réponse : HTML + JS bundle (une fois)
     ▼                                         ▼
[Navigateur]                              [Framework JS — React, Vue, Angular…]
     │                                         │
     │  Rechargement complet de la page        ├──────────────────────────────────┐
     │  (état perdu, blanc momentané)          │  Navigation interne              │
     ▼                                         │  (routage côté client,      ◄────┘
[Nouvelle page affichée]                       │   pas de rechargement)
                                               │
                                               │  Besoin de données ?
                                               ▼
                                          [API REST / GraphQL]
                                               │
                                               │  Réponse JSON uniquement
                                               ▼
                                          [Mise à jour partielle du DOM]
                                          (seule la zone concernée change)
```

**Résumé :** dans une SPA, le navigateur charge l'application une seule fois. Ensuite, toute la navigation se fait côté client — le serveur n'est sollicité que pour des données (JSON), jamais pour régénérer une page entière.

---

## Tableau comparatif des principaux frameworks SPA

| Framework | Date de création | Communauté / Sponsor | Licence | Points forts | Points faibles |
|-----------|-----------------|----------------------|---------|--------------|----------------|
| **React** | 2013 | Meta (Facebook) — très grande communauté open-source | MIT | Écosystème immense ; Virtual DOM performant ; composants réutilisables ; marché de l'emploi n°1 ; SSR via Next.js | Bibliothèque seule (pas un framework complet) ; choix d'outils nombreux (fatigue décisionnelle) ; courbe d'apprentissage des hooks |
| **Vue.js** | 2014 | Evan You (indépendant) — communauté open-source | MIT | Prise en main rapide ; documentation excellente ; deux APIs (Options + Composition) ; très populaire en Asie | Écosystème plus restreint que React ; moins adopté en entreprise occidentale ; mises à jour majeures parfois fragmentantes |
| **Angular** | 2016 ¹ | Google — très grande communauté | MIT | Framework tout-en-un ; TypeScript natif ; architecture claire pour grandes équipes ; injection de dépendances avancée | Verbeux et complexe ; courbe d'apprentissage élevée ; bundle initial lourd ; peu adapté aux petits projets |
| **Svelte** | 2016 | Rich Harris → Vercel — communauté croissante | MIT | Pas de Virtual DOM (compile en JS natif) ; bundle minimal ; syntaxe simple ; réactivité sans boilerplate | Écosystème encore limité ; peu d'offres d'emploi ; moins mature pour très grandes applications |
| **SolidJS** | 2021 | Ryan Carniato — communauté en essor | MIT | Performances parmi les meilleures du marché ; réactivité fine sans Virtual DOM ; syntaxe proche de React ; très léger | Écosystème très jeune ; ressources et bibliothèques limitées ; peu adopté en production |

¹ Angular 2+ est une réécriture complète d'AngularJS (2010), avec lequel il n'est pas compatible.