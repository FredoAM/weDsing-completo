const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/invitaciones');
const Invitacion = require('./invitacion');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



sequelize.sync().then(() => {
  console.log('Modelos sincronizados con la base de datos de usuario');
}).catch((error) => {
  console.error('Error al sincronizar modelos:', error);
});




module.exports = Usuario;
