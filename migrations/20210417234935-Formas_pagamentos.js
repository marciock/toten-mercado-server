'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Formas_pagamentos',{
      id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
      },
      forma:{
        allowNull:false,
        type:Sequelize.STRING(50)
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
    return queryInterface.dropTable('Formas_pagamentos')
  }
};
