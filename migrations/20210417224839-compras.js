'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Compras',{
      id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
      },
      produto_id:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      custo:{
        allowNull:false,
        type:Sequelize.DOUBLE(10,2),

      },
      lucro:{
        allowNull:false,
        type:Sequelize.DOUBLE(4,2)
      },
      quantidade:{
        allowNull:true,
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
    return queryInterface.dropTable('Compras')
  }
};
