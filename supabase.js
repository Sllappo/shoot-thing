import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { AppState } from 'react-native'

const supabaseUrl = "https://isdrblvcgfkosdxpmetw.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzZHJibHZjZ2Zrb3NkeHBtZXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMzQ0NTMsImV4cCI6MjAyNzcxMDQ1M30.zmJEXSatrtQMb_7Gmnh5SuxDO_z2uKYvM7pMLHMlcug"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})