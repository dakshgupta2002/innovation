import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import sequelize from '../db/database.js'

const Fan = sequelize.define('fan', {
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  }

});

// try{
//   Fan.create( {user_id: 1, username:'dg123', password:'123456'});
// }catch{
//   err => console.log(err);
// } 
  


export default Fan;