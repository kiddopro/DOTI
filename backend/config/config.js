import dotenv from "dotenv";
dotenv.config();

// variables
const config = {
  port: process.env.PORT || 3000,
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseKey: process.env.SUPABASE_KEY,
  supabaseServiceKey: process.env.SUPABASE_SERVICE,
  hostname: process.env.HOSTNAME || "localhost",
  database: process.env.DATABASE_URL,
};

export default config;
