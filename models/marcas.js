module.exports=(Sequelize,DataType)=>{
    const Marcas=Sequelize.define('Marcas',{
        id:{
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
            type:DataType.INTEGER
          },
          marca:{
            allowNull:true,
            type:DataType.STRING(100)
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
    return Marcas;
}
