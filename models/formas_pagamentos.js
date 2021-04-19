module.exports=(Sequelize,DataType)=>{
    const Formas_pagamentos=Sequelize.define('Formas_pagamentos',{
        id:{
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
            type:DataType.INTEGER
          },
          forma:{
            allowNull:false,
            type:DataType.STRING(50)
          },
        
        createdAt:{
          allowNull:false,
          type:DataType.DATE
        },
        updatedAt:{
          allowNull:false,
          type:DataType.DATE
        }
    })
    return Formas_pagamentos;
    
}