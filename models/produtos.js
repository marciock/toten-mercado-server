module.exports=(Sequelize,DataType)=>{

    const Produtos=Sequelize.define('Produtos',{
        id:{
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
            type:DataType.INTEGER
          },
          produto:{
            allowNull:true,
            type:DataType.STRING(100)
          },
          marca_id:{
            allowNull:false,
            type:DataType.INTEGER
          },
          valor:{
            allowNull:true,
            type:DataType.DOUBLE(10,2)
          },
          createdAt:{
            allowNull:false,
            type:DataType.DATE
          },
          upatedAt:{
            allowNull:false,
            type:DataType.DATE
          }
    });
    Produtos.associate=(models)=>{
        Produtos.belongTo(models.Marcas,{
            foreinKey:'marca_id',
            targetKey:'id',
            as:'m'
        })
   
    }
    return Produtos;

}