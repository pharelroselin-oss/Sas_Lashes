[file name]: serveur.js
[file content begin]
const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET routes pour les pages HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Routes pour chaque page HTML
const validPages = ['services', 'products', 'about', 'contact', 'mentions-legales', 'politique-confidentialite'];

validPages.forEach(page => {
    // Route avec .html
    app.get(`/${page}.html`, (req, res) => {
        res.sendFile(path.join(__dirname, `${page}.html`));
    });
    
    // Route sans .html
    app.get(`/${page}`, (req, res) => {
        res.sendFile(path.join(__dirname, `${page}.html`));
    });
});

// API endpoint pour le formulaire de contact
app.post('/traitement_formulaire.php', (req, res) => {
    console.log('📋 Form data received:', req.body);
    res.json({ 
        success: true, 
        message: 'Votre message a été envoyé avec succès ! Nous vous contacterons sous 24h.',
        data: req.body
    });
});

// API endpoint pour les rendez-vous (compatible avec contact.html)
app.post('/api/book', (req, res) => {
    console.log('📅 Appointment request:', req.body);
    res.json({ 
        success: true, 
        message: '✅ Demande de rendez-vous reçue. Nous vous contacterons sous 24h.',
        reference: 'RDV-' + Date.now()
    });
});

// Gérer toutes les autres routes (SPA fallback)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur avec le port de Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur SAS-Lashes démarré sur le port ${PORT}`);
    console.log(`🌍 URL: http://localhost:${PORT}`);
    console.log(`⚙️  Environnement: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📞 API Endpoints:`);
    console.log(`   POST /api/book - Pour les rendez-vous`);
    console.log(`   POST /traitement_formulaire.php - Pour les contacts`);
});
