import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
config()

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY

if (!SUPABASE_URL || !SUPABASE_API_KEY) process.exit(1)

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)
