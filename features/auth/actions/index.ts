"use server"

import { createClient } from "@/shared/utils/supabase/server"
import { redirect } from "next/navigation"

export async function login(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }
}

export async function signup(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const full_name = formData.get("full_name") as string
  const supabase = await createClient()

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name,
      },
    },
  })

  if (error) {
    return { error: error.message }
  }
}

export async function signout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/login")
}
