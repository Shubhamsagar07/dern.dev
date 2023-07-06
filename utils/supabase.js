import { createClient } from "@supabase/supabase-js";
import { configDotenv } from "dotenv";
configDotenv()

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default supabase;