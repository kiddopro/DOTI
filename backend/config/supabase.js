import { createClient } from "@supabase/supabase-js";
import config from "./config.js";

const supabaseUrl = config.supabaseUrl;
const supabaseKey = config.supabaseServiceKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
