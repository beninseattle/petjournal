import express from "express";
import helmet from "helmet";
// Set up sequalize
import sequelize from "./sequelize.ts";
import { requestLogger } from "./middleware/loggers.middleware";

const PORT = process.env.PORT || 8000;

// Routes
import petRoutes from "./pet/routes";


const app = express();
// Helmet sets good defauts for many security-related headers
app.use(helmet());
// JSON body parsing
app.use(express.json());
app.use(requestLogger);

app.use("/api/v1/pet", petRoutes);

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
