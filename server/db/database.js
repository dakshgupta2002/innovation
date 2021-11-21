import { Sequelize } from "Sequelize";

const sequelize = new Sequelize('goku', 'postgres', '@Daksh1511', {
  host: 'localhost',
  dialect: 'postgres',
  define:{
    timestamps: false
}
});



export default sequelize;
