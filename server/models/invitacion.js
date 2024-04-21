const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/invitaciones');
const Usuario = require('./usuario')


const Invitacion = sequelize.define('Invitacion', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidadInvitados: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  familiar: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  asistencia: {
    type: DataTypes.BOOLEAN,
    defaultValue: null,
  },
  pendiente: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  usuarioId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  novio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync().then(() => {
  console.log('Modelos sincronizados con la base de datos');
}).catch((error) => {
  console.error('Error al sincronizar modelos:', error);
});

module.exports = Invitacion;
