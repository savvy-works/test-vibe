"use server"

import { createClient } from "@/shared/utils/supabase/server"
import { headers } from "next/headers"

export async function forgotPassword(formData: FormData) {
  const email = formData.get("email") as string
  const supabase = await createClient()
  const origin = (await headers()).get("origin")

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?next=/dashboard/reset-password`,
  })

  if (error) {
    return { error: error.message }
  }

  return { success: "Check your email for the reset link" }
}
