module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      }
    });
  
    return Cliente;
  };