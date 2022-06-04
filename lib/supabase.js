// exporting this allows access to createClient(), a use that has 
// an anonymous key as well as the superbase url

import { createClient } from '@supabase/supabase-js'



const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

// this key given,allows anonymous access until a login token key is created
// to confirm identity and more permissions
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// createClient is a function that holds the supabase url, and anonymous key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;