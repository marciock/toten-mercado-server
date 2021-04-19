module.exports=(Sequelize,DataType)=>{
    const Compras=Sequelize.define('Compras',{
        id:{
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
            type:DataType.INTEGER
          },
          produto_id:{
            allowNull:false,
            type:DataType.INTEGER
          },
          custo:{
            allowNull:false,
            type:DataType.DOUBLE(10,2),
    
          },
          lucro:{
            allowNull:false,
            type:DataType.DOUBLE(4,2)
          },
          quantidade:{
            allowNull:true,
            type:DataType.INTEGER
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
    Compras.associate=(models)=>{
      Compras.belongTo(models.Produtos,{
        foreignKey:'produto_id',
        targetKey:'id',
        as:'p'
      })
    }

    return Compras;
}