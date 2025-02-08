const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Se importan las rutas
const providerRoutes = require('./routes/providers');
app.use('/api/providers', providerRoutes);

// Ruta de bienvenida
app.get('/api/welcome', (req, res) => {
  res.json({
    message: "Bienvenido Candidato 01",
    version: "1.0.0"
  });
});

// Ruta para manejar 404
app.use((req, res, next) => {
  res.status(404).send('Disculpa, la ruta no existe.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});