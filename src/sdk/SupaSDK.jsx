import { createClient } from '@supabase/supabase-js'

console.log('url', import.meta.env.VITE_SUPABASE_URL)
export const sdk = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)
