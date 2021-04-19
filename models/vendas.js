module.exports=(Sequelize,DataType)=>{
    const Vendas=Sequelize.define('Vendas',{
        id:{
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
            type:DataType.INTEGER
    
          },
          cpf:{
            allowNull:true,
            type:DataType.STRING(11)
          },
          forma_pagamento_id:{
            allowNull:false,
            type:DataType.INTEGER
          },
          subtotal:{
            allowNull:false,
            type:DataType.DOUBLE(10,2)
          },
          createdAt:{
            allowNull:false,
            type:DataType.DATE
          },
          updatedAt:{
            allowNull:false,
            type:DataType.DATE
          }
    });
    Vendas.associate=(models)=>{
        Vendas.belongTo(models.Formas_pagamentos,{
            foreignKey:'forma_pagamento_id',
            targetKey:'id',
            as:'fp'
        })
    }
    return Vendas;

}