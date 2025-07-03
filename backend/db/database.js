import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const db = new Database(path.join(__dirname, "..", "appointment.db"));

const initScript = fs.readFileSync(
  path.join(__dirname, "../sql/init.sql", "utf8")
);

export default db;
