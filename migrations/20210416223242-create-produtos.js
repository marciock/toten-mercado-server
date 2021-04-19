'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Produtos',{
        id:{
          allowNull:false,
          primaryKey:true,
          autoIncrement:true,
          type:Sequelize.INTEGER
        },
        produto:{
          allowNull:true,
          type:Sequelize.STRING(100)
        },
        value:{
          allowNull:true,
          type:Sequelize.DOUBLE(10,2)
        },
        createdAt:{
          allowNull:false,
          type:Sequelize.DATE
        },
        upatedAt:{
          allowNull:false,
          type:Sequelize.DATE
        },

      })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('Produtos');
  }
};
