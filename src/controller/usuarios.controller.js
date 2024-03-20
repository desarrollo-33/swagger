const obtenerUsuarios = (req, res) => {
    const usuarios = [
      { id: 1, nombre: 'Usuario 1' },
      { id: 2, nombre: 'Usuario 2' },
      { id: 3, nombre: 'Usuario 3' }
    ];
    res.json(usuarios);
  };
  
  module.exports = {
    obtenerUsuarios,
  };
  