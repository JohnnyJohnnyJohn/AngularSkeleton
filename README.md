# Squelette Angular

Ce projet est un squelette Angular prêt à l'emploi, conçu pour accélérer le développement de nouvelles applications Angular. Il intègre des pratiques modernes de développement, des configurations optimisées et des outils essentiels pré-configurés.

## Caractéristiques Principales

- **Authentification**: Intègre un système d'authentification complet avec login, register et gestion de session.
- **Intercepteur HTTP**: Gère les tokens JWT pour les requêtes et réponses HTTP.
- **Snackbar Service**: Fournit un feedback visuel aux utilisateurs via des notifications.
- **Lazy Loading**: Optimise la performance en chargeant les modules à la demande.
- **Elf Store**: Utilisé pour la gestion d'état réactive.
- **Angular Material**: Fournit des composants de haute qualité pour l'interface utilisateur.

## Prérequis

Pour utiliser ce squelette, vous aurez besoin de Node.js et du gestionnaire de paquets npm installés sur votre machine. Angular CLI doit également être installé pour exécuter les commandes de développement.

## Installation

Clonez ce dépôt sur votre machine locale en utilisant :

```bash
git clone https://github.com/JohnnyJohnnyJohn/AngularSkeleton.git
cd AngularSkeleton
```

Installez les dépendances du projet :

```bash
npm install
```

## Démarrage Rapide

Pour lancer le serveur de développement :

```bash
ng serve
```

Ouvrez votre navigateur à `http://localhost:4200/` pour voir l'application en action.

## Personnalisation

Pour personnaliser ce squelette pour votre propre projet, suivez ces étapes :

1. **Environnement**: Modifiez les fichiers `environment.ts` et `environment.prod.ts` pour ajuster les configurations spécifiques à l'environnement.
2. **Composants et Services**: Ajoutez ou modifiez les composants, services et façades selon les besoins de votre application.
3. **Thèmes Angular Material**: Personnalisez les thèmes selon votre identité visuelle dans le fichier `custom-theme.scss`.

## Structure du Projet

La structure du projet est organisée comme suit :

- `src/app/core/`: Contient les services de base, intercepteurs et façades.
- `src/app/modules/`: Modules de fonctionnalité avec lazy loading.
- `src/app/shared/`: Composants, directives et pipes réutilisables.
- `src/environments/`: Configuration des environnements de développement et production.

## Contribuer

Pour contribuer à ce projet, veuillez prendre contact ou soumettre des pull requests via GitHub.

Nous espérons que ce squelette vous aidera à démarrer efficacement vos projets Angular !

