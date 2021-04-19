'use strict';

const { INTEGER } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Marcas',{
      id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
      },
      marca:{
        allowNull:true,
        type:Sequelize.STRING(100)
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
    return queryInterface.dropTable('Marcas')
  }
};
