import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getUser()

  if (!data.user) redirect('/login')

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">
        Welcome to Adaptive Workbench
      </h1>
    </main>
  )
}
