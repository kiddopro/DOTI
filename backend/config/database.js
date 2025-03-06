import postgres from "postgres";
import config from "./config.js";

const connectionString = config.database;
const sql = postgres(connectionString);

export default sql;
