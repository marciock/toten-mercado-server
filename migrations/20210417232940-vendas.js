'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vendas',{
      id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER

      },
      cpf:{
        allowNull:true,
        type:Sequelize.STRING(11)
      },
      forma_pagamento_id:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      subtotal:{
        allowNull:false,
        type:Sequelize.DOUBLE(10,2)
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
    return queryInterface.dropTable('Vendas')
  }
};
