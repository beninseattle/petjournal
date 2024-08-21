import { Sequelize } from "sequelize";
import definePetModel from "./models/pet.ts";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./sqlite.db",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

definePetModel(sequelize);

await sequelize.sync();

export const models = sequelize.models;
export default sequelize;