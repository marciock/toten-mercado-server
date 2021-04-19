'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Itens_vendas',{
      id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
      },
      venda_id:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      produto_id:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      quantidade:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      createdAt:{
        allowNull:false,
        type:Sequelize.DATE
      },
      updatedAt:{
        allowNull:false,
        type:Sequelize.DATE
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Itens_vendas')
  }
};
