[file name]: README.md
[file content begin]
# Site Web SAS-Lashes

Site web professionnel pour SAS-Lashes, spécialiste des extensions de cils.

## 🚀 Déploiement sur Render

### Prérequis
- Compte Render.com
- Repository GitHub avec les fichiers du projet

### Étapes de déploiement
1. Allez sur [Render.com](https://render.com)
2. Cliquez sur "New +" → "Web Service"
3. Connectez votre repository GitHub
4. Configurez le service :
   - **Name**: `sas-lashes`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Cliquez sur "Create Web Service"

### 🌐 URLs
- Site principal : `https://sas-lashes.onrender.com`
- Pages :
  - `/` - Accueil
  - `/services` - Services
  - `/products` - Produits
  - `/about` - À propos
  - `/contact` - Contact
  - `/mentions-legales` - Mentions légales
  - `/politique-confidentialite` - Politique de confidentialité

### 📞 API Endpoints
- `POST /api/book` - Envoi de demande de rendez-vous
- `POST /traitement_formulaire.php` - Envoi de formulaire de contact

## 🛠️ Développement local

### Installation
```bash
npm install