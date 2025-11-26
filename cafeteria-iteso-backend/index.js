const express = require('express');
const app = express();
const cors = require('cors'); 
app.use(cors());

const PORT = process.env.PORT || 3000;
require('dotenv').config();

// --------------------------------------------
// 🔥 MONGODB DESACTIVADO TEMPORALMENTE EN AZURE
// --------------------------------------------

// const mongoose = require('mongoose');
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cafeteria-iteso';

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('✅ Conectado a MongoDB'))
// .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// --------------------------------------------

const path = require('path');
//app.use(express.static(path.join(__dirname, '../cafeteria-iteso-frontend')));

// Middleware para JSON
app.use(express.json());

// ⭐ Ruta principal
app.get("/", (req, res) => {
  res.send("API de Cafetería ITESO funcionando 🚀 (MongoDB desactivado temporalmente)");
});

// --------------------------------------------
// 🔥 Rutas activas (pero no funcionarán sin DB)
// --------------------------------------------
const platillosRoutes = require('./routes/platillos');
app.use('/api/platillos', (req, res) => {
  res.status(503).json({ 
    mensaje: "Servicio no disponible: MongoDB no está conectado." 
  });
});

const usuariosRoutes = require('./routes/usuarios');
app.use('/api/usuarios', (req, res) => {
  res.status(503).json({ 
    mensaje: "Servicio no disponible: MongoDB no está conectado." 
  });
});

// --------------------------------------------

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
