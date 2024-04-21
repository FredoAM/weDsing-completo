const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const invitacionesRouter = require('./routes/invitaciones');
const usuariosRouter = require('./routes/usuarios'); // Importa las rutas de usuario

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/invitaciones', invitacionesRouter);
app.use('/api/login', usuariosRouter); // Usa las rutas de usuario

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
