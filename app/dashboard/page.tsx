import { signout } from "@/features/auth/actions"
import { Button } from "@/shared/ui/button"
import { createClient } from "@/shared/utils/supabase/server"

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4 text-muted-foreground">
        Welcome back, <span className="font-semibold text-foreground">{user?.email}</span>!
      </p>
      
      <form action={signout} className="mt-8">
        <Button variant="destructive">Sign Out</Button>
      </form>
    </div>
  )
}
