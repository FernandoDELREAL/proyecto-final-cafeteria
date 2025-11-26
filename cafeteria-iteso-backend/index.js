const express = require('express');
const app = express();
const cors = require('cors'); 
app.use(cors());

const PORT = process.env.PORT || 3000;
require('dotenv').config();

const mongoose = require('mongoose');
const path = require('path');
//app.use(express.static(path.join(__dirname, '../cafeteria-iteso-frontend')));

// URL local o Atlas
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cafeteria-iteso';

// Conexión a MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));

app.use(express.json());

// ⭐ Ruta principal
app.get("/", (req, res) => {
  res.send("API de Cafetería ITESO funcionando 🚀");
});

// Rutas
const platillosRoutes = require('./routes/platillos');
app.use('/api/platillos', platillosRoutes);

const usuariosRoutes = require('./routes/usuarios');
app.use('/api/usuarios', usuariosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

app.use(express.json());
