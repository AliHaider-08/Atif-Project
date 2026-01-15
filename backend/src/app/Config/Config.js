import { Sequelize } from "sequelize";
const sequelize = new Sequelize("corvit-db", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

sequelize.authenticate()
.then(()=>{
  console.log('your connection is successfully');
})
.catch(()=>{
  console.log('your connection is failed');
})

export default sequelize;