import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL || "",
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

// https://docs.expo.dev/eas-update/getting-started/
// https://www.youtube.com/watch?v=89w39OkQ2B4
// https://www.youtube.com/watch?v=a_SthPXtV6c
